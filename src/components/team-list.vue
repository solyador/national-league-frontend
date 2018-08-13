<template>
  <div class="nfl">
    <div v-for="conference in nfl" :key="conference.id">
      <label class="conference-title">
        <img v-bind:src="getTeamLogo(conference[0][0].conference)" class="team-logo">
      </label>
      <div class="nfl-conference">
        <div v-for="division in conference" :key="division.id" class="nfl-division">
          <div class="card bg-light mb-5 division-card">
            <div class="card-header">{{division[0].conference }}-{{ division[0].division }}</div>
            <div class="card-body">
              <table class="table table-hover">
                <tbody>
                  <tr v-for="team in division" :key="team.id">
                    <td> <img v-bind:src="getTeamLogo(team.name)" class="team-logo"></td>
                    <td style="padding: 15px;">{{ team.name }}</td>
                    <td>{{ team.city }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { HTTP_TEAMS } from "../utils/http-common";
import { TEAM_HELPER } from "../utils/team-helper";
export default {
  data() {
    return {
      nfl: [],
      headers: [
        { text: "", value: "number", align: "left", sortable: false },
        { text: "Name", value: "name", sortable: false },
        { text: "City", value: "city", sortable: false }
      ]
    };
  },
  methods: {
    getTeamLogo(teamName) {
      return "/assets/media/" + teamName.toLowerCase() + ".png";
    }
  },
  mounted() {
    HTTP_TEAMS.get()
      .then(response => {
        this.nfl = TEAM_HELPER.getGroups(response.data._embedded.teams);
      })
      .catch(e => {
        console.log(e);
      });
  }
};
</script>

<style scoped>
.nfl-conference {
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
}

.nfl-division {
  flex: 0 0 24.5%;
}

.card-header,
.table {
  font-size: 14px;
}

.conference-title {
  margin-left: 5px;
}

.team-logo {
  width: 35px;
  height: 35px;
}
</style>


