<template>
  <v-app>
    <v-app-bar
        app
        color="transparent"
        dark
        flat
    >
      <div class="d-flex align-center">
        <!--        <v-img-->
        <!--          alt="Vuetify Logo"-->
        <!--          class="shrink mr-2"-->
        <!--          contain-->
        <!--          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"-->
        <!--          transition="scale-transition"-->
        <!--          width="40"-->
        <!--        />-->

        <!--        <v-img-->
        <!--          alt="Vuetify Name"-->
        <!--          class="shrink mt-1 hidden-sm-and-down"-->
        <!--          contain-->
        <!--          min-width="100"-->
        <!--          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"-->
        <!--          width="100"-->
        <!--        />-->
        <router-link to="/" class="text-decoration-none">
          <h3 class="black--text">
            <span>Ferme Coopérative Les Potagers Partagés</span>
          </h3>
        </router-link>
      </div>

      <v-spacer></v-spacer>
      <v-btn to="/ouverture" text class="black--text" v-if="$vuetify.breakpoint.mdAndUp">Heures d'ouverture</v-btn>
      <v-btn to="/abonner" text class="black--text" v-if="$vuetify.breakpoint.mdAndUp">S'abonner</v-btn>
      <v-btn to="/" text class="black--text" v-if="$vuetify.breakpoint.mdAndUp">À propos</v-btn>
      <v-btn to="/contact" text class="black--text" v-if="$vuetify.breakpoint.mdAndUp">Contactez-nous</v-btn>
      <v-btn to="/offre-emploi" text class="black--text" v-if="$vuetify.breakpoint.mdAndUp">Offre d'emploi</v-btn>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="black--text"
                          v-if="$vuetify.breakpoint.smAndDown"></v-app-bar-nav-icon>
      <v-navigation-drawer
          clipped
          v-model="drawer"
          enable-resize-watcher
          fixed
          app
          dense
          hide-overlay
          light
      >
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <v-btn to="/ouverture" text class="black--text">Heures d'ouverture</v-btn>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <v-btn to="/abonner" text class="black--text">S'abonner</v-btn>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <v-btn to="/" text class="black--text">À propos</v-btn>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <v-btn to="/contact" text class="black--text">Contactez-nous</v-btn>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <v-btn to="/offre-emploi" text class="black--text">Offre d'emploi</v-btn>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {},

  data: () => ({
    drawer: false
  }),
};
</script>
<style lang="scss">
a {
  font-weight: bold;
  color: #2c3e50;

  & .router-link-exact-active {
    color: #42b983;
  }

}

.link-color {
  color: #0000FF;
}
</style>
