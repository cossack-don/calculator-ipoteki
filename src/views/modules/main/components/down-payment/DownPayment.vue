<template>
  <!-- Первоначальный взнос -->
  <div class="down-payment">
    <p class="down-payment__title">Первоначальный взнос</p>
    <p>{{ changeValueDownPayment }} руб.</p>
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
import mixinSpacesBetweenNumbers from "@/mixins/mixinSpacesBetweenNumbers.js";
export default {
  mixins: [mixinSpacesBetweenNumbers],
  computed: {
    changeValueDownPayment() {
      return this.changeValueAddspaceBetweenFigura(
        this.$store.state.downPayment
      );
    },
  },
};
</script>

<style>
</style>