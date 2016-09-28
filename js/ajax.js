/* Star name search */
function getStarDetails() {
    $.ajax({
        url: "/projects/stars-app/server.php",
        type: "POST",
        data: "star_name=" + $('#star_name').val(),
        dataType: "json",
        success: function (response, status, http) {
            console.log(response);
            var new_suggestions = '';
            $.each (response, function(index, item) {
                new_suggestions = new_suggestions + "<div id='starItem'>Name: " + item.name + "<br/>";
                new_suggestions = new_suggestions + "Distance: " + item.distance + "<br/>";
                new_suggestions = new_suggestions + "Constellaton: " + item.constellation + "<br/>";
                new_suggestions = new_suggestions + "</div>";
            });
            $('#suggestion_box').html(new_suggestions);
        },
        error: function (http, status, error) {
            alert("Error: " + error);
        }
    });
}

/* Distance filter: <5 */
function filterOne() {
    $.ajax({
        url: "/projects/stars-app/server.php",
        type: "POST",
        data: "star_distance_one=" + $('.star_distance_one').val(),
        dataType: "json",
        success: function (response, status, http) {
            console.log(response);
            var new_suggestions = '';
            $.each (response, function(index, item) {
                new_suggestions = new_suggestions + "<div id='starItem'>Name: " + item.name + "<br/>";
                new_suggestions = new_suggestions + "Distance: " + item.distance + "<br/>";
                new_suggestions = new_suggestions + "Constellaton: " + item.constellation + "<br/>";
                new_suggestions = new_suggestions + "</div>";
            });
            $('#suggestion_box').html(new_suggestions);
        },
        error: function (http, status, error) {
            alert("Error: " + error);
        }
    });
}

/* Distance filter: 5 - 10 */
function filterTwo() {
    $.ajax({
        url: "/projects/stars-app/server.php",
        type: "POST",
        data: "star_distance_two=" + $('.star_distance_two').val(),
        dataType: "json",
        success: function (response, status, http) {
            console.log(response);
            var new_suggestions = '';
            $.each (response, function(index, item) {
                new_suggestions = new_suggestions + "<div id='starItem'>Name: " + item.name + "<br/>";
                new_suggestions = new_suggestions + "Distance: " + item.distance + "<br/>";
                new_suggestions = new_suggestions + "Constellaton: " + item.constellation + "<br/>";
                new_suggestions = new_suggestions + "</div>";
            });
            $('#suggestion_box').html(new_suggestions);
        },
        error: function (http, status, error) {
            alert("Error: " + error);
        }
    });
}

/* Distance filter: 10+ */
function filterThree() {
    $.ajax({
        url: "/projects/stars-app/server.php",
        type: "POST",
        data: "star_distance_three=" + $('.star_distance_three').val(),
        dataType: "json",
        success: function (response, status, http) {
            console.log(response);
            var new_suggestions = '';
            $.each (response, function(index, item) {
                new_suggestions = new_suggestions + "<div id='starItem'>Name: " + item.name + "<br/>";
                new_suggestions = new_suggestions + "Distance: " + item.distance + "<br/>";
                new_suggestions = new_suggestions + "Constellaton: " + item.constellation + "<br/>";
                new_suggestions = new_suggestions + "</div>";
            });
            $('#suggestion_box').html(new_suggestions);
        },
        error: function (http, status, error) {
            alert("Error: " + error);
        }
    });
}

/* Constellation selector */
function ddConstellation() {
    $.ajax({
        url: "/projects/stars-app/server.php",
        type: "POST",
        data: "dd=" + $('.dd').val(),
        dataType: "json",
        success: function (response, status, http) {
            console.log(response);
            var new_suggestions = '';
            $.each (response, function(index, item) {
                new_suggestions = new_suggestions + "<div id='starItem'>Name: " + item.name + "<br/>";
                new_suggestions = new_suggestions + "Distance: " + item.distance + "<br/>";
                new_suggestions = new_suggestions + "Constellaton: " + item.constellation + "<br/>";
                new_suggestions = new_suggestions + "</div>";
            });
            $('#suggestion_box').html(new_suggestions);
        },
        error: function (http, status, error) {
            alert("Error: " + error);
        }
    });
}
