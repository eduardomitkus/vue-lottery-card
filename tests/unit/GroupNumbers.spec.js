import { shallowMount } from '@vue/test-utils'
import GroupNumbers from '@/components/GroupNumbers'

describe('NumberButton.vue', () => {
  let groupNumbersWrapper

  beforeEach(() => {
    groupNumbersWrapper = shallowMount(GroupNumbers)
  })

  it('should return a Sena game with 60 numbers', async () => {
    await groupNumbersWrapper.setProps({ typeGame: 'sena' })
    expect(groupNumbersWrapper.vm.totalNumbers).toBe(60)
  })

  it('should return a Quina game with 80 numbers', async () => {
    await groupNumbersWrapper.setProps({ typeGame: 'quina' })
    expect(groupNumbersWrapper.vm.totalNumbers).toBe(80)
  })
})