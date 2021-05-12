    <!-- ПРОЦЕНТНАЯ СТАВКА -->

<template>
  <div>
    <div
      class="interest-rate"
      v-for="(item, index) in $store.state.interestRateArray"
      :key="index"
    >
      <p class="interest-rate__title">Процентная ставка</p>
      <p class="interest-rate__visual-value">
        {{ $store.state.interestRate }}%
      </p>
      <input
        class="interest-rate__input-line"
        type="range"
        :min="item.min"
        :max="item.max"
        :step="item.step"
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