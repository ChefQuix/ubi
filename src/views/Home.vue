<template>
	<div class="home">
		<Header></Header>
		<TaxPayerTable></TaxPayerTable>
		<TaxableIncomeTable></TaxableIncomeTable>
	</div>
</template>

<script>

import Header from '@/components/Header'
import TaxPayerTable from '@/components/TaxPayerTable'
import TaxableIncomeTable from '@/components/TaxableIncomeTable'

export default {
	name: 'Home',
	components: { Header, TaxPayerTable, TaxableIncomeTable },
}
</script>
