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
          Salut!
        </p>
        <p class="text-h6 font-weight-regular">
          Tu veux te partir une ferme maraîchère bio, mais t'aimerais ça pas partir de zéro?
        </p>
        <p class="text-h6 font-weight-regular">
          Tu voudrais tester ta vocation d'entrepreneur-euse agricole sans avoir à t'endetter drette en commençant?
        </p>
        <p class="text-h6 font-weight-regular">
          Viens partir ton projet en Gaspésie, dans la Baie-des-Chaleurs, dans une coopérative de travailleurs!
        </p>
        <ul class="text-h6 font-weight-regular">
          <li>
            Clé en main: champs, serre, chambres froides et matériels n'attendent que toi!
          </li>
          <li>
            3 membres de la coop pour te prêter main forte: soutien à l'admin, à la mise en marché, à l'entretien des
            infrastructures et des systèmes, au travail de sol, et main d'oeuvre agricole
          </li>
          <li>
            Une ferme qui existe depuis 5 ans (en opération de 2017 à 2022): canaux de mise en marché et fertilité des
            sols améliorée
          </li>
          <li>
            En formule coop: possibilité de tirer du chômage à la fin de la saison
          </li>
        </ul>
        <p class="text-h6 font-weight-regular">
          Arrangements à discuter.
        </p>
        <p class="text-h6 font-weight-regular">
          <router-link to="/contact">
            Contactez-nous
          </router-link>
          pour plus de détails ou pour visiter les installations.
        </p>

        <h2 class="mt-8">Membres de la coop</h2>
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
                Conduit le tracteur et peut faire l'entretien des infrastructures.
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
                Administration, recherche de subventions, mise en marché et aide dans les champs.
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
                Expérience comme ouvrier agricole et mécanicien sur plusieurs fermes de la région depuis 2018.
                Il a aussi travaillé comme accompagnant jardins.
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <h2>Ce qu'on attend de vous</h2>
        <p class="text-h6 font-weight-regular">
          Dans l'idéal: nous cherchons 2 maraîcher-ères pour relancer la production agricole et se joindre à notre
          coopérative de travailleurs.
        </p>
        <p class="text-h6 font-weight-regular">
          Un plan d'affaire.
        </p>
        <p class="text-h6 font-weight-regular">
          Un plan de culture.
        </p>
        <p class="text-h6 font-weight-regular">
          Une formation et/ou une expérience pertinente de minimum 2 saisons.
        </p>
        <p class="text-h6 font-weight-regular">
          Votre projet répond aux valeurs de la coop:
          <ul>
            <li>
              Maraîchage qui respecte les principes de la culture biologique
            </li>
            <li>
              Mise en marché en circuit court
            </li>
          </ul>
        </p>
        <h2 class="mt-8">Ce que vous pouvez attendre de la coop</h2>
        <p class="text-h6 font-weight-regular">
          <ul>
            <li>
              Accès aux infrastructures et matériel de la ferme:
              <ul>
                <li>
                  Description du contexte
                  <ul>
                    <li>
                      Terre louée par la coop de travail à une coop d'habitation
                    </li>
                    <li>
                      4 acres
                      <ul>
                        <li>
                          Présentement semé en prairie
                        </li>
                        <li>
                          Clôturé contre les chevreuils
                        </li>
                        <li>
                          Fumier pour les 2 prochaines années
                        </li>
                      </ul>
                    </li>
                    <li>
                      Mécanisé petite surface
                      <ul>
                        <li>
                          Tracteur agricole Kubota
                        </li>
                        <li>
                          Herse à disque, vibro, peigne
                        </li>
                        <li>
                          Épandeur à fumier
                        </li>
                      </ul>
                    </li>
                    <li>
                      La ferme a été en opération 5 saisons, de 2017 à 2022.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              Serre (100’x30'),
              <ul>
                <li>
                  Irrigation goutte-à-goutte
                </li>
                <li>
                  Côtés ouvrants automatiques
                </li>
                <li>
                  Isolation des côtés et moustiquaires
                </li>
                <li>
                  Drainée
                </li>
                <li>
                  Système de chauffage du sol (batch rocket stove)
                </li>
              </ul>
            </li>
            <li>
              Infrastructures
              <ul>
                <li>
                  Salle de conditionnement des légumes
                </li>
                <li>
                  Salle de lavage
                </li>
                <li>
                  Chambre froide (cool bot)
                </li>
                <li>
                  Chambre tiède isolée
                </li>
              </ul>
            </li>
            <li>
              Autres équipements
              <ul>
                <li>
                  Système d’irrigation des champs
                </li>
                <li>
                  bâches, filets antisectes, plateaux,
                </li>
                <li>
                  semoir Jang,
                </li>
                <li>
                  baratte à légumes,
                </li>
                <li>
                  bacs de récolte et pour conservation
                </li>
                <li>
                  outils manuels, etc.
                </li>
              </ul>
            </li>
            <li>
              Du soutien des autres membres de la coop.
              <ul>
                <li>
                  Nous sommes actuellement 3 membres travailleurs.
                </li>
                <li>
                  Ce que nous offrons c'est le soutien à des maraîchers à temps plein, les membres actuels ne peuvent
                  s'investir qu'à temps partiel.
                </li>
              </ul>
            </li>
            <li>
              Un contexte favorable
              <ul>
                <li>
                  Le marché dans la région est bon.
                </li>
                <li>
                  La terre appartient à une coopérative d’habitation.
                </li>
                <li>
                  La ferme a été opérationnelle de 2017 à 2022.
                </li>
                <li>
                  La ferme n’a aucune dette.
                </li>
              </ul>
            </li>
          </ul>
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
