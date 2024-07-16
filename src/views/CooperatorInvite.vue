<script setup>

</script>

<template>
  <v-container class="pb-16 mb-16">
    <v-row align="center"
           justify="center">
      <v-col cols="12" md="8" xl="6">
        <v-card flat>
          <v-img
              :src="require('@/assets/semis.jpg')"
              transition="scale-transition"
              class="white--text align-end"
              height="175"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          >
            <v-card-title class="white--text" :class="{
              'text-h4': $vuetify.breakpoint.mdAndUp,
              'text-h6': $vuetify.breakpoint.smAndDown
            }">
              Coopérant-es recherché-es
            </v-card-title>
          </v-img>
        </v-card>
        <p class="text-h6 font-weight-regular mt-8">
          Imagine commencer ton projet d’agriculture biologique sans partir de zéro : tout est prêt pour toi. Des champs
          fertiles, une serre, un tracteur, une chambre froide, de nombreux outils, bref, tout l'équipement nécessaire
          pour produire des légumes sont à ta disposition, au sein des Potagers Partagés, une coopérative maraîchère
          ancrée en Gaspésie.
        </p>
        <p class="text-h6 font-weight-regular">
          En rejoignant notre coopérative, tu bénéficieras du savoir-faire de membres expérimentés pouvant t'épauler :
          de l'administration à la mise en marché, en passant par l'entretien des infrastructures et les travaux aux
          champs.
        </p>
        <p class="text-h6 font-weight-regular">
          La ferme, active de 2017 à 2022 et sans aucune dette, offre un cadre idéal pour développer ton projet. De
          plus, en optant pour notre formule coop, tu pourrais même bénéficier du chômage pour la saison froide.
        </p>
        <h2 class="mt-8">Membres de la coop</h2>
        <p class="text-h6 font-weight-regular">
          Trois membres composent actuellement la coopérative. Ces derniers ne sont pas disponibles à temps plein, mais
          peuvent offrir un support inestimable aux nouveaux membres.
        </p>
        <v-row>
          <v-col cols="12" lg="4" class="pt-0">
            <v-card
                class="mx-auto my-12"
                max-width="374"
            >
              <v-img
                  height="250"
                  :src="require('@/assets/arielle_semences.jpg')"
              ></v-img>
              <v-card-title>Arielle</v-card-title>
              <v-card-text class="text-h6 font-weight-regular">
                De la charpenterie à la soudure, en passant par la conduite du tracteur, elle peut donner tout un coup
                de main sur une ferme.
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" lg="4" class="pt-0">
            <v-card
                class="mx-auto my-12"
                max-width="374"
            >
              <v-img
                  height="250"
                  :src="require('@/assets/chenzo_semences.jpg')"
              ></v-img>
              <v-card-title>Vincent</v-card-title>
              <v-card-text class="text-h6 font-weight-regular">
                Après quelques années à s’impliquer dans la coop, il a une bonne expérience en administration, la
                recherche de subventions, et la mise en marché. De plus, il est un allié considérable dans les champs.
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" lg="4" class="pt-0">
            <v-card
                class="mx-auto my-12"
                max-width="374"
            >
              <v-img
                  height="250"
                  :src="require('@/assets/david_marche.jpg')"
              ></v-img>
              <v-card-title>David</v-card-title>
              <v-card-text class="text-h6 font-weight-regular">
                Fort de son expérience d’ouvrier agricole sur diverses fermes locales depuis 2017, il est un complice
                précieux pour toutes les étapes de la production.
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <h2>Ce que tu peux attendre de notre coopérative :</h2>
        <ul class="text-h6 font-weight-regular mt-3">
          <li>
            <strong>Accès aux infrastructures et équipements de la ferme :</strong>
            <ul>
              <li>
                Située sur une parcelle de 4 acres louée à une coopérative d’habitation.
              </li>
              <li>
                Présentement en prairie d’engrais verts vivaces, clôturée contre les chevreuils, avec fumier disponible
                pour les 2 prochaines années.
              </li>
              <li>
                Équipements mécanisés incluant un tracteur agricole Kubota, herse à disque, vibro, peigne, et épandeur à
                fumier.
              </li>
            </ul>
          </li>
          <li>
            <strong>Serre de 100’x30’ :</strong>
            <ul>
              <li>
                Équipée d'un système d'irrigation goutte-à-goutte.
              </li>
              <li>
                Côtés ouvrants automatiques, isolation et moustiquaires.
              </li>
              <li>
                Système de chauffage du sol (batch rocket stove).
              </li>
            </ul>
          </li>
          <li>
            <strong>Infrastructures supplémentaires :</strong>
            <ul>
              <li>
                Salle de lavage et de conditionnement des légumes.
              </li>
              <li>
                Grande chambre froide équipée d’un Cool Bot.
              </li>
              <li>
                Grande chambre tiède isolée.
              </li>
            </ul>
          </li>
          <li>
            <strong>
              Autres équipements :
            </strong>
            <ul>
              <li>
                Système complet d’irrigation des champs, bâches, filets anti-insectes, plateaux, semoir Jang, baratte à légumes, bacs de récolte et de conservation, ainsi qu'une variété d'outils manuels.
              </li>
            </ul>
          </li>
          <li>
            <strong>
              Un contexte favorable pour réussir :
            </strong>
            <ul>
              <li>
                Le marché local est bon.
              </li>
              <li>
                Le soutien des trois membres travailleurs expérimentés disponibles à temps partiel.
              </li>
              <li>
                La ferme a fonctionné avec succès de 2017 à 2022 et n’a aucune dette.
              </li>
            </ul>
          </li>
        </ul>
        <h2 class="mt-8">Ce qu’on attend de toi</h2>
        <p class="text-h6 font-weight-regular">
          Comme aucun de nous n’est disponible à temps plein, nous cherchons une personne ayant assez d’expérience en agriculture pour se sentir à l’aise de faire le plan de production, de la planification des semis à la mise en marché. De plus, celle-ci doit être à l’aise avec l’idée de gérer une équipe de travail si elle prévoit engager des employés.
        </p>
        <p class="text-h6 font-weight-regular">
          Tu t’es rendu jusqu’ici, alors si tu as de l'expérience en agriculture, qu’en plus, tu partages nos valeurs de maraîchage biologique et de vente en circuit court, n'hésite pas à nous contacter pour en savoir plus ou organiser une visite.
        </p>
        <p class="text-h6 font-weight-regular text-center">
          <v-btn text to="/contact" x-large>
            Contactez nous !
          </v-btn>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">

</style>
