<template>
    <ul :class="['list-none', 'flex', 'items-center', 'gap-4']">
        <li v-for="item in menu" :key="item">
            <a
                :href="item.link"
                :class="[
                    'text-base',
                    'font-normal',
                    'text-accent',
                    'flex',
                    'items-center',
                    'gap-2',
                ]"
                target="_blank"
            >
                <component :is="item.icon" :class="['max-w-[24px]']" />
                <span>{{ item.text }}</span>
            </a>
        </li>
    </ul>
</template>

<script setup>
//--- / Props
const props = defineProps({
    menu: {
        type: Array,
        required: true,
    },
});
//--- Props /
</script>
