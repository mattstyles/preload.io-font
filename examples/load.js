
import Preloader from 'preload.io'
import { EVENTS } from 'preload.io'
import FontLoader from '../lib'

let preloader = new Preloader()
preloader.register( new FontLoader())

preloader.load( '' )


preloader.on( EVENTS.LOAD, event => {
})
preloader.on( EVENTS.LOAD_ERROR, event => {
})
preloader.on( EVENTS.COMPLETE, res => {
    console.log( '-- COMPLETE' )
    console.log( res )
})
