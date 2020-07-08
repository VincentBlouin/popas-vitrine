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
                        Ferme Coopérative Les Potagers Partagés
                    </h3>
                </router-link>
            </div>

            <v-spacer></v-spacer>
            <v-btn to="/" text class="black--text">À propos</v-btn>
            <v-btn to="/contact" text class="black--text">Contactez-nous</v-btn>
            <v-btn
                    href="https://github.com/vuetifyjs/vuetify/releases/latest"
                    target="_blank"
                    text
            >
                <span class="mr-2">Latest Release</span>
                <v-icon>mdi-open-in-new</v-icon>
            </v-btn>
        </v-app-bar>

        <v-content>
            <router-view/>
        </v-content>
    </v-app>
</template>

<script>
    export default {
        name: 'App',

        components: {},

        data: () => ({
            //
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
</style>
