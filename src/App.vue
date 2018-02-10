  <template>
  <v-app>
    <v-alert outline color="success" icon="check_circle" :value="true">
      {{message}}
    </v-alert>
  </v-app>
  </template>

  <script>
  export default {
    data(){
      return {
        message: "Adding vuetify to the app" 
        }
    }
  }
  </script>

