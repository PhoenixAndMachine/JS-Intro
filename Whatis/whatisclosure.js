//var word = "World";

function Encrypt() {
//  var word = "Environment";

  function getWord() {
//    var word = "I";
    return word+" changed";
  }

  return getWord;
}


console.log(Encrypt());

console.log(Encrypt()());
