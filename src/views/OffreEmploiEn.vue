<template>
  <v-container>
    <v-row align="center"
           justify="center">
      <v-col cols="12" md="8" xl="6">
        <h2 class="font-weight-thin mb-4">Job offer</h2>
        <h2 class="font-weight-regular mb-4">Co-manager of Organic Vegetable Cultivation</h2>
        <h3 class="mt-4 mb-4">Potagers Partagés’s Mission</h3>
        <p class="body-1">
          Les Potagers partagés is a work cooperative, and one of the <a
            href="http://manoir.community">Manoir</a>'s projects.
          The Manoir is an
          <span class="text-decoration-underline">intentional community</span>
          to which the Farm supplies healthy and eco-friendly vegetables. The farm also offers products to the wider local community in different ways: vegetable baskets, selling stand, harvest’s shares and local markets.
        </p>
        <h3 class="mt-4 mb-4">Main responsabilities</h3>
        <h4 class="body-1 mb-3">
          Collaborationg with the members of Potagers partagés, the co-manager will:
        </h4>
        <ul class="body-1">
          <li>
            Plan the production for 2022
          </li>
          <li>
            Make the the farm’s operations run smoothly
          </li>
          <li>
            Monitor the production (sowing, transplanting, direct sowing)
          </li>
          <li>
            Be responsible for primary soil works
          </li>
          <li>
            Fertilization and weeding
          </li>
          <li>
            Screening and phytoprotection
          </li>
          <li>
            Team coordination
          </li>
          <li>
            Customer service
          </li>
          <li>
            Respond to emails and phones, and manage the Facebook page.
          </li>
        </ul>
        <h3 class="mt-4 mb-4">Profile</h3>
        <ul class="body-1">
          <li>
            Strong agricultural knowledge
          </li>
          <li>
            Rigor, proactivity and hard-work
          </li>
          <li>
            Desire to work in a team
          </li>
          <li>
            Experience in organic vegetable production
          </li>
          <li>
            Good communication skills (non-violent communication)
          </li>
          <li>
            Open-mindedness
          </li>
          <li>
            Awareness of social issues (LGBTQ+, feminism, anti-capitalism)
          </li>
          <li>
            Interest in intentional communities with shared revenues, an asset
          </li>
          <li>
            Knowledge in mechanics, an asset
          </li>
        </ul>
        <h3 class="mt-4 mb-4">Working Conditions</h3>
        <ul class="body-1">
          <li>
            40 hours per week
          </li>
          <li>
            Base salary at $15 / hr
          </li>
          <li>
            Farm planning work starts early in 2022, can be done remotely
          </li>
          <li>
            Fieldwork from May 1 to end of september
          </li>
          <li>
            Renting accommodation available on site
          </li>
        </ul>
        <h3 class="mt-4 mb-4">To apply</h3>
        <ul class="body-1">
          <li>
            Resume (c.v.)
          </li>
          <li>
            Cover letter
          </li>
        </ul>
      </v-col>
      <v-card class="mt-2 mb-2">
        <v-card-text class="body-1">
          Please address your application to Solange at
          <a href="mailto:potagerspartages@gmail.com">potagerspartages@gmail.com</a>.
          Do not hesitate to contact us for any questions.
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
