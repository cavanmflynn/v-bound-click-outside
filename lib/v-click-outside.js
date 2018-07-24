const isTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints > 0

const directive = {
  instances: [],
  events: isTouch ? ['touchstart', 'click'] : ['click']
}

function unbind(el) {
  const instanceIndex = directive.instances.findIndex(i => i.el === el)
  if (instanceIndex >= 0) {
    directive.instances.splice(instanceIndex, 1)
  }
  if (directive.instances.length === 0) {
    directive.events.forEach(e => document.removeEventListener(e, directive.onEvent))
  }
}

function bind(el, binding) {
  if (!isBound(el)) {
    directive.instances.push({ el, fn: binding.value.function, mod: binding.modifiers })
    if (directive.instances.length === 1) {
      directive.events.forEach(e => document.addEventListener(e, directive.onEvent))
    }
  }
}

function isBound(el) {
  const instanceIndex = directive.instances.findIndex(i => i.el === el)
  if (instanceIndex >= 0) {
    return true
  }
  return false
}

directive.onEvent = function (event) {
  directive.instances.forEach(({ el, fn, mod }) => {
    if (event.type === 'touchstart' && mod.notouch) {
      return
    }
    if (event.target !== el && !el.contains(event.target)) {
      fn && fn(event)
    }
  })
}

directive.bind = function (el, binding) {
  if (binding.value.isBound) {
    bind(el, binding)
  }
}

directive.unbind = function (el) {
  unbind(el)
}

directive.update = function (el, binding) {
  if (typeof binding.value.function !== 'function') {
    throw new Error('Argument must be a function')
  }
  
  if (binding.value.isBound) {
    bind(el, binding)
    const instance = directive.instances.find(i => i.el === el)
    instance.fn = binding.value.function
  } else {
    unbind(el)
  }
}

export default typeof window !== 'undefined' ? directive : {}
