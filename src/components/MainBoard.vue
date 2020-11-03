<template>
  <v-row 
    align="flex-start"
    style="height: 50vh;">
        <v-btn class="ma-2" outlined small color="success"
        @click="$refs.chart.add({id: +new Date(), x: 10, y: 10, name: 'New', type: 'operation', approvers: []})">Add</v-btn>
        <v-btn class="ma-2" outlined small color="error"
        type="button" @click="$refs.chart.remove()">Delete</v-btn>
        <v-btn class="ma-2" outlined small color="indigo"
        type="button" @click="$refs.chart.editCurrent()">Edit</v-btn>
        <v-btn class="ma-2" outlined small color="primary"
        type="button" @click="$refs.chart.save()">Save</v-btn>
        <div class="ml-2 headline"> {{ level.title }}</div>
      <flowchart :nodes="level.nodes" :connections="level.connections" @editnode="handleEditNode"
                   :width="'100%'" :height="'85%'" :readonly="false"
                   @dblclick="handleDblClick"
                   @editconnection="handleEditConnection" @save="handleChartSave" ref="chart">
      </flowchart>

  </v-row>
</template>

<script>
  import Vue from 'vue';
  import FlowChart from 'flowchart-vue';
  import { mapGetters } from 'vuex'

  Vue.use(FlowChart);

  export default {
    data () {
      return {
        nodes: [
          {id: 1, x: 180, y: 130, name: 'Start', type: 'start'},
          {id: 2, x: 580, y: 130, name: 'End', type: 'end'},
        ],
        connections: [
          {
            source: {id: 1, position: 'right'},
            destination: {id: 2, position: 'left'},
            id: 1,
            type: 'pass',
          },
        ],
      };
    },
    computed: {
      ...mapGetters({
        level : 'getCurrentLevel',
      })
    },
    methods: {
      handleChartSave(nodes, connections) {
        // axios.post(url, {nodes, connections}).then(resp => {
        //   this.nodes = resp.data.nodes;
        //   this.connections = resp.data.connections;
        //   // Flowchart will refresh after this.nodes and this.connections changed
        // });
        console.log(nodes,connections)
      },
      handleEditNode(node) {
        console.log(node)
      },
      handleEditConnection(connection) {
        console.log(connection)
      },
      handleDblClick(position) {
        this.$refs.chart.add({
          id: +new Date(),
          x: position.x,
          y: position.y,
          name: 'New',
          type: 'operation',
          approvers: [],
        });
      },
    }
  };
</script>