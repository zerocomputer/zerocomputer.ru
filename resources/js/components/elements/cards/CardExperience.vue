<template>
	<Card :custom-classes="['flex', 'flex-row', 'gap-[16px]']">
		<span
			:class="[
				'text-xl',
				'uppercase',
				'text-body',
				'font-medium',

				'group-hover/card:text-accent',
				'transition-colors',
				'duration-300',

				'max-w-[148px]',
				'min-w-[148px]'
			]"
			v-text="timeInterval"
		/>

		<div class="flex flex-col gap-[4px]">
			<h3
				:class="[
					'text-white',
					'font-bold',
					'text-2xl',
					'tracking-wide',
					'flex',
					'gap-2',
					'items-center',
					'group-hover/card:text-accent',
					'transition-colors',
					'duration-300'
				]"
			>
				<span v-text="company" />
				<ArrowInRightIcon />
			</h3>

			<h4
				:class="[
					'text-body',
					'font-semibold',
					'text-xl',
					'tracking-wide',
					'group-hover/card:text-white',
					'transition-colors',
					'duration-300'
				]"
				v-text="department"
			/>
			<h5
				:class="[
					'text-body',
					'font-medium',
					'text-xl',
					'tracking-wide',
					'group-hover/card:text-white',
					'transition-colors',
					'duration-300'
				]"
				v-text="post"
			/>

			<p
				:class="[
					'text-body',
					'text-base',
					'mt-2',
					'group-hover/card:text-white',
					'transition-colors',
					'duration-300'
				]"
				v-text="history"
			/>

			<div class="flex flex-wrap mt-5 gap-2">
				<Tag v-for="tag in tags" :title="tag" />
			</div>
		</div>
	</Card>
</template>

<script setup>
import Card from '../Card.vue';
import Tag from '../../misc/Tag.vue';

import ArrowInRightIcon from '../../icons/ArrowInRightIcon.vue';

//--- / Props
const props = defineProps({
	timeInterval: {
		type: String,
		required: true
	},
	company: {
		type: String,
		required: true
	},
	department: {
		type: String,
		required: true
	},
	post: {
		type: String,
		required: true
	},
	history: {
		type: String,
		required: true
	},
	tags: {
		type: Array,
		required: false,
		default: []
	}
});
//--- Props /
</script>
