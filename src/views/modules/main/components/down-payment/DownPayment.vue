<template>
  <!-- Первоначальный взнос -->
  <div class="down-payment">
    <p class="down-payment__title">Первоначальный взнос</p>
    <p>{{ $store.state.downPayment }} руб.</p>
    <input
      type="range"
      min="0"
      max="300000"
      step="1000"
      v-model="$store.state.downPayment"
    />
    <input
      type="number"
      v-model="$store.state.downPayment"
      class="down-payment__input-text global-style-input-text"
    />
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>