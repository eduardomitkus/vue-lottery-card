import { shallowMount } from '@vue/test-utils'
import GroupNumbers from '@/components/GroupNumbers'

describe('NumberButton.vue', () => {

  it('should return a Sena game with 60 numbers', () => {
      const $store = {
        state: {
          numbersSelecteds: [],
          typeGame: 'sena'
        },
      }
  
      const groupNumbersWrapper = shallowMount(GroupNumbers, {
        global: {
          mocks: {
            $store
          }
        }
      })

      expect(groupNumbersWrapper.vm.totalNumbers).toBe(60)
  })

  it('should return a Sena game with 80 numbers', () => {
    const $store = {
      state: {
        numbersSelecteds: [],
        typeGame: 'quina'
      },
    }

    const groupNumbersWrapper = shallowMount(GroupNumbers, {
      global: {
        mocks: {
          $store
        }
      }
    })

    expect(groupNumbersWrapper.vm.totalNumbers).toBe(80)
})
})