<template>
    <v-container>
        <v-row>
            <v-col cols="4"></v-col>
            <v-col cols="4">
                <h2 class="font-weight-thin mb-4">Contactez nous</h2>
                <v-img
                        :src="require('../assets/kiosque.jpg')"
                        class="my-3"
                        contain
                />
                <v-list flat>
                    <v-list-item
                            href="https://www.google.com/maps/place/Ferme+coop%C3%A9rative+les+potagers+partag%C3%A9s/@48.0603923,-65.2844275,17z/data=!3m1!4b1!4m5!3m4!1s0x4c991b94c1ed54cd:0x748454e90bfcb307!8m2!3d48.0603923!4d-65.2822334">
                        <v-list-item-icon>
                            <v-icon>mdi-map</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>
                                163 6e Avenue Ouest Paspébiac G0C 2K0
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item href="mailto:potagerspartages@gmail.com">
                        <v-list-item-icon>
                            <v-icon>mdi-email</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>
                                potagerspartages@gmail.com
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item href="tel:418-751-3669">
                        <v-list-item-icon>
                            <v-icon>mdi-phone</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>
                                418-751-3669
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item
                            href="https://www.facebook.com/potagerspartages/">
                        <v-list-item-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>
                                Notre page Facebook
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
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
