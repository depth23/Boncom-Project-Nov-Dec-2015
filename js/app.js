"use strict";

$(document).ready(function() {
  
  var chat_box_pop_up = function(element, elementArrow) {
    
    var pop_up = element.id;
    var arrow = elementArrow.id;
    var pop_up_style = document.getElementById(pop_up).style;
    var arrow_style = document.getElementById(arrow).style;
    var width = document.documentElement.clientWidth;
    console.log(document.documentElement.clientWidth);
    
    //Small views
    
    if(pop_up_style.bottom <= "-17.7rem" && width <= 639) {
      pop_up_style.bottom = "0rem";
      arrow_style.msTransform = "rotate(180deg)";
      arrow_style.WebkitTransform = "rotate(180deg)";
      arrow_style.transform = "rotate(180deg)";
    }
    else if(pop_up_style.bottom <= "0rem" && width <= 639) {
      pop_up_style.bottom = "-17.7rem";
      arrow_style.msTransform = "rotate(0deg)";
      arrow_style.WebkitTransform = "rotate(0deg)";
      arrow_style.transform = "rotate(0deg)";
    }
    //Large and Medium views
    
    else if(pop_up_style.bottom <= "-20.47rem" && width >= 640) {
      pop_up_style.bottom = "0rem";
      arrow_style.msTransform = "rotate(180deg)";
      arrow_style.WebkitTransform = "rotate(180deg)";
      arrow_style.transform = "rotate(180deg)";
    }
    else if(pop_up_style.bottom >= "0rem" && width >= 640) {
      pop_up_style.bottom = "-20.47rem";
      arrow_style.msTransform = "rotate(0deg)";
      arrow_style.WebkitTransform = "rotate(0deg)";
      arrow_style.transform = "rotate(0deg)";
    }
  };

  document.getElementById("pop_up_tab_p2").addEventListener("click", function() {
    chat_box_pop_up(pop_up_p2, arrow_p2);
  }); 
  
  document.getElementById("pop_up_tab_p3").addEventListener("click", function() {
    chat_box_pop_up(pop_up_p3, arrow_p3);
  }); 
  
  document.getElementById("pop_up_tab_p4").addEventListener("click", function() {
    chat_box_pop_up(pop_up_p4, arrow_p4);
  }); 
  
//  document.getElementById("pop_up_tab_p5").addEventListener("click", function() {
//    chat_box_pop_up(pop_up_p5);
//  }); 
    
  
});

$(document).foundation();

  
  