<template>
  <v-container>
      <v-navigation-drawer
        v-model="drawer"
        miniVariant
        right
        permanent
        expandOnHover
        absolute
      >
        <v-list
          dense
          nav
          class="py-0"
        >
          <v-list-item two-line >
              <v-list-item-title>
                  <v-list-item-icon>
                <v-icon color="success">mdi-arrow-left</v-icon>
                    </v-list-item-icon>
                  Chapters
              </v-list-item-title>      
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item v-for="(level,i) in levels"
            :key="i"
            link>
            <v-list-item-icon>
                <v-icon color="success" v-text="level.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ level.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          
        </v-list>
      </v-navigation-drawer>
  </v-container>
</template>

<script>

  export default {
    data () {
      return {
        drawer: true,
      }
    }
  }
</script>

<style>

</style>