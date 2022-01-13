import { createApp } from "vue";
import App from "./App.vue";
import "@/tailwind-init.css";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

createApp(App).use(PrimeVue).component("Button", Button).mount("#app");
