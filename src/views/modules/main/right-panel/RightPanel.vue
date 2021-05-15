<template>
  <!-- Right block - вынести потом в отдельные компоненты -->
  <div class="main-page-calc__right-block discription-credit">
    <p class="discription-credit__item">
      Ежемесячный платеж: <br />
      <span class="discription-credit__item-span"
        >{{ changeValueMonthlyPayment }} руб.</span
      >
    </p>
    <p class="discription-credit__item">
      Процентная ставка: <br />
      <span class="discription-credit__item-span"
        >{{ $store.state.interestRate }}%</span
      >
    </p>
    <p class="discription-credit__item">
      Cрок кредита: <br />
      <span class="discription-credit__item-span"
        >{{ $store.state.creditTermValue }} месяцев</span
      >
    </p>
    <p class="discription-credit__item">
      Внесли первоначальный взнос: <br />
      <span class="discription-credit__item-span"
        >{{ changeValueDownPayment }} руб.</span
      >
    </p>
    <p class="discription-credit__item">
      Сумма кредита: <br />
      <span class="discription-credit__item-span"
        >{{ changeValueTotalCostValue }} руб.</span
      >
    </p>
    <p class="discription-credit__item">
      Сумма кредита с переплатой: <br />
      <span class="discription-credit__item-span"
        >{{ changeValueOverpaymentAmount }} руб.</span
      >
    </p>
    <!-- <button>График платижей</button> -->
  </div>
</template>

<script>
// mixins
import mixinSpacesBetweenNumbers from "@/mixins/mixinSpacesBetweenNumbers.js";

export default {
  mixins: [mixinSpacesBetweenNumbers],
  computed: {
    // через v-modal возвращается число, мы можем превратить его в строку, скопировать строку в новую,
    // старую не трогаем, а переводим в число. Новую строку возвращаем в header компонента
    //
    //
    //
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
        this.$store.state.downPayment.toString()
      );
    },
    changeValueTotalCostValue() {
      return this.changeValueAddspaceBetweenFigura(
        this.$store.state.totalCostValue.toString()
      );
    },
  },
};
</script>


<style>
</style>