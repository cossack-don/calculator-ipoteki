<template>
  <!--СТОИМОСТЬ НЕДВИЖИМОСТИ  -->
  <div>
    <!-- Cтоимость недвижимости -->
    <div
      class="total-cost"
      v-for="(item, index) in $store.state.totalCostDataArray"
      :key="index"
    >
      <p class="total-cost__title">
        Cумма ипотеки/кредита {{ changeValueTotalCostValue }} руб.
      </p>
      <div class="total-cost__wrapper-input-line">
        <span>min</span>
        <input
          class="total-cost__input-line"
          type="range"
          :min="item.min"
          :max="item.max"
          v-model.number="updateTotalCostValue"
          :step="item.step"
        />
        <span>max</span>
      </div>
      <input
        type="number"
        v-model.number="updateTotalCostValue"
        class="total-cost__input-text global-style-input-text"
      />
    </div>
    <!-- Cтоимость недвижимости ***-->
  </div>
</template>

<script>
// mixins
import mixinSpacesBetweenNumbers from "@/mixins/mixinSpacesBetweenNumbers.js";

export default {
  mixins: [mixinSpacesBetweenNumbers],
  computed: {
    changeValueTotalCostValue() {
      return this.changeValueAddspaceBetweenFigura(
        this.$store.state.totalCostValue.toString()
      );
    },

    updateTotalCostValue: {
      get() {
        return this.$store.state.totalCostValue;
      },
      set(value) {
        this.$store.commit("MUTATION_UPDATE_TOTAL_COST_VALUE", value);
      },
    },
  },
};
</script>

<style>
</style>