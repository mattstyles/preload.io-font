
import Preloader from 'preload.io'
import { EVENTS } from 'preload.io'
import FontLoader from '../lib'

let preloader = new Preloader()
preloader.register( new FontLoader())

preloader.load({
    resource: {
        google: {
            families: [ 'Open+SansO:400, 400italic, 700' ]
        },
        classes: true
    },
    loader: 'fontLoader'
})


preloader.on( EVENTS.LOAD, event => {
    console.log( '-- LOAD' )
    console.log( event )
})
preloader.on( EVENTS.LOAD_ERROR, event => {
    console.log( '-- LOAD ERROR' )
    console.log( event )
})
preloader.on( EVENTS.COMPLETE, res => {
    console.log( '-- COMPLETE' )
    console.log( res )
})
