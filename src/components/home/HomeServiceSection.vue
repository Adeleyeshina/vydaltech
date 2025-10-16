<script setup lang="ts">
import { serviceCardDetails } from './homeData';
import ServiceCard from '../ServiceCard.vue';


</script>

<template>
    <section>
        <div class="text-center">
            <h3 class="text-[#1e40af] font-semibold text-xl">
                What We Offer
            </h3>
            <h2 class="text-headingText headingStyle mt-2 md:mt-3 text-center">
                Our Services
            </h2>
            <p class="text-body-color font-medium text-base md:text-xl tracking-wide mt-2   lg:w-4xl mx-auto">
                Comprehensive security and technology solutions tailored to meet your specific needs and budget
                requirements.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 mt-5 xl:grid-cols-4 gap-5 gap-y-6 justify-between">
            <service-card v-for="({ icon, title, serviceDetailsList, description, color }, index) in serviceCardDetails"
                :key="index" :icon="icon" :title="title" :description="description"
                :service-details-list="serviceDetailsList" :color="color" />
        </div>
    </section>
</template>

<script lang="ts">

</script>