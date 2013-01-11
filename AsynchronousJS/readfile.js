fs = require('fs');

fs.readFile('./bigfile.txt', 'utf8', function(read_err, read_data) {
    if(read_err) return read_err;
    console.log(read_data);
});

console.log("---------------It is Asynchonous Programming, I DON'T WAIT---------------");