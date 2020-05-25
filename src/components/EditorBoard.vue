<template>
  <v-row 
   class="grey lighten-3" 
   style="height: 50vh;" >  
    <v-col cols=6>
        <codemirror
        ref="cmEditor"
        :value="code"
        :options="cmOptions"
        @ready="onCmReady"
        @focus="onCmFocus"
        @input="onCmCodeChange"
        />
    </v-col>
    <v-col cols=6>
        <div class="info-board">
            Pass the problem statement here as props
        </div> 
    </v-col>
  </v-row>
</template>

<script>
import { codemirror } from 'vue-codemirror'

// import base style
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/base16-dark.css'

export default {
    components: {
        codemirror
    },
    data () {
        return {
        code: 'const a = 10',
        cmOptions: {
            tabSize: 4,
            mode: 'text/javascript',
            theme: 'base16-dark',
            lineNumbers: true,
            line: true,
            // more CodeMirror options...
        }
        }
    },
  methods: {
    onCmReady(cm) {
      console.log('the editor is readied!', cm)
    },
    onCmFocus(cm) {
      console.log('the editor is focused!', cm)
    },
    onCmCodeChange(newCode) {
      console.log('this is new code', newCode)
      this.code = newCode
    }
  },
  computed: {
    codemirror() {
      return this.$refs.cmEditor.codemirror
    }
  },
  mounted() {
    console.log('the current CodeMirror instance object:', this.codemirror)
    // you can use this.codemirror to do something...
  }
}
</script>

<style>
.info-board,
.CodeMirror {
      height: 47vh;    
}

</style>