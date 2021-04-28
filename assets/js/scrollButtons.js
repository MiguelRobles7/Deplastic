/*
 jQuery;
 */

 "use strict";


 jQuery(document).ready(function ($) { 
     $(window).scroll(function(){
         if ($(this).scrollTop() > 600) {
             $('.scrollup').fadeIn('slow');
         } else {
             $('.scrollup').fadeOut('slow');
         }
 
         // Scroll Buttons Toggle
         var sec1Btn = document.getElementById('sec1Btn');
         var sec2Btn = document.getElementById('sec2Btn');
         var sec3Btn = document.getElementById('sec3Btn');
         var sec4Btn = document.getElementById('sec4Btn');
 
         if ($(this).scrollTop() >= 0 && $(this).scrollTop() < 430) {
             sec1Btn.style.opacity = "1";
         } else {
             sec1Btn.style.opacity = "0.5";
         }
         if ($(this).scrollTop() >= 430 && $(this).scrollTop() < 930) {
             sec2Btn.style.opacity = "1";
         } else {
             sec2Btn.style.opacity = "0.5";
         }
         if ($(this).scrollTop() >= 930 && $(this).scrollTop() < 1248) {
             sec3Btn.style.opacity = "1";
         } else {
             sec3Btn.style.opacity = "0.5";
         }
         if ($(this).scrollTop() >= 1248) {
             sec4Btn.style.opacity = "1";
         } else {
             sec4Btn.style.opacity = "0.5";
         }
     });
  
  new WOW().init();
 });
 