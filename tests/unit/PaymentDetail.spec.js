import { shallowMount } from '@vue/test-utils'
import PaymentDetail from '@/components/PaymentDetail'

let paymentDetailWrapper
let $store

beforeEach(() => {
  $store = {
    state: {
      priceGame: ''
    },      
  }

  paymentDetailWrapper = shallowMount(PaymentDetail, {
    global: {
      mocks: {
        $store
      }
    }
  })
})

describe('PaymentDetail.vue', () => {
    test('should show the formatted currency price', () => {
      paymentDetailWrapper.vm.$store.state.priceGame = 31.50

      expect(paymentDetailWrapper.vm.getCurrency()).toEqual('R$ 31,50')
    })
})