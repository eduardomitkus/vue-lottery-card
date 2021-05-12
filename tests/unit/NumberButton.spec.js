import { shallowMount } from '@vue/test-utils'
import NumberButton from '@/components/NumberButton'

describe('NumberButton.vue', () => {
  let numberButtonWrapper

  beforeEach(() => {
    numberButtonWrapper = shallowMount(NumberButton)
  })

  test('should come unselected by default', () => {
    expect(numberButtonWrapper.vm.isSelected).toBeFalsy()
  })

  test('should select', () => {
    let button = numberButtonWrapper.find('.number-button')
    button.trigger('click')
    
    expect(numberButtonWrapper.vm.isSelected).toBeTruthy()
  })

  test('should unselect', () => {
    let button = numberButtonWrapper.find('.number-button')
    button.trigger('click')
    button.trigger('click')

    expect(numberButtonWrapper.vm.isSelected).toBeFalsy()
  })
})