import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // State — содержит модель данных. Отличительно особенностью state в хранилище
  //  от data в комонентах является то, что их нельзя изменить напрямую. Для изменения
  //   обязательно нужно использовать функции из секции mutations.
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
    // стоимость недвижимости, настройки
    totalCostDataArray: [
      {
        min: 0,
        max: 30000000,
        step: 1000,
      },
    ],
    // Первоначальный взнос,настройки
    downPaymentArray: [
      {
        min: 0,
        max: 29000000,
        step: 1000,
      },
    ],
    // процентная ставка, настройки
    interestRateArray: [
      {
        min: 0,
        max: 40,
        step: 0.1,
      },
    ],
    creditTermValueArray: [
      {
        min: 0,
        max: 360,
        step: 1,
      },
    ],


    // ___________________
    // popup-message-flag
    PopupMessageError: false
  },

  // Mutations — синхронные функции для изменения состояния данных. Не могут быть асинхронными.
  // _________________________________________
  mutations: {
    MUTATION_RESULT_CALC_FORMULA(state) {

      // проверка на заполненность 3-х полей, процентная ставка, срок кредита, сумма кредита.
      // Обязательны к заполнению
      if (
        state.interestRate === 0 ||
        state.totalCostValue === 0 ||
        state.creditTermValue === 0
      ) {
        state.PopupMessageError = true
        return false;
      } else {
        state.PopupMessageError = false
      }

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
      state.overpaymentAmount = state.monthlyPayment * state.creditTermValue;
    },

    MUTATION_ON_CLICK_BTN_CLEAN_RESULT(state) {
      // очищение всех полей
      state.interestRate = 0
      state.totalCostValue = 0
      state.creditTermValue = 0
      state.downPayment = 0
      state.monthlyPayment = 0
      state.overpaymentAmount = 0
    },

    MUTATION_TOGGLE_MODAL_POPUP(state) {
      state.PopupMessageError = !state.PopupMessageError
    },

    MUTATION_UPDATE_INTEREST_RATE(state, value) {
      // если максимальное число в инпуте больше max , сбрасываем к 0
      if (value > state.interestRateArray[0].max) {
        state.interestRate = 0
      } else {
        state.interestRate = value
      }

      if (value === '') {
        state.interestRate = 0
      }

    },

    MUTATION_UPDATE_TOTAL_COST_VALUE(state, value) {
      // если максимальное число в инпуте больше max , сбрасываем к 0
      if (value > state.totalCostDataArray[0].max) {
        state.totalCostValue = 0
      } else {
        state.totalCostValue = value
      }

      if (value === '') {
        state.totalCostValue = 0
      }
    },

    MUTATION_UPDATE_DOWN_PAYMENT(state, value) {
      // если максимальное число в инпуте больше max , сбрасываем к 0
      if (value > state.downPaymentArray[0].max) {
        state.downPayment = 0
      } else {
        state.downPayment = value
      }

      if (value === '') {
        state.downPayment = 0
      }
    },

    MUTATION_UPDATE_CREDIT_TERM_VALUE(state, value) {
      // если максимальное число в инпуте больше max , сбрасываем к 0
      if (value > state.creditTermValueArray[0].max) {
        state.creditTermValue = 0
      } else {
        state.creditTermValue = value
      }

      if (value === '') {
        state.creditTermValue = 0
      }
    }
  },



  // Actions — блок с функциями, которые могут быть асинхронными. Для примера представьте
  //  что в хранилище есть массив с сообщениями для чата. От компонента приходит запрос 
  //  на добавление нового сообщения. В этом случае мы могли бы вызвать мутацию и добавить 
  //  его в state, но в 99% случаев перед этим нам необходимо сначала это сообщение добавить 
  //  в базу данных на сервере и только после этого обновить состояние хранилища. Поэтому в 
  //  actions создают функцию, которая будет сначала отправлять данные на сервер, ждать ответа
  //  и только затем вызывать мутацию
  // _________________________________________________
  actions: {
    ACTIONS_RESULT_CALC_FORMULA({ commit }) {
      commit('MUTATION_RESULT_CALC_FORMULA');
    },

    ACTIONS_ON_CLICK_BTN_CLEAN_RESULT({ commit }) {
      commit('MUTATION_ON_CLICK_BTN_CLEAN_RESULT');
    },

    ACTIONS_TOGGLE_MODAL_POPUP({ commit }) {
      commit('MUTATION_TOGGLE_MODAL_POPUP');
    }
  },


  // _________________________________________________
  // Getters — функции, которые возвращают какие-то данные из хранилища. 
  // К state можно обратиться и напрямую, но если перед этим требуется обработать 
  // или отфильтровать данные, то применяют именно getters. Например, в state хранятся 
  // сообщения чата, но в компоненты должны попадать эти же сообщения, только с заменой 
  // матерных слов на звездочки. В этом случае создается функция getters, которая в цикле
  //  обходит все сообщения, заменяет мат и возвращает уже обработанный массив.
  getters: {
    GET_RESULT_CALC_FORMULA(state) {
      return state.PopupMessageError
    },

    GET_TOGGLE_MODAL_POPUP(state) {
      return state.PopupMessageError
    },
  },

})
