<script setup>
import { onMounted } from "vue";

onMounted(() => {
    const cursorLight = document.querySelector(".cursor-light");
    document.addEventListener("mousemove", (e) => {
        cursorLight.setAttribute(
            "style",
            `background: radial-gradient(600px at ${e.clientX}px ${e.clientY}px, rgba(29, 78, 216, 0.15), transparent 80%);`
        );
    });
});
</script>

<template>
    <div
        class="cursor-light pointer-events-none fixed inset-0 z-30 transition duration-300"
    />
    <slot />
</template>
