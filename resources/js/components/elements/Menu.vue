<template>
	<ul :class="['list-none', 'flex', 'flex-col', 'gap-4']">
		<li v-for="item in menu" :key="item">
			<a
				:href="item.link"
				:class="[
					'block',
					'p-[16px]',
					'text-white',
					'rounded-lg',
					'transition-all',
					'duration-300',
					'hover:shadow-contact',
					'hover:bg-accent-transparent',
					'hover:text-accent',
					'cursor-pointer'
				]"
				target="_blank"
			>
				<component :is="item.icon" />
			</a>
		</li>
	</ul>
</template>

<script setup>
//--- / Props
const props = defineProps({
	menu: {
		type: Array,
		required: true
	}
});
//--- Props /
</script>
