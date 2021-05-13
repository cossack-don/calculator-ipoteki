    <!-- ПРОЦЕНТНАЯ СТАВКА -->

<template>
  <div>
    <div
      class="interest-rate"
      v-for="(item, index) in $store.state.interestRateArray"
      :key="index"
    >
      <p class="interest-rate__title">
        Процентная ставка {{ updateInterestRate }}%
      </p>

      <div class="interest-rate__wrapper-input-line">
        <span>{{ item.min }}%</span>
        <input
          class="interest-rate__input-line"
          type="range"
          :min="item.min"
          :max="item.max"
          :step="item.step"
          v-model.number.trim="updateInterestRate"
        />
        <span>{{ item.max }}%</span>
      </div>

      <input
        class="interest-rate__input-text global-style-input-text"
        type="number"
        v-model.number.trim="updateInterestRate"
      />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    updateInterestRate: {
      get() {
        return this.$store.state.interestRate;
      },
      set(value) {
        this.$store.commit("MUTATION_UPDATE_INTEREST_RATE", value);
      },
    },
  },
};
</script>

<style>
</style>