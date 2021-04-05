<template>
  <v-container>
    <v-row align="center"
           justify="center">
      <v-col cols="12" md="8" xl="6">
        <h2 class="font-weight-thin mb-4">La ferme</h2>
        <v-img
            :src="require('../assets/la-ferme.jpg')"
            class="my-3"
            contain
        />
        <p>
          Nous cultivons sur environ 3 acres une trentaine de variétés de légumes. Nous avons aussi un jardin
          de semences d'un tiers d'acres.
        </p>
        <p>
          Notre serre est de 30x100 pied et nous améliorons nos installations
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
            <p>
              Les
              <a href="https://www.equiterre.org/solution/les-pesticides-quest-ce-que-cest">
                pesticides de synthèse
              </a>
              épandus en agriculture conventionnelle qui peuvent pénétrer dans les cultures ou laisser des
              traces de résidus à l’extérieur des aliments (ex. : pelure). Les enfants demeurent les plus
              sensibles à ces produits, leur système immunitaire ne leur permettant pas de se défendre
              aussi
              efficacement que les adultes.
            </p>
            <p>
              Des paniers de légumes « zéro déchet » dans la majorité des fermiers pour une réduction à la source des
              emballages. Si c’est réellement nécessaire, les emballages fournis sont souvent récupérés par le fermier
              (élastique, casseaux, etc.) ou peuvent être compostés ou recyclés pour une réduction au minimum de leur
              impact. Amenez simplement vos contenants et vos sacs réutilisables et le tour est joué!
            </p>
            <p>
              En appuyant les fermiers d’ici, vous favorisez un circuit court en alimentation. De fait, vous contribuez
              grandement à réduire le kilométrage alimentaire (en moyenne de 2 500 km!) que parcourent les aliments, de
              leur lieu de cueillette à votre assiette. Une contribution significative à la réduction des gaz à effet de
              serre (GES).
            </p>
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
