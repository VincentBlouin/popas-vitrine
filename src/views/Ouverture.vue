<template>
  <v-container>
    <v-row align="center"
           justify="center">
      <v-col cols="12" md="8" xl="6">
        <h2 class="font-weight-thin mb-4">Heures d'ouverture 2022</h2>
        <v-card class="mt-12">
          <v-card-title class="vh-center">
            Au coin St-Pie X / 132 devant l'hôtel de ville
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text class="font-weight-regular text-h6 text--black pb-0 vh-center">
            Tous les jeudis
          </v-card-text>
          <v-card-text class="font-weight-regular text-h6 text--black pb-0 vh-center">
            Entre 14h et 18h
          </v-card-text>
          <v-card-text class="font-weight-regular text-h6 text--black vh-center">
            Du 7 juillet jusqu'au 22 septembre.
          </v-card-text>
        </v-card>
        <v-card class="mt-12 mb-12">
          <v-card-title class="vh-center">
            Au marché de New Carlisle
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text class="font-weight-regular text-h6 text--black pb-0 vh-center">
            Tous les samedis
          </v-card-text>
          <v-card-text class="font-weight-regular text-h6 text--black pb-0 vh-center">
            Entre 9h et midi
          </v-card-text>
          <v-card-text class="font-weight-regular text-h6 text--black vh-center">
            Du 23 juillet au 24 septembre
          </v-card-text>
        </v-card>
        <v-img
            :src="require('../assets/legumes.jpg')"
            class="my-3"
            contain
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Abonner'
}
</script>
