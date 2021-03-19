<template>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<script lang="ts">
import { defineComponent, provide, reactive } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import { CountService } from "./services/count.service";
import { RootService } from "./services/servicehub";
export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
  setup(){
    const rootService = reactive(new RootService());
    provide('rootService',rootService)
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>