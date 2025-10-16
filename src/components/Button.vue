<script setup lang="ts">
import { useRouter } from 'vue-router';
import { defineProps } from 'vue';

const buttonProps = defineProps({
    name: {
        type: String,
        required : true
    },
    path: {
        type: String,
        required : true
    },
    bgColor: {
        type: String,
        default: 'bg-primary hover:bg-blue-700'  
    },
    textColor: {
        type: String,
        default: 'text-white'   
    },
    customClass: {
        type: String,
        default: ''
    }

})

const router = useRouter()

const navigate = () => {
    if (!buttonProps.path) return 
    router.push(buttonProps.path)
}
</script>

<template>
    <button @click="navigate"
        :class="['py-3 cursor-pointer px-5 2xl:px-7 font-semibold rounded-md', bgColor, textColor, customClass]">
        {{ name }}
    </button>
</template>

<script lang="ts">
export default {
    name : 'Button'
}
</script>
