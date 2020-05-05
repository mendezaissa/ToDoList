function AddAnItem() {

//retrieve the data user has entered
var userInput = document.getElementById("input");
var userText = userInput.value;

/* This will clone the textbox and the buton */

// assigning every div to the variable elmnt
 var elmnt = document.getElementsByTagName("DIV")[0];

 //cloning every div and assigning to cln
 var cln = elmnt.cloneNode(false);

 //attaches the cln variable to the body
 document.body.appendChild(cln);



//creates a button element and then assign it to a variable
var x = document.createElement("input");

//creates a another button and assigns it to a variable
var b = document.createElement("button");
var text = document.createTextNode("Remove");
b.appendChild(text);

//sets the created element to a textbox
x.setAttribute("type", "text");


//sets the element with a button next to it
b.setAttribute("type", "button");


//css
cln.style.margin = '10px';

x.style.border = 'solid black';
x.style.height = '30px';
x.style.width = '185px';
x.style.position = 'relative';
x.style.left = '680px';
x.style.top = '11px';


b.style.backgroundColor = 'red';
b.style.color = 'black';
b.style.border = 'solid black';
b.style.height = '37px';
b.style.width = '80px';
b.style.position = 'relative';
b.style.left = '680px';
b.style.top = '11px';

x.value = userText; //this was changed from placeholder to value
userInput.placeholder = "Add a Task";


document.body.appendChild(x);
document.body.appendChild(b);

document.getElementById("input").value = ""; //resets the textbox
document.getElementById("input").focus();    //brings the cursor back to the textbox

//this function removes the task when the button 'remove' is clicked
b.onclick = function GetRidOfIt() {
x.remove();
b.remove();
}

}
