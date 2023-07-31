<template>
    <div
        :class="[
            'group/card',

            'md:p-8',
            'max-sm:p-4',
            'cursor-pointer',
            'rounded-[8px]',
            'overflow-hidden',

            'transition-shadow',
            'hover:shadow-cart',
            'duration-200',

            'relative',

            'after:top-0',
            'after:left-0',
            'after:right-0',
            'after:bottom-0',
            'after:absolute',
            'after:opacity-0',
            'after:transition',
            'after:duration-200',
            'after:bg-cart',
            'hover:after:opacity-100',
            ...customClasses,
        ]"
        class="after:content-['']"
    >
        <slot></slot>
    </div>
</template>

<script setup>
//--- / Props
const props = defineProps({
    customClasses: {
        type: Array,
        required: false,
        default: [],
    },
});
//--- Props /
</script>
