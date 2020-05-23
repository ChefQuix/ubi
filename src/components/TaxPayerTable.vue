<template>
	<div>
		<table class="table">
			<thead>
				<tr>
					<th>{{ $t('location') }}</th>
					<th v-for="(bracket,index) in getBrackets" :key="index">{{ bracket }}</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(area, area_index) in getAreas" :key="area_index">
					<th>{{ area }}</th>
					<td v-for="(taxpayers,yndex) in getTaxPayers.data[area_index].brackets" :key="yndex">
						{{ formatNumber(taxpayers) }}
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'

	export default {
		created() {
		},

		methods: {
			formatCurrency(value) {
				return new Intl.NumberFormat(this.$i18n.locale, { style: 'currency', currency: 'CAD' }).format(value);
			},

			formatNumber(value) {
				return new Intl.NumberFormat(this.$i18n.locale).format(value);
			}
		},

		computed: {
			...mapGetters([
				'getAreas',
				'getBrackets',
				'getTaxPayers',
			])
		}
	}
</script>

<style lang="scss" scoped>

</style>