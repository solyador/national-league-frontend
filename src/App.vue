<template>
  <v-app>
  <v-navigation-drawer app fixed clipped>
    <v-list>
      <v-list-tile v-for="item in items" :key="item.title" @click="">
        <v-list-tile-action>
          <v-icon dark>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
  <v-toolbar app fixed clipped-left></v-toolbar>
  <v-content>
    <v-container fluid fill-height>
        <v-layout justify-center align-center>
          {{ message }}
        </v-layout>
    </v-container>
  </v-content>
</v-app>
</template>

<script>
  export default {
    data() {
      return {
        message: 'The layout setup',
        items: [
        { icon: 'home', title: 'Dashboard' },
        { icon: 'person', title: 'Teams' },
        { icon: 'home', title: 'Season' },
        { icon: 'home', title: 'Stats' },
        { icon: 'bubble_chart', title: 'Standing' },
        ]
      }
    }
}
</script>

<style>
 .content{
    padding-left: 200px!important;
  }
.navigation-drawer{
   width: 200px!important; 
  }

</style>