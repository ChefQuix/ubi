import Vue from 'vue'
import Vuex from 'vuex'
import CRAData from '@/assets/tax_amounts.json'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		TaxData: CRAData,
		taxExemptAmount: 18500,
		UBIAmount: 18500,
	},

	mutations: {
		setTaxExemptAmount (state,value) {
			state.taxExemptAmount = value;
		},
		setUBIAmount (state,value)  {
			state.UBIAmount = value;
		}
	},

	actions: {
	},

	getters: {
		UBIAmount: (state) => {
			return state.UBIAmount;
		},

		taxExemptAmount: (state) => {
			return state.taxExemptAmount;
		},

		getAreas: (state,getters) => {
			return getters.getTaxPayers.data.map(obj => obj.area);
		},
		
		getBrackets: (state, getters) => {
			return getters.getTaxPayers.headers.slice(1,-1);
		},

		getTaxPayers: (state,getters) => {
			return getters.formatTable.filter(table => table.file === "federal taxpayers")[0];
		},

		getTaxableIncome: (state,getters) => {
			return getters.formatTable.filter(table => table.file === "federal taxable income")[0];

		},

		getTaxes: (state,getters) => {
			return getters.formatTable.filter(table => table.file === "federal taxes")[0];

		},
		
		formatTable: state => {
			return state.TaxData.map(file => {
				let area_name = file.headers[0];
				let area_all = file.headers[file.headers.length - 1];	
				return {
					file: file.file,
					name: area_name,
					all: area_all,
					headers: file.headers,
					data: file.data.map(area => {
						return {
							'area': area[area_name],
							'all': area[area_all],
							'brackets': file.headers
										.slice(1,file.headers.length - 1)
										.map(header => area[header])
						}
					})
				}
			})

		},
	}
})
