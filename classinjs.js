function b(){

          this.name;
          this.age;
          this.info= function print(){

                      console.log("name:"+ this.name);
                      console.log(" age:" + this.age);

          }



}

var studentone= new b();
var studenttwo= new b();
studentone.name="mansha";
studentone.age=20;
studentone.info();

b.prototype.course; // here we dont need this
b.prototype.info2= function print(){     // info2 coz  info not possible coz over riding not working 

    console.log("name:"+ this.name);
    console.log(" age:" + this.age);
    console.log(" course:" + this.course); // here this is needed else u will get undefined error

}
studentone.course="btech";

studentone.info();
console.log(studentone.course);
console.log(studenttwo.course);
studentone.info2();


