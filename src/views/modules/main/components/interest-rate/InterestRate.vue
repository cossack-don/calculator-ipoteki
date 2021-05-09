    <!-- ПРОЦЕНТНАЯ СТАВКА -->

<template>
  <div>
    <div class="interest-rate">
      <p class="interest-rate__title">Процентная ставка</p>
      <p class="interest-rate__visual-value">
        {{ $store.state.interestRate }}%
      </p>
      <input
        class="interest-rate__input-line"
        type="range"
        min="0"
        max="40"
        step="0.1"
        v-model.number.trim="$store.state.interestRate"
      />

      <input
        class="interest-rate__input-text global-style-input-text"
        type="number"
        v-model.number.trim="$store.state.interestRate"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>