
import wf from 'webfontloader'
import { EVENTS } from 'preload.io'


class IOError extends Error {
  constructor( opts ) {
    super( opts.message )

    this.name = 'IOError'
    this.stack = ( new Error() ).stack

    Object.keys( opts ).forEach( key => {
      this[ key ] = opts[ key ]
    })
  }
}


export default class FontLoader {
  constructor( opts ) {
    this.name = 'fontLoader'
  }

  load( ctx, opts ) {
    return new Promise( ( resolve, reject ) => {
      wf.load( Object.assign({
        fontactive: font => {
          ctx.emit( 'font:loaded', {
            id: opts.id
          })
        },
        active: () => {
          ctx.emit( EVENTS.LOAD, {
            id: opts.id,
            res: {
              active: true,
              err: null
            }
          })
          resolve()
        },
        inactive: err => {
          ctx.emit( EVENTS.LOAD_ERROR, {
            id: opts.id,
            res: {
              active: false,
              err: err
            }
          })
          reject( new IOError({
            message: 'Error loading fonts'
          }))
        }
      }, opts.resource ) )
    })
  }
}

module.exports = Fontloader
