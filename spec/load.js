
import tape from 'tape'

import Preloader from 'preload.io'
import { EVENTS } from 'preload.io'
import FontLoader from '../lib'

tape( 'Should expose fontLoader as the name of the module loader', t => {
  t.plan( 1 )

  let fontLoader = new FontLoader()

  t.equal( fontLoader.name, 'fontLoader' )
})
