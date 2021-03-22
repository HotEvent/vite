import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Login from './pages/Login.vue';
import DefaultLayout from "./pages/DefaultLayout.vue";
import TodoList from "./pages/TodoList.vue";
const routes: RouteRecordRaw[] = [
    { path: '/', component: Login },
    {
        path: '/app', component: DefaultLayout, children: [
            { path: 'todo', component: TodoList }
        ]
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export { router }