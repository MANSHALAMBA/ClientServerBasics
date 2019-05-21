var path=require('path');



console.log(__dirname);

console.log(__filename);

var way=__filename;

console.log(path.normalize(way));
console.log(path.extname(way));
console.log(path.dirname(way));
console.log(path.basename(way));




