var h = document.createElement('h1')
var myValue = document.createTextNode('Hello World!')

h.appendChild(myValue)
document.querySelector('h1').appendChild(h);        //A big Hello World title is printed.

//loops
if (true) {
    var val = 5;
    while (val > 0) {
        console.log(val);
        val--;  //val=val-1

    }
}


