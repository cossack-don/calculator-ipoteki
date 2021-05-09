<template>
  <div id="app">
    <WrapperMain/>
  </div>
</template>

<script>
import WrapperMain from '@/views/modules/wrapper-main/WrapperMain.vue'
export default {
  components: {
    WrapperMain
  }
}
</script>
// Инфа по формулам и как пример калькулятора
// https://www.sberbank.ru/ru/person/credits/home/buying_complete_house
// https://journal.tinkoff.ru/guide/credit-payment/



// сделать ресет кнопки всех значений
// сделать чтобы Nan Не выпадаало
// сделать чтобы было 30 000, разделение пробелом или запятой