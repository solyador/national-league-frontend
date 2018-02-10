<template>
  <v-app>
  <v-navigation-drawer app fixed></v-navigation-drawer>
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
        message: 'The layout setup'
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