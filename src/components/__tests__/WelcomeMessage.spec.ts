import { describe, it, expect, vi } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import WelcomeMessage from '../WelcomeMessage.vue'

describe('WelcomeMessage', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(WelcomeMessage, {
      props: {
        msg: 'Hello Vitest'
      }
    })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
