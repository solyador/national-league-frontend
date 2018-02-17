<template>
<div id="container">
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
       <a class="navbar-brand" href="#">NFL</a>
      <div class="collapse navbar-collapse" id="navbarColor03">
      <ul class="navbar-nav mr-auto">
      <li v-for="item in items" :key="item.title"  class="nav-item">
        <a class="nav-link" href="#" v-on:click="navigate(item)">
          {{ item.title }}
          </a>
      </li>
      </ul>
    </div>
  </nav>
  </header>
  <main class="jumbotron" style="margin:0">
     <router-view></router-view>
</main>
</div>
</template>

<script>
import router from "./router";
export default {
  data() {
    return {
      message: "The layout setup",
      items: [
        { icon: "home", title: "Dashboard" },
        { icon: "person", title: "Teams" },
        { icon: "home", title: "Season" },
        { icon: "home", title: "Stats" },
        { icon: "bubble_chart", title: "Standing" }
      ]
    };
  },
  methods: {
    navigate(item) {
      console.log({ name: item.title });
      router.push({ name: item.title });
    }
  }
};
</script>

<style scoped>
#container {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 50px auto;
  grid-template-areas:
    "header"
    "content";
}
main {
  grid-area: content;
  padding: 20px;
}
footer {
  grid-area: footer;
  background-color: #b24334;
}
aside {
  grid-area: sidebar;
  background-color: lightgray;
}
header {
  grid-area: header;
}
</style>