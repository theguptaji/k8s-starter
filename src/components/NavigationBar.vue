<template>
  <v-container class="pb-0">
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
      <v-list-item-group v-model="levelId" color="primary" @change="CURRENT_LEVEL_ID">
          <v-list-item v-for="(level,levelId) in levels"
            :key="levelId"
            link>
            <v-list-item-icon>
                <v-icon color="success" v-text="level.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ level.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
      </v-list-item-group>
          
        </v-list>
      </v-navigation-drawer>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

  export default {
    data () {
      return {
        drawer: true,
        levelId: this.$store.state.level
      }
    },
    computed: {
      ...mapGetters({
        level : 'getCurrentLevelId',
        levels : 'getAllLevels',
      })
    },
    methods: {
      ...mapMutations([
        'CURRENT_LEVEL_ID'
      ])
    }
  }
</script>

<style>

</style>