/**
 * ==================================================================================================
 * AJAX.JS
 * ==================================================================================================
 * Original Author: Umang Shah
 * Modified by: Kaitlin Kidd
 * Source: AJAX using Javascript and JQuery + 2 Projects
 ***** Udemy course: https://www.udemy.com/learn-ajax-using-javascript-jquery-in-2-hrs-2-projects/learn/v4/overview
 ***** Project 1: Planet Details Finder
 * Date: 09.29.16
 * Version: 0.0.1
 * Purpose: Ajax calls for app.
 *
 * --------------------------------------------------------------------------------------------------
 * Revision History
 * --------------------------------------------------------------------------------------------------
 * Date          Revision Description                                                     Modified By
 * --------------------------------------------------------------------------------------------------
 * 09.29.2016 - Created Original Document                                                         KAK
 * ==================================================================================================
 *

 * Original ajax calls found here: https://www.udemy.com/learn-ajax-using-javascript-jquery-in-2-hrs-2-projects/learn/v4/t/lecture/4967392
 *
 *
 *
 /* Star name search */
function getStarsByName() {
    $.ajax({
        url: "/projects/stars-app/server.php",
        type: "POST",
        data: "star_name=" + $('#star_name').val(),
        dataType: "json",
        success: function (response, status, http) {
            console.log(response);
            var results = '';
            $.each (response, function(index, item) {
                results = results + "<div class='starItem'>Name: " + item.name + "<br/>";
                results = results + "Distance: " + item.distance + "<br/>";
                results = results + "Constellaton: " + item.constellation + "<br/>";
                results = results + "</div>";
            });
            $('#star_results').html(results);
        },
        error: function (http, status, error) {
            alert("Error: " + error);
        }
    });
}

/* Distance filter: <5 */
function getStarsByDistanceFilterOne() {
    $.ajax({
        url: "/projects/stars-app/server.php",
        type: "POST",
        data: "star_distance_one=" + $('.star_distance_one').val(),
        dataType: "json",
        success: function (response, status, http) {
            console.log(response);
            var results = '';
            $.each (response, function(index, item) {
                results = results + "<div class='starItem'>Name: " + item.name + "<br/>";
                results = results + "Distance: " + item.distance + "<br/>";
                results = results + "Constellaton: " + item.constellation + "<br/>";
                results = results + "</div>";
            });
            $('#star_results').html(results);
        },
        error: function (http, status, error) {
            alert("Error: " + error);
        }
    });
}

/* Distance filter: 5 - 10 */
function getStarsByDistanceFilterTwo() {
    $.ajax({
        url: "/projects/stars-app/server.php",
        type: "POST",
        data: "star_distance_two=" + $('.star_distance_two').val(),
        dataType: "json",
        success: function (response, status, http) {
            console.log(response);
            var results = '';
            $.each (response, function(index, item) {
                results = results + "<div class='starItem'>Name: " + item.name + "<br/>";
                results = results + "Distance: " + item.distance + "<br/>";
                results = results + "Constellaton: " + item.constellation + "<br/>";
                results = results + "</div>";
            });
            $('#star_results').html(results);
        },
        error: function (http, status, error) {
            alert("Error: " + error);
        }
    });
}

/* Distance filter: 10+ */
function getStarsByDistanceFilterThree() {
    $.ajax({
        url: "/projects/stars-app/server.php",
        type: "POST",
        data: "star_distance_three=" + $('.star_distance_three').val(),
        dataType: "json",
        success: function (response, status, http) {
            console.log(response);
            var results = '';
            $.each (response, function(index, item) {
                results = results + "<div class='starItem'>Name: " + item.name + "<br/>";
                results = results + "Distance: " + item.distance + "<br/>";
                results = results + "Constellaton: " + item.constellation + "<br/>";
                results = results + "</div>";
            });
            $('#star_results').html(results);
        },
        error: function (http, status, error) {
            alert("Error: " + error);
        }
    });
}

/* Constellation selector */
function getStarsByConstellation() {
    $.ajax({
        url: "/projects/stars-app/server.php",
        type: "POST",
        data: "star_constellation=" + $('.star_constellation').val(),
        dataType: "json",
        success: function (response, status, http) {
            console.log(response);
            var results = '';
            $.each (response, function(index, item) {
                results = results + "<div class='starItem'>Name: " + item.name + "<br/>";
                results = results + "Distance: " + item.distance + "<br/>";
                results = results + "Constellaton: " + item.constellation + "<br/>";
                results = results + "</div>";
            });
            $('#star_results').html(results);
        },
        error: function (http, status, error) {
            alert("Error: " + error);
        }
    });
}
