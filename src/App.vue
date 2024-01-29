<template>
  <div id="app">
    <v-app>
      <v-app-bar
          app
          color="transparent"
          dark
          flat
      >
        <div class="d-flex align-center">
                  <v-img
                    alt="Logo Potagers Partagés"
                    contain
                    :src="require('@/assets/popa-logo-carré-vert-foncé.png')"
                    transition="scale-transition"
                    width="55"
                  />
          <router-link to="/" class="text-decoration-none">
            <h3 class="black--text logo-font" :class="{
            'small-logo': $vuetify.breakpoint.smAndDown
          }">
              <span v-if="$vuetify.breakpoint.mdAndUp">Les Potagers partagés</span>
              <span v-if="$vuetify.breakpoint.smAndDown">Potagers partagés</span>
            </h3>
          </router-link>
        </div>

        <v-spacer></v-spacer>
        <v-btn to="/ouverture" text class="black--text" v-if="$vuetify.breakpoint.mdAndUp">Heures d'ouverture</v-btn>
<!--        <v-btn href="https://potagerspartages.ca/compte-prepaye-2022" text class="black&#45;&#45;text" v-if="$vuetify.breakpoint.mdAndUp">Compte prépayé</v-btn>-->
        <v-btn to="/" text class="black--text" v-if="$vuetify.breakpoint.mdAndUp">À propos</v-btn>
        <v-btn to="/cooperant" text class="black--text" v-if="$vuetify.breakpoint.mdAndUp">Recrutement</v-btn>
        <v-btn href="http://eepurl.com/gXVV-T" text class="black--text" v-if="$vuetify.breakpoint.mdAndUp">Infolettre</v-btn>
        <v-btn to="/contact" text class="black--text" v-if="$vuetify.breakpoint.mdAndUp">Contactez-nous</v-btn>
        <!--      <v-btn to="/offre-emploi" text class="black&#45;&#45;text" v-if="$vuetify.breakpoint.mdAndUp">Offre d'emploi</v-btn>-->
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
<!--            <v-list-item>-->
<!--              <v-list-item-content>-->
<!--                <v-list-item-title>-->
<!--                  <v-btn href="https://potagerspartages.ca/compte-prepaye-2022" text class="black&#45;&#45;text">Compte prépayé</v-btn>-->
<!--                </v-list-item-title>-->
<!--              </v-list-item-content>-->
<!--            </v-list-item>-->
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
                  <v-btn to="/cooperant" text class="black--text">Recrutement</v-btn>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  <v-btn href="http://eepurl.com/gXVV-T" text class="black--text">
                    Infolettre
                  </v-btn>
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
            <!--          <v-list-item>-->
            <!--            <v-list-item-content>-->
            <!--              <v-list-item-title>-->
            <!--                <v-btn to="/offre-emploi" text class="black&#45;&#45;text">Offre d'emploi</v-btn>-->
            <!--              </v-list-item-title>-->
            <!--            </v-list-item-content>-->
            <!--          </v-list-item>-->
          </v-list>
        </v-navigation-drawer>
      </v-app-bar>
      <v-main>
        <router-view/>
      </v-main>
    </v-app>
    <v-footer
        fixed
        class="font-weight-medium"
        dark
    >
      <v-col
          class="vh-center body-1"
          cols="12"
      >
        <strong class="body-1" style="letter-spacing: 3px;font-size:18px;">
          Ferme à Paspébiac
        </strong>
      </v-col>
    </v-footer>
  </div>
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
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@800&family=Josefin%20Slab&display=swap&display=swap');
.logo-font {
  font-family: 'Josefin Slab', sans-serif;
  text-decoration: none !important;
  font-size:30px;
  font-weight: lighter;
  //text-shadow:
  //    -1px -1px 0 #17347c,
  //    0   -1px 0 #17347c,
  //    1px -1px 0 #17347c,
  //    1px  0   0 #17347c,
  //    1px  1px 0 #17347c,
  //    0    1px 0 #17347c,
  //    -1px  1px 0 #17347c,
  //    -1px  0   0 #17347c;
}
.small-logo{
  font-size:25px;
}
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

.vh-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.word-break {
  word-break: inherit !important;
}
</style>
