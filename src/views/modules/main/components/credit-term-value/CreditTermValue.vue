<template>
  <!-- Срок Ипотеки -->
  <div>
    <div
      class="credit-term-value"
      v-for="(item, index) in $store.state.creditTermValueArray"
      :key="index"
    >
      <p class="credit-term-value__title">
        Срок ипотеки/кредита: {{ updateCreditTermValue }} месяцев
      </p>

      <div class="credit-term-value__wrapper-input-line">
        <span>{{ item.min }}</span>
        <input
          class="credit-term-value__input-line"
          type="range"
          :min="item.min"
          :max="item.max"
          :step="item.step"
          v-model.number="updateCreditTermValue"
        />
        <span>{{ item.max }}</span>
      </div>
      <input
        type="number"
        v-model.number="updateCreditTermValue"
        class="credit-term-value__input-text global-style-input-text"
      />

      <radioBtns />
    </div>
  </div>
  <!-- Срок Ипотеки ***-->
</template>

<script>
import radioBtns from "@/views/modules/main/components/credit-term-value/RadioBtnsCreditTermValue.vue";
export default {
  components: {
    radioBtns,
  },
  computed: {
    updateCreditTermValue: {
      get() {
        return this.$store.state.creditTermValue;
      },
      set(value) {
        this.$store.commit("MUTATION_UPDATE_CREDIT_TERM_VALUE", value);
      },
    },
  },
};
</script>

<style>
</style>