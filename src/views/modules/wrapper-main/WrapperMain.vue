<template>
  <div class="main-wrapper">
    <Header />
    <Main />
    <!-- ГРАФИК ПЛАТЕЖЕЙ -->
    <!-- <PaymentSchedule /> -->
  </div>
</template>

<script>
import Header from "../header/Header.vue";
import Main from "../main/Main.vue";
// import PaymentSchedule from "../payment-schedule/PaymentSchedule.vue";

export default {
  components: {
    Header,
    Main,
    // PaymentSchedule,
  },
};
</script>