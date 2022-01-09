<template>
  <v-app>
     <v-app-bar app clipped-left color="primary" dark dense>
            <div class="d-flex align-center" />
            <v-toolbar-title><v-icon left>
                        mdi-hospital-building
                    </v-icon> {{ appTitle }}</v-toolbar-title>
            <v-spacer />
            <v-toolbar-items class="hidden-xs-only">
                <v-btn text>
                    Practitioner 
                </v-btn>
            </v-toolbar-items>
        </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    appTitle: 'Diabities App',
  }),
};
</script>
