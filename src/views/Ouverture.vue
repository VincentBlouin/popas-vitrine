<template>
  <v-container>
    <v-row align="center"
           justify="center">
      <v-col cols="12" md="8" xl="6">
        <h2 class="font-weight-thin mb-4">Heures d'ouverture</h2>
        <v-alert
            colored-border
            type="info"
            elevation="2"
        >
          Les heures d'ouverture pour la saison 2021 sont encore à déterminer
        </v-alert>
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
