<template>
    <v-container>
        <v-row>
            <v-col cols="4"></v-col>
            <v-col cols="4">
                <h2 class="font-weight-thin mb-4">S'abonner</h2>
                <v-img
                        :src="require('../assets/legumes.jpg')"
                        class="my-3"
                        contain
                />
                <v-alert
                        colored-border
                        type="info"
                        elevation="2"
                >
                    Le kiosque est ouvert les jeudis et dimanches de 10h à 18h à partir du 9 juillet.
                </v-alert>
                <v-list flat>
                    <v-list-item href="https://bit.ly/panierslivrés2020">
                        <v-list-item-icon>
                            <v-icon>home_work</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>
                                S'abonner aux paniers livrés à domicile ou au travail
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item href="https://bit.ly/panierslibreservice2020">
                        <v-list-item-icon>
                            <v-icon>store</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>
                                S'abonner aux paniers libre-service
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                Au kiosque ou aux marchés public
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: 'Abonner'
    }
</script>
