import { shallowMount } from '@vue/test-utils'
import NumberButton from '@/components/NumberButton.vue'

describe('NumberButton.vue', () => {
  let numberButtonWrapper

  beforeEach(() => {
    numberButtonWrapper = shallowMount(NumberButton)
  })

  it('should come unselected by default', () => {
    expect(numberButtonWrapper.vm.isSelected).toBeFalsy()
  })

  it('should select', () => {
    let button = numberButtonWrapper.find('.number-button')
    button.trigger('click')
    
    expect(numberButtonWrapper.vm.isSelected).toBeTruthy()
  })

  it('should unselect', () => {
    let button = numberButtonWrapper.find('.number-button')
    button.trigger('click')
    button.trigger('click')

    expect(numberButtonWrapper.vm.isSelected).toBeFalsy()
  })

})