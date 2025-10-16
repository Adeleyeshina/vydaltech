<script setup lang="ts">
import ServiceCard from '../ServiceCard.vue'

</script>

<template>
    <section>
        <div class="text-center">
            <h3 class="text-[#1e40af] font-semibold text-xl">
                What We Offer
            </h3>
            <h2 class="text-headingText headingStyle md:mt-3 text-center">
                Our Services
            </h2>
            <p class="text-body-color font-medium text-base md:text-xl tracking-wide mt-2   lg:w-4xl mx-auto">
                Comprehensive security and technology solutions tailored to meet your specific needs and budget
                requirements.
            </p>
        </div>

        <div>
            <service-card />
        </div>
    </section>
</template>

<script lang="ts">
export default {
  components: { ServiceCard },
    name: "HomeServiceSection"
}
</script>