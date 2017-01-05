/**
 * Created by nitin on 6/1/17.
 */

    var middleware = {
        requireAuthentication: function (req, res, next) {
            console.log('Private route hit!');
            next();
        },
        logger: function (req, res, next) {
            var requestedDate = new Date().toString();
            console.log('Request : (' + requestedDate + ') ' + req.method + ' ' + req.originalUrl);
            next();
        }
    };
module.exports = middleware;