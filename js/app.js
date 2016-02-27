"use strict";

$(document).ready(function() {
  
//  var pop_up_tab = document.getElementById("popUpTab");
//  var pop_up = document.getElementById("popUp");
//  var arrow = document.getElementById("arrow");
//  
//  pop_up_tab.addEventListener("click", function() {
//    
//    if(pop_up.style.bottom <= "-20.47rem") {
//      pop_up.style.bottom = "0rem";
//      arrow.style.msTransform = "rotate(180deg)";
//      arrow.style.WebkitTransform = "rotate(180deg)";
//      arrow.style.transform = "rotate(180deg)";
//    }
//    else if(pop_up.style.bottom >= "0rem") {
//      pop_up.style.bottom = "-20.47rem";
//      arrow.style.msTransform = "rotate(0deg)";
//      arrow.style.WebkitTransform = "rotate(0deg)";
//      arrow.style.transform = "rotate(0deg)";
//    }
//    
//  });
  var chat_box_pop_up = function(element, elementArrow) {
//    
    var pop_up = element.id;
    var arrow = elementArrow.id;
//    console.log(arrow);
    if(document.getElementById(pop_up).style.bottom <= "-20.47rem") {
      document.getElementById(pop_up).style.bottom = "0rem";
      document.getElementById(arrow).style.msTransform = "rotate(180deg)";
      document.getElementById(arrow).style.WebkitTransform = "rotate(180deg)";
      document.getElementById(arrow).style.transform = "rotate(180deg)";
    }
    else if(document.getElementById(pop_up).style.bottom >= "0rem") {
      document.getElementById(pop_up).style.bottom = "-20.47rem";
      document.getElementById(arrow).style.msTransform = "rotate(0deg)";
      document.getElementById(arrow).style.WebkitTransform = "rotate(0deg)";
      document.getElementById(arrow).style.transform = "rotate(0deg)";
    }
  }

  document.getElementById("pop_up_tab_p2").addEventListener("click", function() {
    chat_box_pop_up(pop_up_p2, arrow_p2);
  }); 
  
  document.getElementById("pop_up_tab_p3").addEventListener("click", function() {
    chat_box_pop_up(pop_up_p3, arrow_p3);
  }); 
  
  document.getElementById("pop_up_tab_p4").addEventListener("click", function() {
    chat_box_pop_up(pop_up_p4, arrow_p4);
  }); 
    
  
});

$(document).foundation();

  
  