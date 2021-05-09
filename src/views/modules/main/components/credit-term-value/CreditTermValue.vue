<template>
  <!-- Срок Ипотеки -->
  <div class="credit-term-value">
    <p class="credit-term-value__title">Срок Ипотеки/кредита</p>
    <p>{{ $store.state.creditTermValue }} месяцев</p>
    <input
      type="range"
      min="0"
      max="360"
      step="1"
      v-model="$store.state.creditTermValue"
    />
    <input
      type="number"
      v-model="$store.state.creditTermValue"
      class="credit-term-value__input-text global-style-input-text"
    />

    <!-- радио кнопки чтобы сразу выбрать 1 год = 12 мсц выбралось и с другими -->
    <input
      type="radio"
      id="one"
      value="12"
      v-model="$store.state.creditTermValue"
    />
    <label for="one">1 год</label>
    <br />
    <input
      type="radio"
      id="two"
      value="60"
      v-model="$store.state.creditTermValue"
    />
    <label for="two">5 лет</label>
    <input
      type="radio"
      id="two"
      value="120"
      v-model="$store.state.creditTermValue"
    />
    <label for="two">10 лет</label>
    <input
      type="radio"
      id="two"
      value="180"
      v-model="$store.state.creditTermValue"
    />
    <label for="two">15 лет</label>
    <input
      type="radio"
      id="two"
      value="360"
      v-model="$store.state.creditTermValue"
    />
    <label for="two">30 лет</label>
    <br />
    <span>Выбрано: {{ $store.state.creditTermValue }}</span>
  </div>
  <!-- Срок Ипотеки ***-->
</template>

<script>
export default {};
</script>

<style>
</style>