/*
 *  asynchronous loop for synchronous tasks;
 *      from http://stackoverflow.com/a/4288992
 */

'use strict'


module.exports = (iter, func, cb) => {
    let idx = 0
    let done = false

    const loop = {
        next: () => {
            if (done) return

            if (idx < iter) {
                setImmediate(func.bind(null, loop, idx++))
            } else {
                done = true
                cb()
            }
        },
        break: () => {
            done = true
            cb()
        }
    }

    loop.next()

    return loop
}

// end of asyncLoop.js
