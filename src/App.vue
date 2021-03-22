<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, provide, reactive } from "vue";
import { RootService } from "./services/servicehub";
import { DefaultApolloClient } from '@vue/apollo-composable';
import { apolloClient } from "./client.config";
export default defineComponent({
  name: "App",
  setup(){
    const rootService = reactive(new RootService());
    provide('rootService',rootService)

    provide(DefaultApolloClient,apolloClient)
  }
});
</script>

<style>
#app {
  
}
.ant-layout-sider{
  min-height: 100vh;
}
</style>