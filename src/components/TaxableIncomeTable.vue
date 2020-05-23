<template>
	<div>
		<DataTable :Table="getTaxableIncome" type="currency"></DataTable>
	</div>
</template>

<script>
	import DataTable from '@/components/DataTable'
    import { mapGetters } from 'vuex'

	export default {
		components: { DataTable },

		computed: {
			...mapGetters([
				'getTaxableIncome'
			])
		}
	}
</script>

<style lang="scss" scoped>

</style>