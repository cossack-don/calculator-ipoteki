<template>
  <!-- Срок Ипотеки -->
  <div>
    <div
      class="credit-term-value"
      v-for="(item, index) in $store.state.creditTermValueArray"
      :key="index"
    >
      <p class="credit-term-value__title">Срок Ипотеки/кредита</p>
      <p>{{ $store.state.creditTermValue }} месяцев</p>
      <input
        type="range"
        :min="item.min"
        :max="item.max"
        :step="item.step"
        v-model="$store.state.creditTermValue"
      />
      <input
        type="number"
        v-model="$store.state.creditTermValue"
        class="credit-term-value__input-text global-style-input-text"
      />
    </div>
    <!-- <radioBtns /> -->
  </div>
  <!-- Срок Ипотеки ***-->
</template>

<script>
import radioBtns from "@/views/modules/main/components/credit-term-value/RadioBtnsCreditTermValue.vue";
export default {
  components: {
    radioBtns,
  },
};
</script>

<style>
</style>