<template>
  <v-container>
    <v-row align="center"
           justify="center">
      <v-col cols="12" md="6">
        <h2 class="font-weight-thin mb-4">Offre d'emploi</h2>
        <h2 class="font-weight-regular mb-4">Co-gestionnaire de culture maraîchère biologique</h2>
        <h3 class="mt-4 mb-4">Mission des Potagers Partagés</h3>
        <p class="body-1">
          Les Potagers partagés est une coopérative de travail, et l’un des projets du <a
            href="http://manoir.community">Manoir</a>, une
          <span class="text-decoration-underline">communauté intentionnelle</span>
          à laquelle la ferme fournit des aliments sains et éco-responsables. La coopérative offre aussi
          ses produits à la communauté plus large, et ce à travers des paniers, un kiosque libre-service, des parts de
          récolte, de la vente de semences et des marchés.
        </p>
        <h3 class="mt-4 mb-4">Principales fonctions</h3>
        <h4 class="body-1 mb-3">
          En collaboration avec les membres des Potagers partagés:
        </h4>
        <ul class="body-1">
          <li>
            Planification de la production pour 2021
          </li>
          <li>
            S’assurer du bon fonctionnement de la ferme
          </li>
          <li>
            Suivi de la production (semis, transplantation; semis direct)
          </li>
          <li>
            Responsable des travaux de sol primaires
          </li>
          <li>
            Fertilisation et désherbage
          </li>
          <li>
            Dépistage et phytoprotection
          </li>
          <li>
            Gestion du personnel
          </li>
          <li>
            Service à la clientèle
          </li>
          <li>
            Répondre aux courriels, facebook et téléphone
          </li>
        </ul>
        <h3 class="mt-4 mb-4">Profil recherché</h3>
        <ul class="body-1">
          <li>
            Connaissances agricoles
          </li>
          <li>
            Rigueur, proactivité et vaillance
          </li>
          <li>
            Désir de travailler en équipe
          </li>
          <li>
            Expériences maraîchères
          </li>
          <li>
            Bonne communication (de type non-violente)
          </li>
          <li>
            Ouverture d’esprit
          </li>
          <li>
            Conscience d’enjeux sociaux (LGBTQ+, féminisme, anti-capitalisme)
          </li>
          <li>
            Intérêt pour les communautés intentionnelles à revenus partagés, un atout
          </li>
        </ul>
        <h3 class="mt-4 mb-4">Conditions de travail</h3>
        <ul class="body-1">
          <li>
            40h par semaine
          </li>
          <li>
            Salaire de base à 15$/h
          </li>
          <li>
            1er mai à la mi-novembre
          </li>
          <li>
            Possibilité de louer un logement sur place
          </li>
        </ul>
        <h3 class="mt-4 mb-4">Pour postuler</h3>
        <ul class="body-1">
          <li>
            C.V.
          </li>
          <li>
            Lettre de présentation
          </li>
        </ul>
      </v-col>
      <v-card class="mt-2 mb-2">
        <v-card-text class="body-1">
          Merci d’envoyer votre candidature à l’intention de Solange à
          <a href="mailto:potagerspartages@gmail.com">potagerspartages@gmail.com</a>.
          Pour toutes questions n’hésitez pas à nous écrire.
        </v-card-text>
      </v-card>
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
