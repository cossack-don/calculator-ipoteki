<template>
  <!--СТОИМОСТЬ НЕДВИЖИМОСТИ  -->
  <div>
    <!-- Cтоимость недвижимости -->
    <div
      class="total-cost"
      v-for="(item, index) in $store.state.totalCostData"
      :key="index"
    >
      <p class="total-cost__title">Стоимость недвижимости</p>
      <p class="total-cost__visual-value">
        {{ $store.state.totalCostValue }} руб.
      </p>
      <input
        type="range"
        :min="item.min"
        :max="item.max"
        v-model="$store.state.totalCostValue"
        :step="item.step"
      />
      <input
        type="number"
        v-model="$store.state.totalCostValue"
        class="total-cost__input-text global-style-input-text"
      />
    </div>
    <!-- Cтоимость недвижимости ***-->
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>