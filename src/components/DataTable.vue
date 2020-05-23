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
					<td v-for="(element,yndex) in Table.data[area_index].brackets" :key="yndex">
						{{ format(element) }}
					</td>
				</tr>
			</tbody>
		</table>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        props: ['Table','type'],

		methods: {
			formatCurrency(value) {
				return '$' + new Intl.NumberFormat(this.$i18n.locale).format(value * 1000000);
			},

			formatNumber(value) {
				return new Intl.NumberFormat(this.$i18n.locale).format(value);
            },
            
            format(value) {
                return (this.type==='currency') ? this.formatCurrency(value) : this.formatNumber(value);
            }
		},

		computed: {
			...mapGetters([
				'getAreas',
				'getBrackets',
			])
		}}
</script>

<style lang="scss" scoped>

</style>