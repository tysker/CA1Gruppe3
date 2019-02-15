/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var boys = ["Peter", "Lars", "ole"];
var girls = ["Janne", "hanne", "Sanne"];



function showArrays() {
    // show all the boys
    document.getElementById('boys').innerHTML = boys.join('<br>')

// show all the girls
    document.getElementById('girls').innerHTML = girls.join('<br>');

// show all
    document.getElementById('all').innerHTML = boys.concat(girls).join('<br>');
}



// Add a boy to the list
document.getElementById('addboy').addEventListener('click', function () {
    var newBoy = document.getElementById('newboy').value;
    boys.push(newBoy);
    // clear input field
    document.getElementById('newboy').value = '';
    //update List
    showArrays();
});

// Add a girl to the list
document.getElementById('addgirl').addEventListener('click', function () {
    var newGirl = document.getElementById('newgirl').value;
    girls.push(newGirl);
    // clear input field
    document.getElementById('newgirl').value = '';
    //update List
    showArrays();
});

// Remove a boy from the top of the List
document.getElementById('removeboy').addEventListener('click', function () {
    let first = document.getElementById('first').checked;
    let last = document.getElementById('last').checked;
    // check which radio button is clicked, otherwise the top of the list is removed
    if (first === false) {
        boys.pop();
    } else if (last === false) {
        boys.shift();
    }
    showArrays();
});

// Remove a girl from the top of the List
document.getElementById('removegirl').addEventListener('click', function () {
    let first = document.getElementById('first').checked;
    let last = document.getElementById('last').checked;
    // check which radio button is clicked, otherwise the top of the list is removed
    if (first === false) {
        girls.pop();
    } else if (last === false) {
        girls.shift();
    }
    showArrays();
});

// Reverse all names in the "ALL" coumn
// mangler return revers!!!!!!!!!!
document.getElementById('reverse').addEventListener('click', function () {
    var newBoysGirlsList = boys.concat(girls).reverse();
    document.getElementById('all').innerHTML = newBoysGirlsList.join('<br>');
});



 document.getElementById('sort').addEventListener('click', function () {
 var newBoysGirlsList = boys.concat(girls);
 
 newBoysGirlsList.sort(function (a, b) {
 var nameA = a.toUpperCase(); // ignore upper and lowercase
 var nameB = b.toUpperCase(); // ignore upper and lowercase
 if (nameA < nameB) {
 return -1;
 }
 if (nameA > nameB) {
 return 1;
 }
 
 // names must be equal
 return 0;
 });
 
 document.getElementById('all').innerHTML = newBoysGirlsList.join('<br>');
 
 });


showArrays();





































