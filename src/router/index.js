import * as views from "@/views";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{ path: "/", component: views.Home },
	{ path: "/setting", component: views.Setting },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
