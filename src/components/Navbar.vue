<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router';
import { navLinks } from '../constant/data';
import { ref } from 'vue';

const router = useRouter()

const isOpenMenu = ref(false)
</script>

<template>
    <nav class="bg-white shadow-sm px-[20px] md:px-14 py-4 sticky top-0 min-w-full">
        <div class="flex justify-between items-center">
            <!-- Logo -->
            <RouterLink to="/" class="flex items-center gap-x-3 md:gap-x-4">
                <div class="bg-primary px-2 py-3 md:py-4 rounded-lg">
                    <font-awesome-icon icon="fa-shield-halved" class="text-white text-[1.6rem]" />
                </div>
                <div>
                    <h2 class="text-secondary font-bold text-2xl md:text-[1.6rem]">Vyldal Tech</h2>
                    <p class="font-normal text-sm">CCTV Service</p>
                </div>
            </RouterLink>

            <!-- desktop navlinks -->
            <div class="hidden lg:flex justify-center flex-1">
                <ul class="flex gap-x-10">
                    <li v-for="({ name, path }, index) in navLinks" :key="index">
                        <RouterLink :to="path" v-slot="{ isActive }" v-if="index !== navLinks.length - 1"
                            class="text-secondary font-[500] text-lg hover:text-primary">
                            <span :class="[isActive && 'text-primary']">
                                {{ name }}
                            </span>
                        </RouterLink>
                    </li>
                </ul>
            </div>

            <!-- right side -->
            <div class="flex items-center gap-5">
                <div class="text-primary">
                    <p class="font-bold hidden 2xl:block">
                        <span><font-awesome-icon icon="fa-phone" /></span>
                        +234 704 869 6517
                    </p>
                </div>

                <button @click="router.push('/booking')"
                    class="bg-primary text-white py-3 cursor-pointer px-7 font-semibold rounded-md hidden lg:block ">
                    Book Service
                </button>
            </div>

            <!-- overlay -->
            <div v-if="isOpenMenu"
                class="fixed inset-0 bg-black/80 backdrop-blur-[1.5px] transition-all duration-[.5s] ease-in-out"
                @click="isOpenMenu = false">
            </div>

            <!-- Mobile nav -->
            <div
                :class="['lg:hidden bg-primary fixed z-20 top-0 py-10 px-10 sm:px-14 h-screen w-[70%] transition-all duration-[.5s] ease-in-out', isOpenMenu ? 'right-0' : 'right-[-100%]']">

                <button class="bg-primary absolute top-6 -left-18 w-12 h-12 grid place-items-center rounded-full"
                    @click="isOpenMenu=false">
                    <font-awesome-icon icon="fa-solid fa-times" class="text-2xl text-white" />
                </button>


                <ul class="flex flex-col gap-y-7">
                    <li v-for="({ name, path }, index) in navLinks" :key="index">
                        <RouterLink :to="path" class="text-white font-[500] text-lg" v-slot="{isActive}">
                            <span :class="isActive && 'text-[#acacac]'">
                                {{ name }}
                            </span>
                        </RouterLink>
                    </li>
                </ul>
            </div>

            <!-- nav open menu -->
            <button class="lg:hidden bg-primary p-2" @click="isOpenMenu = true">
                <font-awesome-icon icon="fa-solid fa-bars" class="text-2xl text-white" />
            </button>
        </div>
    </nav>
</template>