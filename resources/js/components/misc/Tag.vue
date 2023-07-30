<template>
	<span
		:class="[
			'py-2',
			'px-4',
			'rounded-[32px]',
			'text-base',
			'font-normal',
			'text-accent',
			'bg-accent-transparent'
		]"
		v-text="title"
	/>
</template>

<script setup>
//--- / Props
const props = defineProps({
	title: {
		type: String,
		required: true
	}
});
//--- Props /
</script>
