<template>
  <v-app>
      <v-container class="pa-0">
          <navigation-bar />
          <main-board />
          <editor-board />
      </v-container>   
  </v-app>
</template>

<script>
import NavigationBar from './components/NavigationBar';
import MainBoard from './components/MainBoard';
import EditorBoard from './components/EditorBoard';

export default {
  name: 'App',

  components: {
    NavigationBar,
    MainBoard,
    EditorBoard,
  },
};
</script>
