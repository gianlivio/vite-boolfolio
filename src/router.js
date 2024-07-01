import { createRouter, createWebHashHistory } from "vue-router";
import ProjectsPage from "./pages/ProjectsPage.vue";

const router = createRouter  ({
    history: createWebHistory();
    routes: [
        {
            path: '/',
            name: 'posts',
            component: ProjectPage,
        },
    ],
});

export { router };