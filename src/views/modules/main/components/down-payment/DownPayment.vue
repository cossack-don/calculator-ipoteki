<template>
  <div>
    <!-- Первоначальный взнос -->
    <div
      class="down-payment"
      v-for="(item, index) in $store.state.downPaymentArray"
      :key="index"
    >
      <p class="down-payment__title">
        Первоначальный взнос: <br />
        {{ changeValueDownPayment }} руб.
      </p>

      <div class="down-payment__wrapper-input-line">
        <span>min</span>
        <input
          class="down-payment__input-line"
          type="range"
          :min="item.min"
          :max="item.max"
          :step="item.step"
          v-model.number="updateDownPayment"
        />
        <span>max</span>
      </div>
      <input
        type="number"
        v-model.number="updateDownPayment"
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
        this.$store.state.downPayment.toString()
      );
    },

    updateDownPayment: {
      get() {
        return this.$store.state.downPayment;
      },
      set(value) {
        this.$store.commit("MUTATION_UPDATE_DOWN_PAYMENT", value);
      },
    },
  },
};
</script>

<style>
</style>