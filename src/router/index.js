import Vue from 'vue';
import Router from 'vue-router';
import TeamList from '../components/team-list.vue';

Vue.use(Router)

const routes = [
    {path: '/team-list', name: 'Teams', component: TeamList}    
]

export default new Router({
    routes
})