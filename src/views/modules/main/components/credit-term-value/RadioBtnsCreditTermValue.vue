<template>
  <section class="btns-radio">
    <!-- радио кнопки чтобы сразу выбрать 1 год = 12 мсц выбралось и с другими -->

    <article class="btns-radio__one-year">
      <input
        type="radio"
        id="one-year"
        value="12"
        v-model="$store.state.creditTermValue"
      />
      <label class="btns-radio__label-one-year" for="one-year">1 год</label>
    </article>

    <article class="btns-radio__five-year">
      <input
        type="radio"
        id="five-year"
        value="60"
        v-model="$store.state.creditTermValue"
      />
      <label for="five-year">5 лет</label>
    </article>

    <article class="btns-radio__ten-year">
      <input
        type="radio"
        id="ten-year"
        value="120"
        v-model="$store.state.creditTermValue"
      />
      <label for="ten-year">10 лет</label>
    </article>

    <article class="btns-radio__fifteen-year">
      <input
        type="radio"
        id="fifteen-year"
        value="180"
        v-model="$store.state.creditTermValue"
      />
      <label for="fifteen-year">15 лет</label>
    </article>

    <article class="btns-radio__thirty-year">
      <input
        type="radio"
        id="thirty-year"
        value="360"
        v-model="$store.state.creditTermValue"
      />
      <label for="thirty-year">30 лет</label>
    </article>

    <!-- <span>Выбрано: {{ $store.state.creditTermValue }}</span> -->
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>