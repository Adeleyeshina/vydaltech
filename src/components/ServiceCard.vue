<script setup lang="ts">
import { defineProps } from 'vue';
defineProps({
    icon: String,
    title: String,
    description: String,
    serviceDetailsList: Array,
    color: {
        type: Object,
        required : true
    }
})



</script>

<template>
    <article
        :class="['p-7 rounded-xl shadow--lg duration-250 ease-in-out hover:shadow-xl hover:-translate-y-1.5 text-secondary',color.bgColor]">
        <div>
            <div :class="`px-3.5 py-3 md:py-4.5 rounded-lg w-fit ${color.iconBgColor}`">
                <font-awesome-icon :icon="icon" class="text-white text-4xl" />
            </div>
            <div>
                <h2>{{ title }}</h2>
                <p>
                    {{ description }}
                </p>
                <ul>
                    <li v-for="(items, idx) in serviceDetailsList" :key="idx">
                        <font-awesome-icon icon="fa-check" :class="`text-xs`"
                            :style="{ color: color.iconBgColor.slice(4, -1) }" />
                        {{ items }}
                    </li>
                </ul>
            </div>

            <button>Learn More </button>
        </div>
    </article>
</template>

<script lang="ts">
export default {
    name : 'ServiceCard'
}
</script>
