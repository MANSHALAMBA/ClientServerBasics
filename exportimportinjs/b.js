var z=1;

function hey(){

    console.log("hello ");
}

hey();


//  module.exports.info=z;
                                 // better way of doing this neeche hai !!!!
// module.exports.print=hey;


module.exports={                 // 2nd method
    
        info:z ,
        print:hey ,

        printagain: function(){

     console.log("how r u ? ");

        },

        object: function(){ // object factory ,, each file importing this file can get individual copy of number

            return {
                number:0
            }
        }



}


// printagain();         // this command cant run becoz printagain is defined inside module.exports,, u can say this
                        //   is the disadvantage  2nd method


