import { shallowMount } from '@vue/test-utils'
import SwitchGame from '@/components/SwitchGame'

describe('SwitchGame.vue', () => {
  let switchGameWrapper
  let $store

  beforeEach(() => {
    const $store = {
      state: {
        numbersSelecteds: [],
        typeGame: ''
      },
    }

    switchGameWrapper = shallowMount(SwitchGame, {
      global: {
        mocks: {
          $store
        }
      }
    })
  })

  it('should display a Sena type game by default', () => {
    expect(switchGameWrapper.vm.typeSelected).toEqual('sena')
  })

  it('should switch to Quina game', () => {
    switchGameWrapper.find('#quina').trigger('click')
    expect(switchGameWrapper.vm.typeSelected).toEqual('quina')
  })

  it('should switch to Quina game after selecting Quina', () => {
    switchGameWrapper.find('#quina').trigger('click')
    switchGameWrapper.find('#sena').trigger('click')
    
    expect(switchGameWrapper.vm.typeSelected).toEqual('sena')
  })
})