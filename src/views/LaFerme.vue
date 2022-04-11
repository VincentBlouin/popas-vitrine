<template>
  <v-container>
    <v-row align="center"
           justify="center">
      <v-col cols="12" md="8" xl="6">
        <v-card flat class="pt-14 pb-6" color="transparent">
          <v-card-title
              class="pt-0 pb-8 text-center font-weight-thin mt-6 text-center text-h2 vh-center word-break"
          >
            Ferme à Paspébiac
          </v-card-title>
          <v-card-subtitle class="text-h6 font-weight-regular text-center">
            Pour des légumes local, biologiques et de saison
          </v-card-subtitle>
        </v-card>
        <v-list class="mb-10" outlined>
          <v-list-item href="https://potagerspartages.ca/compte-prepaye-2022">
            <v-list-item-title class="text-center text-h5 blue--text">
<!--              <v-icon large>account_box</v-icon>-->
              Ouvrez un compte prépayé
              <v-list-item-subtitle class="text-center mt-3 body-1">
                Vous pourrez l'utiliser pour acheter nos légumes cette saison
              </v-list-item-subtitle>
            </v-list-item-title>
          </v-list-item>
        </v-list>
<!--        <h2 class="font-weight-thin mb-4">La ferme</h2>-->
        <p class="text-h6 font-weight-regular">
          Nous sommes une coopérative de 3 travailleurs qui embauche en plus de 2 à 3 employés par année.
        </p>
        <p class="text-h6 font-weight-regular">
          Depuis 2017, nous produisons des légumes pour la région de Paspébiac et de la Baie des Chaleurs.
        </p>
        <p class="text-h6 font-weight-regular">
          Depuis 2018, nous sommes certifiés biologique par Ecocert Canada.
        </p>
        <p class="text-h6 font-weight-regular">
          Nous cultivons sur 3 acres une variété de 30 légumes.
        </p>
        <v-img
            :src="require('../assets/la-ferme.jpg')"
            class="my-3"
            contain
        />
        <div class="pt-12 pb-12"></div>
<!--        <v-card>-->
<!--          <v-card-title>-->
<!--            Pourquoi acheter nos légumes.-->
<!--          </v-card-title>-->
<!--          <v-card-text>-->
<!--            <p>-->
<!--              Les-->
<!--              <a href="https://www.equiterre.org/solution/les-pesticides-quest-ce-que-cest">-->
<!--                pesticides de synthèse-->
<!--              </a>-->
<!--              épandus en agriculture conventionnelle qui peuvent pénétrer dans les cultures ou laisser des-->
<!--              traces de résidus à l’extérieur des aliments (ex. : pelure). Les enfants demeurent les plus-->
<!--              sensibles à ces produits, leur système immunitaire ne leur permettant pas de se défendre-->
<!--              aussi-->
<!--              efficacement que les adultes.-->
<!--            </p>-->
<!--            <p>-->
<!--              Des paniers de légumes « zéro déchet » dans la majorité des fermiers pour une réduction à la source des-->
<!--              emballages. Si c’est réellement nécessaire, les emballages fournis sont souvent récupérés par le fermier-->
<!--              (élastique, casseaux, etc.) ou peuvent être compostés ou recyclés pour une réduction au minimum de leur-->
<!--              impact. Amenez simplement vos contenants et vos sacs réutilisables et le tour est joué!-->
<!--            </p>-->
<!--            <p>-->
<!--              En appuyant les fermiers d’ici, vous favorisez un circuit court en alimentation. De fait, vous contribuez-->
<!--              grandement à réduire le kilométrage alimentaire (en moyenne de 2 500 km!) que parcourent les aliments, de-->
<!--              leur lieu de cueillette à votre assiette. Une contribution significative à la réduction des gaz à effet de-->
<!--              serre (GES).-->
<!--            </p>-->
<!--          </v-card-text>-->
<!--        </v-card>-->
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
