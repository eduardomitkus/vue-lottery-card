import { shallowMount } from '@vue/test-utils'
import GroupNumbers from '@/components/GroupNumbers'

const groupNumbersMock = (data) => {
  return shallowMount(GroupNumbers, {
    global: {
      mocks: {
        $store: {
          state: {
            numbersSelecteds: data.numbersSelecteds,
            typeGame: data.typeGame
          },
          getters: {
            isSenaGame: data.typeGame == 'sena'
          }
        }
      }
    }
  })
}

describe('NumberButton.vue', () => {
  test('should return a Sena game with 60 numbers', () => {
    const groupNumbersWrapper = groupNumbersMock({
      numbersSelecteds: [],
      typeGame: 'sena'
    })

      expect(groupNumbersWrapper.vm.totalNumbers).toBe(60)
  })

  test('should return a Sena game with 80 numbers', () => {
    const groupNumbersWrapper = groupNumbersMock({
      numbersSelecteds: [],
      typeGame: 'quina'
    })

    expect(groupNumbersWrapper.vm.totalNumbers).toBe(80)
  })

  test('Selected numbers should be in ascending order', () => {
    const groupNumbersWrapper = groupNumbersMock({
      numbersSelecteds: [],
    })

    const randomNumbersSelecteds = [ 9,3,1 ].sort(() => Math.random() - 0.5)
    groupNumbersWrapper.vm.$store.state.numbersSelecteds = randomNumbersSelecteds

    expect(groupNumbersWrapper.vm.getNumbersSelecteds()).toEqual([1,3,9])
  })

  test('should save state of the selected number', () => {
    const groupNumbersWrapper = groupNumbersMock({
      numbersSelecteds: [],
    })

    const numberSelected = 20
    const isSelected = true
    groupNumbersWrapper.vm.numberSelected(numberSelected, isSelected)

    expect(groupNumbersWrapper.vm.$store.state.numbersSelecteds).toEqual(expect.arrayContaining([numberSelected]))
  })

  test('should save state of the unselected number', () => {
    const groupNumbersWrapper = groupNumbersMock({
      numbersSelecteds: [],
    })

    const numberSelected = 50
    const isSelected = false

    groupNumbersWrapper.vm.numberSelected(numberSelected, isSelected)

    expect(groupNumbersWrapper.vm.$store.state.numbersSelecteds).toEqual([])
  })

})

