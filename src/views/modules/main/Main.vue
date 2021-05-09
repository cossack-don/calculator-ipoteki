<template>
  <div class="main-page-calc">




  <!-- Left block - вынести потом в отдельные компоненты -->
  <div class="main-page-calc__left-block">  

    <!--Процентная ставка  -->
    <div class="interest-rate">
      <p class="interest-rate__title">Процентная ставка</p>
      <p class="interest-rate__visual-value">{{interestRate}}% </p>
      <input class="interest-rate__input-line" type="range" min="0" max="40" step="0.1" v-model.number.trim ="interestRate"> 
      <input class="interest-rate__input-text" type="number" v-model.number.trim="interestRate">
    </div> 
    <!--Процентная ставка *** -->




<!-- Cтоимость недвижимости -->
  <div class="total-cost" v-for="(item, index) in totalCostData" :key="index">
    <p class="total-cost__title">Стоимость недвижимости</p>
    <p class="total-cost__visual-value">{{totalCostValue}} руб.</p>
    <input type="range" :min="item.min" :max="item.max" v-model="totalCostValue" :step="item.step" >
    <input type="number" v-model="totalCostValue" class="total-cost__input-text">
  </div>
 <!-- Cтоимость недвижимости ***-->   


<!-- Первоначальный взнос -->
  <div class="down-payment">
    <p class="down-payment__title">Первоначальный взнос</p>
    <p>{{downPayment}} руб.</p>
    <input type="range" min="0" max="300000" step="1000" v-model="downPayment">
    <input type="number" v-model="downPayment" class="down-payment__input-text">
  </div>
    <!-- Первоначальный взнос ***-->


    <!-- Срок Ипотеки -->
  <div class="credit-term-value">
    <p class="credit-term-value__title">Срок Ипотеки/кредита</p>
    <p>{{creditTermValue}} месяцев</p>
    <input type="range" min="0" max="360" step="1" v-model="creditTermValue">
    <input type="number" v-model="creditTermValue" class="credit-term-value__input-text">

    <!-- радио кнопки чтобы сразу выбрать 1 год = 12 мсц выбралось и с другими -->
    <input type="radio" id="one" value="Один" v-model="picked">
    <label for="one">Один год</label>
    <br>
    <input type="radio" id="two" value="Два" v-model="picked">
    <label for="two">Два года</label>
    <br>
    <span>Выбрано: {{ picked }}</span>
  </div>
        <!-- Срок Ипотеки ***-->

<!-- Кнопка рассчитать Ипотеку -->
    <button @click="result">Рассчитать</button>
    <button @click="cleanResultCalc">Очистить</button>
<!-- Кнопка рассчитать Ипотеку ***-->
  </div>
    <!-- Left block *** -->

  <!-- Right block - вынести потом в отдельные компоненты -->
    <div class="main-page-calc__right-block discription-credit">
      <p class="discription-credit__item">ежемесячный платеж {{monthlyPayment}} руб</p>
      <p class="discription-credit__item">процентная ставка {{interestRate}}%</p>
      <p class="discription-credit__item">сумма кредита {{totalCostValue}} руб</p>
      <p class="discription-credit__item">сумма кредита с переплатой {{overpaymentAmount}} руб</p>
      <button >график платижей</button>
  </div>
    <!-- Right block *** -->

  </div>
</template>

<script>
export default {
  components:{

  },
  data() {
    return {
      // interestRate процентная ставка
      interestRate:0,
      // сумма кредита totalCostValue
      totalCostValue:300000,

      // первоначальный взнос downPayment
      downPayment:0,

      totalCostData:[
        {
          min:0,
          max:3000000,
          step:1000,
        }
      ],
      
      creditTermValue:0,

      // ежемесячный платеж
      monthlyPayment:0,
      
      //сумма с переплатой
      overpaymentAmount:0,

      picked:null

    };
  },
  computed:{
    // d() {
      
    //   console.log(this.totalCostValue.toLocaleString('ru-RU'))

    //   return this.totalCostValue.toLocaleString('ru-RU')
    // }
  },
// watch:{
// totalCostValue:function() {
//   // console.log(this.totalCostValue.length)
//   if(this.totalCostValue.length > 3) {
//     // console.log(this.totalCostValue.length - 2)
//     // console.log(this.totalCostValue.split('').splice(2, 2, 'Orange'))
 
//   }
// }
// },
  methods: {
    result() {
// __________________________________________________________________________________________
// this.interestRate - процент годовой
// Для примера возьмем 300 000 рублей, срок 18 месяцев и процентную ставку 15% годовых.
// Месячная процентная ставка = 15% / 12 = 1,25%, то есть 0,0125.


// Один процент годовой - переведенный в число
const onePercentAnnualNumber = (this.interestRate / 12) / 100;
// __________________________________________________________________________________________
// формула 0,0125 × (1 + 0,0125)18 / ((1 + 0,0125)18 − 1) = 0,062385  - коэффициента аннуитета


// считаем коэффициент аннуитета
const annuityCoefficient = onePercentAnnualNumber * Math.pow((1 +  onePercentAnnualNumber),this.creditTermValue) / (Math.pow((1 +  onePercentAnnualNumber),this.creditTermValue) - 1);
// __________________________________________________________________________________________
// Теперь подставляем коэффициент аннуитета в расчет платежа:
// 300 000 × 0,062385 = 18 715,44 Р

// ежемесячный платеж,округляем
this.monthlyPayment =  Math.round((this.totalCostValue - this.downPayment) * annuityCoefficient)
console.log(this.monthlyPayment)

// сумма с переплатой
this.overpaymentAmount = this.monthlyPayment * this.creditTermValue

    },

// очищение полей калькулятора
    cleanResultCalc() {

    }
  },

  filters: {
    'go':function(value) {
      // console.log(this.totalCostValue.toLocaleString('ru-RU'))
      return value.toLocaleString('ru-RU')
    }
  }
};
</script>