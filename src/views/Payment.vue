<template>
  <div class="container">
    <payment-detail />
  </div>
</template>

<script>
import PaymentDetail from '../components/PaymentDetail'

export default {
  name: 'Payment',
  components: { PaymentDetail },
}
</script>