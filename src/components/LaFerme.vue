<template>
    <v-container>
        <v-row>
            <!--      <v-col cols="12">-->
            <!--        <v-img-->
            <!--          :src="require('../assets/logo.svg')"-->
            <!--          class="my-3"-->
            <!--          contain-->
            <!--          height="200"-->
            <!--        />-->
            <!--      </v-col>-->
            <v-col cols="4"></v-col>
            <v-col cols="4">
                <h2 class="font-weight-thin mb-4">La ferme</h2>
                <v-img
                        :src="require('../assets/la-ferme.jpg')"
                        class="my-3"
                        contain
                />
                <p class="subheading font-weight-regular">
                    Nous cultivons sur environ 3 acres une trentaine de variétés de légumes. Nous avons aussi un jardin
                    de semences d'un tiers d'acres. Notre serre est de 30x100 pied et nous améliorons nos installations
                    à chaque année.
                </p>
                <p>
                    Nous sommes certifiés biologiques par Ecocert Canada depuis l'été 2018
                </p>
                <v-card>
                    <v-card-title>
                        Les paniers bio, un geste pour la planète
                    </v-card-title>
                    <v-card-text>
                        Les pesticides de synthèse épandus en agriculture conventionnelle qui peuvent pénétrer dans les cultures ou laisser des traces de résidus à l’extérieur des aliments (ex. : pelure). Les enfants demeurent les plus sensibles à ces produits, leur système immunitaire ne leur permettant pas de se défendre aussi efficacement que les adultes.
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: 'LaFerme',

        data: () => ({
            ecosystem: [
                {
                    text: 'vuetify-loader',
                    href: 'https://github.com/vuetifyjs/vuetify-loader',
                },
                {
                    text: 'github',
                    href: 'https://github.com/vuetifyjs/vuetify',
                },
                {
                    text: 'awesome-vuetify',
                    href: 'https://github.com/vuetifyjs/awesome-vuetify',
                },
            ],
            importantLinks: [
                {
                    text: 'Documentation',
                    href: 'https://vuetifyjs.com',
                },
                {
                    text: 'Chat',
                    href: 'https://community.vuetifyjs.com',
                },
                {
                    text: 'Made with Vuetify',
                    href: 'https://madewithvuejs.com/vuetify',
                },
                {
                    text: 'Twitter',
                    href: 'https://twitter.com/vuetifyjs',
                },
                {
                    text: 'Articles',
                    href: 'https://medium.com/vuetify',
                },
            ],
            whatsNext: [
                {
                    text: 'Explore components',
                    href: 'https://vuetifyjs.com/components/api-explorer',
                },
                {
                    text: 'Select a layout',
                    href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
                },
                {
                    text: 'Frequently Asked Questions',
                    href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
                },
            ],
        }),
    }
</script>
