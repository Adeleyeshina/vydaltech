<script setup lang="ts">
import { useRouter } from 'vue-router';
import Quotes from './Quotes.vue';

const handlePhoneClick = () => {
    window.location.href = 'tel:+1234567890';
}

const router = useRouter()

const heroWorks = [
    { heading: "500+", small: "Installations" },
    { heading: "24/7", small: "Support" },
    { heading: "5+", small: "Years Experience" },
    { heading: "100%", small: "Satisfaction" },
]

</script>
<template>
    <header
        class="px-[30px] sm:px-14 bg-[url('/images/home/herobanner.png')] w-full bg-cover bg-center relative flex items-center py-18 sm:py-25">
        <div class="absolute inset-0 bg-black/20  w-full h-full "></div>

        <!-- Hero Content -->
        <div class="grid grid-cols-1 lg:grid-cols-2 z-2 items-center gap-x-10 gap-y-7">
            <!-- Left -->
            <div class="space-y-5">
                <p class="text-sm sm:text-lg text-center grid rounded-full bg-primary sm:w-fit text-white py-2 px-5 font-semibold">
                    Professional Security Solutions</p>
                <h1 class="text-center text-4xl sm:text-left sm:text-5xl 2xl:text-7xl font-bold text-white">
                    Secure, Monitor, and <span class="text-[#60a5fa]">Protect</span> with Vyldal Tech
                </h1>

                <p class="text-xl text-center sm:text-left sm:text-2xl font-normal text-gray-100">
                    Professional approach to tech simplicity. Safeguarding your home, office, and business with
                    cutting-edge security solutions.
                </p>

                <!-- Cta -->
                <div class="flex gap-5 mt-7 justify-center flex-col sm:flex-row sm:justify-start">
                    <button class="bg-primary text-white font-semibold py-5 px-7 2xl:px-10 rounded-lg border-2 border-primary  cursor-pointer
                         hover:bg-blue-700 hover:border-bg-blue-700 text-lg transition ease-in-out duration-400"
                        @click="handlePhoneClick">
                        <font-awesome-icon icon="fa-solid fa-phone" class="inline-flex text-xl mr-2" />
                        Call now
                    </button>

                    <button
                        class="bg-transparent border-2 border-white text-white font-semibold py-5 px-7 2xl:px-10 rounded-md cursor-pointer hover:bg-white text-lg hover:text-black transition ease-in-out duration-400"
                        @click="router.push('/booking')">
                        <font-awesome-icon icon="fa-solid fa-calendar" class="inline-flex text-xl mr-2" />
                        Book a Services
                    </button>
                </div>

                <!--  -->

                <div class=" mt-7 grid grid-cols-2 sm:grid-cols-4 text-center gap-y-3 justify-around">
                    <div v-for="items in heroWorks" :key="items.heading">
                        <h1 class="text-[#60A5FA] text-3xl font-bold">{{ items.heading }}</h1>
                        <small class="text-sm text-[#D1D5DB] font-normal">{{ items.small }}</small>
                    </div>
                </div>
            </div>


            <!-- Right -->
            <Quotes />
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "Hero"
})

</script>
