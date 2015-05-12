fs = require('fs');
function stop() {

  var f = stop;
  var num = 0;
  while(f.caller !== null) {
    fs.writeFileSync("log"+num, "trace stack \n---------------------\n" + f.caller + "\n=======================\n");
    f = f.caller;
    num = num + 1;
  }

}

stop();
