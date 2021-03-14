//Variables 
var colorEl1 = document.getElementById('color1');
var colorEl2 = document.getElementById('color2');
var colorEl3 = document.getElementById('color3');
var colorPickerEl = document.getElementById('colorPicker');

//Sets background color of color1 to text input, color2 to color1, and color3 to color2
function changeColor() {
    if(!colorPickerEl.value.includes('#')) {
        alert("You messed with the pound sign!")
        document.getElementById('rainbow').src = "images/shame.gif"
    } else {
        colorEl3.style.backgroundColor = colorEl2.style.backgroundColor;
        colorEl2.style.backgroundColor = colorEl1.style.backgroundColor;
        colorEl1.style.backgroundColor = colorPickerEl.value;
        if (document.getElementById('rainbow').src = "images/shame.gif") {
            document.getElementById('rainbow').src = "images/rainbow.jpg"
        } 
    }
    colorPickerEl.value = '#'    
}