<script setup lang="ts">
import { reactive } from 'vue';

import { vydalServices } from '../../constant/data';

const quotes = reactive({
    name: '',
    phone: '',
    service: ''
})


const handleSubmit = () => {

    alert(JSON.stringify(quotes))
}
</script>

<template>
    <aside class="bg-[rgba(171,172,176,.5)] backdrop-blur-xs p-8 2xl:px-10 rounded-2xl shadow">
        <div>
            <h3 class="text-white text-2xl font-bold">Quick Quote</h3>

            <form @submit.prevent="handleSubmit" class="mt-10 space-y-5">
                <input type="text" placeholder="Your Name" v-model="quotes.name" required
                    class="w-full outline-0 border shadow border-gray-500 text-white py-2.5 px-4 rounded-lg focus:ring-2 focus:ring-primary">

                <input type="text" placeholder="Phone Number" v-model="quotes.phone" required
                    class="w-full outline-0 border shadow border-gray-500 text-white py-2.5 px-4 rounded-lg focus:ring-2 focus:ring-primary">

                <select placeholder="Your Name" v-model="quotes.service" required
                    class="w-full outline-0 shadow cursor-pointer border border-gray-500 text-white py-2.5 px-4 rounded-lg focus:ring-2 focus:ring-primary">
                    <option value="" class="text-black">Select Service</option>
                    <option v-for="service in vydalServices" :key="service" class="text-black">{{ service }}</option>
                </select>

                <button class="bg-primary w-full text-white py-2.5 rounded-lg cursor-pointer font-semibold">Get Free
                    Quotes </button>
            </form>
        </div>
    </aside>
</template>

<script lang="ts">
export default {
    name: 'Quotes'
}
</script>