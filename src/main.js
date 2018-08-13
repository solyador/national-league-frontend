import Vue from "vue";
import router from "./router";
import App from "./App.vue";
import "../node_modules/bootswatch/dist/materia/bootstrap.min.css";
require("./utils/team-logo.js");
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
