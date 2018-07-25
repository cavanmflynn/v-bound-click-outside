/* global jest describe it expect afterEach */

import clickOutside from '../lib/index'

const plugin = clickOutside
const directive = clickOutside.directive

describe('v-bound-click-outside -> plugin', () => {
  it('install the directive into the vue instance', () => {
    const vue = {
      directive: jest.fn()
    }
    plugin.install(vue)
    expect(vue.directive).toHaveBeenCalledWith('bound-click-outside', directive)
    expect(vue.directive).toHaveBeenCalledTimes(1)
  })
})

describe('v-bound-click-outside -> directive', () => {
  const div1 = document.createElement('div')
  const div2 = document.createElement('div')
  const a = document.createElement('a')

  afterEach(() => {
    directive.instances = []
    directive.events = ['click']
  })
})
