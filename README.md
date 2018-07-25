# v-bound-click-outside

Vue directive to react on clicks outside an element without stopping the event propagation. Great for closing dialogues, menus among other things. 

Fork of [ndelvalle/v-bound-click-outside](https://github.com/ndelvalle/v-bound-click-outside) that only calls the passed function when `isBound` is true. Perfect for preventing function calls when a dropdown is closed.



## Install

```bash
$ npm install --save v-bound-click-outside
```

```bash
$ yarn add v-bound-click-outside
```


## Use

```js
import Vue from 'vue'
import vClickOutside from 'v-bound-click-outside'

Vue.use(vClickOutside)
```

```js
<script>
  export default {
    data: {
      isDropdownOpen: false
    },
    methods: {
      onClickOutside (event) {
        console.log('Clicked outside. Event: ', event)
      }
    }
  };
</script>

<template>
  <div v-bound-click-outside="{ isBound: isDropdownOpen, function: onClickOutside }"></div>
</template>
```

Or use it as a directive

```js
import vClickOutside from 'v-bound-click-outside'

<script>
  export default {
    data: {
      isDropdownOpen: false
    },
    directives: {
      clickOutside: vClickOutside.directive
    },
    methods: {
      onClickOutside (event) {
        console.log('Clicked outside. Event: ', event)
      }
    }
  };
</script>

<template>
  <div v-bound-click-outside="{ isBound: isDropdownOpen, function: onClickOutside }"></div>
</template>
```

On touch devices, the plugin adds 'touchstart' and 'click' event listeners to support laptops with touch screen. Use 'notouch' modifier, to avoid 'click' event to be fired.

```js
<template>
  <div v-bound-click-outside.notouch="{ isBound: isDropdownOpen, function: onClickOutside }"></div>
</template>
```

## License
[MIT License](https://github.com/cavanmflynn/v-bound-click-outside/blob/master/LICENSE)

## Style
[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
