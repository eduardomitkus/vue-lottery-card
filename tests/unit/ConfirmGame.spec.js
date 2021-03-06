import { shallowMount } from '@vue/test-utils'
import ConfirmGame from '@/components/ConfirmGame'

const confirmGameMock = (data) => {
  return shallowMount(ConfirmGame, {
    global: {
      mocks: {
        $store: {
          state: {
            numbersSelecteds: data.numbersSelecteds,
            typeGame: data.typeGame,
            priceGame: ''
          },
          getters: {
            isSenaGame: data.typeGame == 'sena'
          }
        }
      }
    }
  })
}

describe('ConfirmGame.vue', () => {
  test('should return the price of the Sena game if have at least 6 numbers selected', () => {
    const confirmGameWrapper = confirmGameMock({
      numbersSelecteds: [2,3,4,5,6,7],
      typeGame: 'sena'
    })

    expect(confirmGameWrapper.vm.getPrice()).toEqual(4.50)
  })

  test('should return the price of the Quina game if have at least 6 numbers selected', () => {
    const confirmGameWrapper = confirmGameMock({
      numbersSelecteds: [2,3,4,5,6],
      typeGame: 'quina'
    })

    expect(confirmGameWrapper.vm.getPrice()).toEqual(2.00)
  })

  test('should a button to confirm the game should appear', () => {
    const confirmGameWrapper = confirmGameMock({
      numbersSelecteds: [10,3,4,5,6,80],
      typeGame: 'quina'
    })

    const confirmButton = confirmGameWrapper.find('#confirm-game')

    expect(confirmButton.text()).toBe('Confirmar Jogo')
  })

  test('should save price state by Sena Game', () => {
    const confirmGameWrapper = confirmGameMock({
      numbersSelecteds: [10,3,4,5,6,80,2,23,60,30],
      typeGame: 'sena',
    })

    confirmGameWrapper.find('#confirm-game').trigger('click')
    const senPrice = 945.00

    expect(confirmGameWrapper.vm.$store.state.priceGame).toEqual(senPrice)
  })

  test('should save price state by Quina Game', () => {
    const confirmGameWrapper = confirmGameMock({
      numbersSelecteds: [10,3,4,5,6,80,2,23,60,30],
      typeGame: 'quina',
    })

    confirmGameWrapper.find('#confirm-game').trigger('click')
    const quinaPrice = 504.00

    expect(confirmGameWrapper.vm.$store.state.priceGame).toEqual(quinaPrice)
  })
  
})