<template>
  <!-- Right block - вынести потом в отдельные компоненты -->
  <div class="main-page-calc__right-block discription-credit">
    <p class="discription-credit__item">
      ежемесячный платеж {{ changeValueMonthlyPayment }} руб
    </p>
    <p class="discription-credit__item">
      процентная ставка {{ $store.state.interestRate }}%
    </p>
    <p class="discription-credit__item">
      Cрок кредита {{ $store.state.creditTermValue }}
    </p>
    <p class="discription-credit__item">
      внесли первоначальный взнос {{ changeValueDownPayment }} руб
    </p>
    <p class="discription-credit__item">
      сумма кредита {{ changeValueTotalCostValue }} руб
    </p>
    <p class="discription-credit__item">
      сумма кредита с переплатой {{ changeValueOverpaymentAmount }} руб
    </p>
    <button>график платижей</button>
  </div>
</template>

<script>
// mixins
import mixinSpacesBetweenNumbers from "@/mixins/mixinSpacesBetweenNumbers.js";

export default {
  mixins: [mixinSpacesBetweenNumbers],
  computed: {
    changeValueMonthlyPayment() {
      return this.changeValueAddspaceBetweenFigura(
        this.$store.state.monthlyPayment.toString()
      );
    },
    changeValueOverpaymentAmount() {
      return this.changeValueAddspaceBetweenFigura(
        this.$store.state.overpaymentAmount.toString()
      );
    },
    changeValueDownPayment() {
      return this.changeValueAddspaceBetweenFigura(
        this.$store.state.downPayment
      );
    },
    changeValueTotalCostValue() {
      return this.changeValueAddspaceBetweenFigura(
        this.$store.state.totalCostValue
      );
    },
  },
};
</script>

<style>
</style>