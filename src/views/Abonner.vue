<template>
  <v-container>
    <v-row align="center"
           justify="center">
      <v-col cols="12" md="8" xl="6">
        <h2 class="font-weight-thin mb-4">S'abonner</h2>
        <v-list flat>
          <v-list-item href="https://bit.ly/PaniersPotagersPartagés2021" :class="{
            'pl-0 pr-0': $vuetify.breakpoint.smAndDown
          }">
            <v-list-item-icon>
              <v-icon>home_work</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                S'abonner aux paniers livrés
              </v-list-item-title>
              <v-list-item-subtitle>
                À domicile ou au travail
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <!--          <v-list-item href="https://bit.ly/panierslibreservice2020" :class="{-->
          <!--            'pl-0 pr-0': $vuetify.breakpoint.smAndDown-->
          <!--          }">-->
          <!--            <v-list-item-icon>-->
          <!--              <v-icon>store</v-icon>-->
          <!--            </v-list-item-icon>-->
          <!--            <v-list-item-content>-->
          <!--              <v-list-item-title>-->
          <!--                S'abonner aux paniers libre-service-->
          <!--              </v-list-item-title>-->
          <!--              <v-list-item-subtitle>-->
          <!--                Au kiosque ou aux marchés public-->
          <!--              </v-list-item-subtitle>-->
          <!--            </v-list-item-content>-->
          <!--          </v-list-item>-->
        </v-list>
        <v-img
            :src="require('../assets/legumes2.jpg')"
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
