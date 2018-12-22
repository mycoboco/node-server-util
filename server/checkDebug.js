/*
 *  continues routing only on debug mode
 */


module.exports = (debug) => {
    if (typeof debug !== 'boolean') {
        debug = (process.env.NODE_ENV !== 'production')
    }

    return function (req, res, next) {
        if (debug) {
            next()
            return
        }

        res.send(404)
    }
}

// end of checkDebug.js