import { shallowMount } from '@vue/test-utils'
import SwitchGame from '@/components/SwitchGame'

let switchGameWrapper
let $store

beforeEach(() => {
  $store = {
    state: {
      numbersSelecteds: [],
      typeGame: ''
    },
    getters: {
      senaNumbersSelecteds: []
    }
  }

  switchGameWrapper = shallowMount(SwitchGame, {
    global: {
      mocks: {
        $store
      }
    }
  })
})

describe('SwitchGame.vue', () => {
  test('should display a Sena type game by default', () => {
    expect(switchGameWrapper.vm.typeSelected).toEqual('sena')
  })

  test('should switch to Quina game', () => {
    switchGameWrapper.find('#quina').trigger('click')
    expect(switchGameWrapper.vm.typeSelected).toEqual('quina')
  })

  test('should switch to Quina game after selecting Quina', () => {
    switchGameWrapper.find('#quina').trigger('click')
    switchGameWrapper.find('#sena').trigger('click')
    
    expect(switchGameWrapper.vm.typeSelected).toEqual('sena')
  })
})