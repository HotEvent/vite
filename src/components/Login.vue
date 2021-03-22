<template>
  <div>
    {{countService.name}}
  <button @click="countService.increase()">add</button>
  </div>
  
</template>

<script lang="ts">
import { ref, defineComponent, provide, inject,reactive } from 'vue'
import { RootService } from '../services/servicehub'
export default defineComponent({
  name: 'Login',
  props: {
  },
  created(){
    console.log(this)
  },
  setup: () => {
    const rootService = inject<RootService>('rootService');
    const countService = rootService?.countService;
    return { countService };
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
