var detail=require('./b');  // this essentially will first run the whole code of b then do the module export 
                             // wala thing 

 console.log(detail.info);

 detail.info=5;

 console.log(detail.info);

detail.print();

detail.printagain();

