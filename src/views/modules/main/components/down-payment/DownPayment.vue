<template>
  <div>
    <!-- Первоначальный взнос -->
    <div
      class="down-payment"
      v-for="(item, index) in $store.state.downPaymentArray"
      :key="index"
    >
      <p class="down-payment__title">Первоначальный взнос</p>
      <p>{{ changeValueDownPayment }} руб.</p>
      <input
        type="range"
        :min="item.min"
        :max="item.max"
        :step="item.step"
        v-model="$store.state.downPayment"
      />
      <input
        type="number"
        v-model="$store.state.downPayment"
        class="down-payment__input-text global-style-input-text"
      />
    </div>
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