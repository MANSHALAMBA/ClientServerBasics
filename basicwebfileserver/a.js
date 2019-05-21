var http=require('http');

var fs=require('fs');

function notfoundfunc(response){

    response.writeHead(404,{ "Context-Type":"text/plain"});
    response.write("page not found");
            response.end();
}



function myfunc(request,response){

    if(request.method=='GET'&& request.url=='/'){

        response.writeHead(200,{ "Context-Type":"text/html"});
        fs.createReadStream("./index.html").pipe(response);

    }
    else if(request.method=='GET'&& request.url=='/about'){

        response.writeHead(200,{ "Context-Type":"text/html"});
        fs.createReadStream("./about.html").pipe(response);

    }
    else{
        notfoundfunc(response);

    }
}

http.createServer(myfunc).listen(3500);
console.log("server made");