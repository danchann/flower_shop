/*H Let’s go back to our little website we coded in the HTML / CSS introduction. See picture below for inspiration:

Once the user hovers over the 4 icons, they should increase in size by 40%, once the users mouse leaves the icons their size should decrease to normal again
Make the Learn More button clickable. Once the user clicks on it:
Remove the black overlay so that we can see the flowers clearly.
Change the title from ‘beautiful flowers’ to ‘welcome to my flower shop’, give the text a background and change the color to blue.
Change the text of the button from ‘learn more’ to ‘buy flowers’, change the background color to red.*/

window.onload = function() {



}

function myFunction () {
    var photo = document.getElementById("photo");
    if(photo.style.opacity < 1) {
        photo.style.opacity = 1;
        document.getElementById("shopname").innerHTML = "Welcome to my flower shop";
        document.getElementById("shopname").style.color = "blue";
        document.getElementById("shopname").style.backgroundColor = "yellow";
        document.getElementById("learnmore").innerHTML = "Buy flowers";
        document.getElementById("learnmore").style.backgroundColor = "red";

    } else {
        photo.style.opacity = 0.3;
        document.getElementById("shopname").innerHTML = "Beautiful Flowers";
        document.getElementById("shopname").style.color = "white";
        document.getElementById("shopname").style.backgroundColor = "";
        document.getElementById("learnmore").innerHTML = "Learn more";
        document.getElementById("learnmore").style.backgroundColor = "";
    }   
}