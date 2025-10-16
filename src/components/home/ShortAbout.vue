<script setup lang="ts">

import { shortAboutContent } from './homeData';
import Button from '../Button.vue';

</script>

<template>
    <section class="bg-[#f8fafc]">
        <div class="grid grid-cols-1 xl:grid-cols-2 items-center gap-x-20 gap-y-7">
            <!-- left side -->
            <div >
                <div class="">
                    <h3 class="text-[#1e40af] font-semibold text-xl text-center xl:text-left ">
                        About Vydal Tech
                    </h3>

                    <h2 class="text-headingText headingStyle md:mt-3 text-center xl:text-left">
                        Who We Are
                    </h2>

                    <p class="text-body-color text-center xl:text-left font-medium text-base md:text-lg tracking-wide mt-5" font-semibold>
                        At <span class="text-[#4B5563] font-semibold">Vyldal Tech CCTV Service</span>, we provide
                        reliable, affordable, and professional security and tech solutions. Our mission is to deliver
                        <span>peace of mind</span> through innovative systems that
                        keep you
                        connected and protected.
                    </p>

                    <p class=" text-center xl:text-left text-body-color font-medium text-base md:text-lg tracking-wide mt-5 lg:mt-7">
                        With years of experience in the security industry, our team of certified technicians ensures
                        every installation meets the highest standards of quality and reliability.
                    </p>
                </div>

                <div class="mt-9 grid sm:grid-cols-2 gap-9 justify-center w-full mx-auto">
                    <div v-for="({icon, title, description}) in shortAboutContent" :key="title">
                        <div class="flex items-center gap-x-4">
                            <div class="bg-primary px-2 py-4 rounded-lg grid place-items-center">
                                <font-awesome-icon :icon="icon" class="text-white text-lg" />
                            </div>
                            <div>
                                <h2 class="text-secondary font-bold text-base xl:text-lg leading-tight">{{ title }}</h2>
                                <p class="font-normal text-sm leading-tight">{{ description }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Button name="Learn More About Us" path="/about" custom-class="mt-10 w-full xl:w-fit" />

            </div>

            <!-- right side -->
            <div class="relative bg-[#1e40af] p-5 md:p-8 rounded-xl text-center xl:text-left">
                <div class="h-50 md:h-80 bg-[url(/images/home/homeAbout.png)] bg-center bg-cover rounded-lg"></div>

                <div class="text-white mt-5">
                    <h3 class="font-bold text-2xl">Our Mission</h3>
                    <p class="mt-2 text-gray-300 text-base md:text-lg font-normal">
                        To provide cutting-edge security solutions that give our clients complete peace of mind,
                        ensuring their properties and loved ones are always protected.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        name: "ShortAbout"
    },
})
</script>
