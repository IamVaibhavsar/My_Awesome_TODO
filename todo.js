alert('                             Welcome to "MY AWESOME TODO!"\nGive Me Your Reviews/Opinions at vaibhavbhavsar007@gmail.com or 9689081596.\n                          THANK YOU For Using The Application!');

var ul = document.getElementById('list');
var li;

var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItem);

var clearButton = document.getElementById('clearAll');
clearButton.addEventListener('click', clearItem);

function addItem() {
    var input = document.getElementById('input');
    var item = input.value;
    u1 = document.getElementById('list');
    var textnode = document.createTextNode(item);

    if (item === '') {
        return false;
        //add a p tag and assign a value of "Enter your todo"
    }

    else {
        //create li
        li = document.createElement('li');

        //create checkbox
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', 'check')

        //create label
        var label = document.createElement('label');
        label.setAttribute('for', 'item');       //optional

        //add these elements on web page
        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0]);

        setTimeout(() => {
            li.className = 'visual';
        }, 2);

        //clearing the input

        input.value = '';

    }

}


function removeItem() {
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        }


    }
}

function clearItem() {
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0]) {
            ul.removeChild(li[index])
        }


    }
}





