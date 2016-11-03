/**
 * ==================================================================================================
 * ACCORDION.JS
 * ==================================================================================================
 * Author: w3schools.com
 * http://www.w3schools.com/howto/howto_js_accordion.asp
 *
 * --------------------------------------------------------------------------------------------------
 * Revision History
 * --------------------------------------------------------------------------------------------------
 * Date          Revision Description                                                     Modified By
 * --------------------------------------------------------------------------------------------------
 * 11.02.2016 - Moved script from client.html to external file                            KAK
 * ==================================================================================================
 *
 */

 var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
  }
}
