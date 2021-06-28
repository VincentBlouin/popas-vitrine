<template>
  <v-container>
    <v-row align="center"
           justify="center">
      <v-col cols="12" md="8" xl="6">
        <h2 class="font-weight-thin mb-4">Heures d'ouverture</h2>
        <v-alert
            colored-border
            elevation="2"
        >
          <p>
            Le kiosque est ouvert le <strong>jeudi</strong> et le <strong>dimanche</strong> de
            <strong>10h à 18h</strong>
          </p>
          <ul>
            <li class="pb-4">
              De 10h à 14h un employé est présent au kiosque pour vous servir.
            </li>
            <li class="pb-4">
              De 14h à 18h le kiosque est en libre service avec assistance au besoin.
            </li>
          </ul>
          <p>
            Au besoin contactez nous au <a href="tel:581-233-7672">581-233-7672</a>
          </p>
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
