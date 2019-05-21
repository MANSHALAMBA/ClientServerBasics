var http=require('http');

function myfunc(request,response){

            console.log(" user made a request at "+ request.url );
            response.writeHead(200,{ "Context-Type":"text/plain"});
            response.write("welcome to 4000 ");
            response.end();

}

http.createServer(myfunc).listen(4000);

console.log("server made");


