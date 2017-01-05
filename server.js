/**
 * Created by nitin on 5/1/17.
 */
var express = require ('express');
var app = express();
var port = 8000;

var middleware = {
    requireAuthentication : function (req,res,next){
        console.log('Private route hit!');
        next();
    },
    logger : function(req,res,next){
        var requestedDate = new Date().toString();
        console.log('Request : (' + requestedDate + ') ' + req.method + ' ' + req.originalUrl);
        next();
    }
};
//app.use(middleware.requireAuthentication);                   //Application level Middleware
app.use(middleware.logger);

/*.get ('/',function (req,res){
    res.send('Welcome to Node js !');
})*/
app.get('/about',middleware.requireAuthentication,function (req,res){ //Route level Middleware
    res.send('About Us');
});
app.use(express.static(__dirname + '/public'));

app.listen(port,function (){
    console.log('Server is running at port '+ port +'...');
});