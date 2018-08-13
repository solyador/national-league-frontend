<template>
    <div class="games">
        <div v-if="games" class="game-panel card mb-3">
        <div class="card-header week-info">
           <span>{{ getWeek(week) }}</span>
        </div>
          <div v-for='game of games' :key="game.id" class="one-game">
              <img v-bind:src="getTeamLogo(game.localTeam)" class="team-logo">
              <span class="team-name">{{ getTeamName(game.localTeam) }}</span>
              <span class="team-score">{{ game.localTeamGoals }} </span>
              <span class="team-score">{{ game.visitorTeamGoals }} </span>
              <span class="team-name">{{ getTeamName(game.visitorTeam) }} </span>
              <img v-bind:src="getTeamLogo(game.visitorTeam)" class="team-logo">
          </div>
          <div class="card-footer text-muted">
        <div class="simulation-buttons btn-group">
          <button class="btn btn-secondary simulation-button" @click="showPreviousDay">Previous</button>
        <button class="btn btn-secondary simulation-button" @click="simulate">Simulate</button>
        <button class="btn btn-secondary simulation-button" @click="showNextDay">Next</button>
        </div>
        </div>
    </div>
    <div class="games-info">

    </div>
    </div>
</template>

<script>
import { HTTP_GAME, HTTP_TEAMS, HTTP_SEASONS } from "../utils/http-common";
export default {
  data() {
    return{
        games: [],
        teams: [],
        weekToPlay: 1,
        currentSeason: 1,
        rankings: [],
        week: 1,
    }
  },
  methods: {
    getTeamLogo(teamNumber) {
      return "/assets/media/" + this.getTeamName(teamNumber).toLowerCase()+".png";
    },
    getWeek() {
      switch (this.week) {
         case 17: 
              return 'Wild Card';
              break; 
         case 18: 
              return 'Divisional';
              break;
         case 19: 
              return 'Championship';
              break;          
         case 20: 
              return 'SuperBowl';
              break;
         default:
              return "Week : " + this.week;              
      } 
    },
    getTeamName(teamId) {
      if (this.teams){
        return this.teams[teamId - 1].name;
      }
      else return "not found";
    },
    showNextDay() { 
      this.week = this.week + 1;
      if (this.week < 21) {
        this.getGames(this.week, this.currentSeason);
      }
      else {
        this.week = this.week - 1;
      }
    },
    showPreviousDay() {
      this.week = this.week - 1;
      if (this.week > 0) {
        this.getGames(this.week, this.currentSeason);
      }
      else {
        this.week = this.week + 1;
      }
    },
    getGames(week, currentSeason){
      console.log(week + ' ' + currentSeason);
      HTTP_GAME.get('/search/findAllByWeekAndSeason?weekToPlay='+ week + '&season='+ currentSeason).then(
              response => {
                  this.games = response.data._embedded.games;
              }
          )
    },
    simulate(){
      if (this.week == this.weekToPlay){
        HTTP_GAME.get('/simulated/' + this.weekToPlay).then(
          response => {
            debugger;
            this.games = response.data;
            //TODO updae ranking if the last game of the season
            this.weekToPlay += 1;
          });
      }
    }
  },
  
  mounted() {
        HTTP_SEASONS.get('/search/currentSeason').then(
            response => {
                this.week = response.data.weekToPlay;
                this.weekToPlay = response.data.weekToPlay;
                this.currentSeason = response.data.seasonId;       
                this.getGames(this.week, this.currentSeason);
            }
        ),
        HTTP_TEAMS.get().then(
            response => { 
                this.teams = response.data._embedded.teams
            }
        )
  }
};
</script>

<style scoped>
.week-info {
  text-align: center;
}

.games {
  display: flex;
}

.game-panel {
  flex: 2;
}

.games-info {
  flex: 3;
}

.one-game {
  display: flex;
  margin: 4px 10px;
  border-bottom: 0.3px solid grey;
}

.team-score {
  flex: 1;
  margin: auto;
  text-align: center;
}

.team-name {
  flex: 3;
  margin: auto;
  text-align: center;
}

.team-logo {
  width: 35px;
  height: 35px;
}

.simulation-buttons {
  display: flex;
  margin:auto;
  justify-content: space-between;
}

.simulation-button {
  flex: 1;
}
</style>
