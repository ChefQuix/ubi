<template>
	<div>
		<DataTable :Table="getTaxPayers" type="people"></DataTable>
	</div>
</template>

<script>
	import DataTable from '@/components/DataTable'
    import { mapGetters } from 'vuex'

	export default {
		components: { DataTable },

		computed: {
			...mapGetters([
				'getTaxPayers'
			])
		}
	}
</script>

<style lang="scss" scoped>

</style>