import { createRouter, createWebHistory } from "vue-router";
import About from "../views/About.vue";
import Booking from "../views/Booking.vue";
import Contact from "../views/Contact.vue";
import Home from "../views/Home.vue";
import Services from "../views/Services.vue";
import NotFound from "../views/NotFound.vue";
import WhyChooseUs from "../views/WhyChooseUs.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        component: About
    },
    {
        path: "/services",
        name: "Services",
        component: Services
    },
    {
        path: "/booking",
        name: "Booking",
        component: Booking
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact
    },
    {
        path: "/why-choose-us",
        name: "Why-choose-us",
        component: WhyChooseUs
    },
    {
        path: "/:pathMatch(.*)",
        name: "404",
        component: NotFound,
        meta : {hideNavbar : true}
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router