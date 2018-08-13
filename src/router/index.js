import Vue from 'vue';
import Router from 'vue-router';
import TeamList from '../components/team-list.vue';
import GameDay from '../components/game-day.vue';
Vue.use(Router)

const routes = [
    { path: '/team-list', name: 'Teams', component: TeamList },    
    { path: '/game-day', name: 'Game', component: GameDay }    
]

export default new Router({
    routes
})