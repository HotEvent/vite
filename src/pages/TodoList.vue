<template>
  <div>
    <button @click="refetch()">search</button>
    <button @click="countService.increase()">add</button>
    {{countService.name}}
    <div v-if="!loading">
      <div v-for="todo in items" v-bind:key="todo.nodeId">
        {{ todo.task }}
      </div>
    </div>
    <div v-else>loading</div>
  </div>
</template>

<script lang="ts">
import { useLazyQuery, useResult } from "@vue/apollo-composable";
import { ref, defineComponent, inject,onMounted } from "vue";
import { AllTodosDocument, useAllTodosQuery } from "../generated/graphql";
import { RootService } from "../services/servicehub";
export default defineComponent({
  name: "Login",
  props: {},
  setup: () => {
    const rootService = inject<RootService>("rootService");
    const countService = rootService?.countService;
    const { load,result,loading,refetch } = useLazyQuery(
      AllTodosDocument,
      {}
    );
    onMounted(()=>{
      console.log(countService?.increase())
      console.log(load)
      load()
    })

    const items = useResult(result, null, (data) => data.allTodos?.nodes);
    return { countService, loading, items, load,refetch };
  },
});
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
