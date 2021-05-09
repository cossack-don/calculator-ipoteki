import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    // процентная ставка interestRate
    interestRate: 0,
    // сумма кредита totalCostValue
    totalCostValue: 0,
    // срок кредита creditTermValue
    creditTermValue: 0,
    // _________________________________________________
    // первоначальный взнос downPayment
    downPayment: 0,
    // ежемесячный платеж за кредит monthlyPayment
    monthlyPayment: 0,
    //сумма кредита с переплатой overpaymentAmount
    overpaymentAmount: 0,


    // _______________

    totalCostData: [
      {
        min: 0,
        max: 30000000,
        step: 1000,
      },
    ],
  },
  mutations: {
    MUTATION_RESULT_CALC_FORMULA(state) {
      const onePercentAnnualNumber = state.interestRate / 12 / 100;

      // считаем коэффициент аннуитета
      const annuityCoefficient =
        (onePercentAnnualNumber *
          Math.pow(1 + onePercentAnnualNumber, state.creditTermValue)) /
        (Math.pow(1 + onePercentAnnualNumber, state.creditTermValue) - 1);

      // ежемесячный платеж,округляем
      state.monthlyPayment = Math.round(
        (state.totalCostValue - state.downPayment) * annuityCoefficient
      );

      // сумма с переплатой
      // state.overpaymentAmount = state.monthlyPayment * state.creditTermValue;
    },
  },
  actions: {
    ACTIONS_RESULT_CALC_FORMULA({ commit }) {
      commit('MUTATION_RESULT_CALC_FORMULA');
    },
  },
  getters: {
    GET_RESULT_CALC_FORMULA(state) {
      return state.monthlyPayment;
    },
  },

})
