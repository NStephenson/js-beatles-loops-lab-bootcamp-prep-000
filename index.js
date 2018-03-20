function theBeatlesPlay (musicians, instruments){
  var my_array = [ ]; 
  for (let i=0; i<musicians.length; i++) {
    my_array.push(`${musicians[i]} plays ${instruments[i]}`);  
  }
 
    return my_array;
}

function johnLennonFacts(facts){
var newarray = [ ]
 let i=0
  while (i<facts.length) {
 newarray.push(`${facts[i]}!!!`)
  i++
  }
  return newarray
}