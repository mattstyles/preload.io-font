# preload.io-font

> Preload.io loader for fonts

## Installation

```
npm i -S preload.io-font
```


## Example

```sh
npm i -S preload.io preload.io-font
```

```js
import Preloader from 'preload.io'
import { EVENTS } from 'preload.io'
import FontLoader from '../lib'

let preloader = new Preloader()
preloader.register( new FontLoader())

preloader.load({
  resource: {
    google: {
      families: [ 'Open+Sans:400, 400italic, 700' ]
    },
    classes: true
  },
  loader: 'fontLoader'
})
```

## License

ISC
