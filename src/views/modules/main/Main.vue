<template>
  <div class="main-page-calc">
    <!-- Left block - вынести потом в отдельные компоненты -->
    <div class="main-page-calc__left-block">
      <PopupMessageError v-if="GET_RESULT_CALC_FORMULA"/>

      <InterestRate />
      <PropertyValue />
      <DownPayment />
      <CreditTermValue />

      <!-- Кнопка рассчитать Ипотеку -->
      <button @click="result">Рассчитать</button>
      <button @click="cleanResultCalc">Очистить</button>
      <!-- Кнопка рассчитать Ипотеку ***-->
    </div>
    <!-- Left block *** -->

    <!-- right-block -->
    <RightPanel />
  </div>
</template>

<script>
// модал окно
import PopupMessageError from "@/views/modules/PopupMessageError.vue";

// Левая панель
import InterestRate from "@/views/modules/main/components/interest-rate/InterestRate.vue";
import PropertyValue from "@/views/modules/main/components/property-value/PropertyValue.vue";
import DownPayment from "@/views/modules/main/components/down-payment/DownPayment.vue";
import CreditTermValue from "@/views/modules/main/components/credit-term-value/CreditTermValue.vue";

// правай панель
import RightPanel from "@/views/modules/main/right-panel/RightPanel.vue";

import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  components: {
    InterestRate,
    PropertyValue,
    DownPayment,
    CreditTermValue,
    RightPanel,
    // popup
    PopupMessageError
  },
  data() {
    return {
      // interestRate процентная ставка
      // interestRate: 0,
      // сумма кредита totalCostValue
      // totalCostValue: 0,
      // первоначальный взнос downPayment
      // downPayment: 0,
      // creditTermValue: 0,
      // ежемесячный платеж
      // monthlyPayment: 0,
      //сумма с переплатой
      // overpaymentAmount: 0,
    };
  },
  computed: {
    ...mapGetters(["GET_RESULT_CALC_FORMULA"]),
    // changeValueTotalCostValue() {
    //   return this.changeValueAddspaceBetweenFigura(this.totalCostValue);
    // },
    // changeValueDownPayment() {
    //   return this.changeValueAddspaceBetweenFigura(this.downPayment);
    // },
    // changeValueMonthlyPayment() {
    //   return this.changeValueAddspaceBetweenFigura(
    //     this.monthlyPayment.toString()
    //   );
    // },
    // changeValueOverpaymentAmount() {
    //   return this.changeValueAddspaceBetweenFigura(
    //     this.overpaymentAmount.toString()
    //   );
    // },
  },

  methods: {
    ...mapMutations(['MUTATION_RESULT_CALC_FORMULA','MUTATION_ON_CLICK_BTN_CLEAN_RESULT']),
    // ...mapActions(["ACTIONS_TOGGLE_MODAL_POPUP"]),

    // changeValueAddspaceBetweenFigura(valueString) {
    //   let strValue = valueString;

    //   if (strValue.length > 3) {
    //     // строку перевожу в массив
    //     const arrayValue = strValue.split("");
    //     // вставляю после 3 и 6 элемента массива( с конца ) - вставляю пробел
    //     arrayValue.splice(strValue.length - 3, 0, " ");

    //     if (strValue.length > 6) {
    //       arrayValue.splice(strValue.length - 6, 0, " ");
    //     }

    //     // возвращаю строку
    //     strValue = arrayValue.join("");
    //     return strValue;
    //   }

    //   return valueString;
    // },

    result() {
      // this.ACTIONS_RESULT_CALC_FORMULA();
      this.MUTATION_RESULT_CALC_FORMULA();
      // console.log();
      // если процентная ставка = 0, если общая сумма кредита = 0 , если срок кредита = 0 мсц,
      // то выходим и выдаем сообщение
      // if (
      //   this.interestRate === 0 ||
      //   this.totalCostValue === 0 ||
      //   this.creditTermValue === 0
      // ) {
      //   console.log("поля пустые");
      //   return false;
      // }
      // console.log(this.interestRate.toString());
      // __________________________________________________________________________________________
      // this.interestRate - процент годовой
      // Для примера возьмем 300 000 рублей, срок 18 месяцев и процентную ставку 15% годовых.
      // Месячная процентная ставка = 15% / 12 = 1,25%, то есть 0,0125.
      // Один процент годовой - переведенный в число
      // const onePercentAnnualNumber = this.interestRate / 12 / 100;
      // __________________________________________________________________________________________
      // формула 0,0125 × (1 + 0,0125)18 / ((1 + 0,0125)18 − 1) = 0,062385  - коэффициента аннуитета
      // считаем коэффициент аннуитета
      // const annuityCoefficient =
      //   (onePercentAnnualNumber *
      //     Math.pow(1 + onePercentAnnualNumber, this.creditTermValue)) /
      //   (Math.pow(1 + onePercentAnnualNumber, this.creditTermValue) - 1);
      // __________________________________________________________________________________________
      // Теперь подставляем коэффициент аннуитета в расчет платежа:
      // 300 000 × 0,062385 = 18 715,44 Р
      // ежемесячный платеж,округляем
      // this.monthlyPayment = Math.round(
      //   (this.totalCostValue - this.downPayment) * annuityCoefficient
      // );
      // сумма с переплатой
      // this.overpaymentAmount = this.monthlyPayment * this.creditTermValue;
    },

    // очищение полей калькулятора
    cleanResultCalc() {
      this.MUTATION_ON_CLICK_BTN_CLEAN_RESULT()
    },
  },

  filters: {
    // go: function (value) {
    //   // console.log(this.totalCostValue.toLocaleString('ru-RU'))
    //   return value.toLocaleString("ru-RU");
    // },
  },
};
</script>