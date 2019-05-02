'use strict';


//allows users to add, check, uncheck, and remove items from shopping list
//link to jQuery and JS file
//use this and event delegation

//allow users to enter items need to purchase

//check and uncheck items on list by clicking "check" button
//remove items from list

//use CDN-hosted version of jQuery
//script elements at bottom


let AddItemEventHandler = function (event) {
  event.preventDefault();
  let submittedData = $('#shopping-list-entry').val();

  let html_str = `
    <li><span class='shopping-item'> ${submittedData} </span>
        <div class='shopping-item-controls'> 
          <button class='shopping-item-toggle'> 
          <span class='button-label'>check</span> 
        </button> 
        <button class='shopping-item-delete'> 
          <span class='button-label'>delete</span> 
        </button> 
        </div>
      </li> `;

  $("ul").append(html_str);

  $(".shopping-item-delete").click(deleteItemEventHandler);
  $(".shopping-item-toggle").click(checkItemEventHandler);


}


const deleteItemEventHandler = function(event){
  let clickedBtn = event.target;
  let parentLi = clickedBtn.closest("li");
  $(parentLi).remove();
}

const checkItemEventHandler = function(event){
  
  let clickedCheck = event.target;
  let closestDiv = $(clickedCheck).closest("li");



  let closestChild = $(closestDiv).children("span");

  $(closestChild).toggleClass("shopping-item__checked");
}



$('#js-shopping-list-form').submit(AddItemEventHandler);
$(".shopping-item-delete").click(deleteItemEventHandler);
$(".shopping-item-toggle").click(checkItemEventHandler);

