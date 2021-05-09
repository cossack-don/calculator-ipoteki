<template>
  <!-- Right block - вынести потом в отдельные компоненты -->
  <div class="main-page-calc__right-block discription-credit">
    <p class="discription-credit__item">
      ежемесячный платеж {{ $store.state.monthlyPayment }} руб
    </p>
    <p class="discription-credit__item">
      процентная ставка {{ $store.state.interestRate }}%
    </p>
    <p class="discription-credit__item">
      Cрок кредита {{ $store.state.creditTermValue }}
    </p>
    <p class="discription-credit__item">
      внесли первоначальный взнос {{ $store.state.downPayment }} руб
    </p>
    <p class="discription-credit__item">
      сумма кредита {{ $store.state.totalCostValue }} руб
    </p>
    <p class="discription-credit__item">
      сумма кредита с переплатой {{ $store.state.overpaymentAmount }} руб
    </p>
    <button>график платижей</button>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>