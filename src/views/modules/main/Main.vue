<template>
  <div class="main-page-calc">
    <!-- Left block - вынести потом в отдельные компоненты -->
    <div class="main-page-calc__left-block">
      <PopupMessageError v-if="GET_RESULT_CALC_FORMULA" />

      <InterestRate :class="{ warningBorder: GET_RESULT_CALC_FORMULA }" />
      <PropertyValue :class="{ warningBorder: GET_RESULT_CALC_FORMULA }" />
      <DownPayment />
      <CreditTermValue :class="{ warningBorder: GET_RESULT_CALC_FORMULA }" />

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

// store
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  components: {
    InterestRate,
    PropertyValue,
    DownPayment,
    CreditTermValue,
    RightPanel,
    // popup
    PopupMessageError,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["GET_RESULT_CALC_FORMULA"]),
  },

  methods: {
    ...mapActions([
      "ACTIONS_RESULT_CALC_FORMULA",
      "ACTIONS_ON_CLICK_BTN_CLEAN_RESULT",
    ]),
    // рассчитать кредит
    result() {
      this.ACTIONS_RESULT_CALC_FORMULA();
    },

    // очищение полей калькулятора
    cleanResultCalc() {
      this.ACTIONS_ON_CLICK_BTN_CLEAN_RESULT();
    },
  },
};
</script>