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
                results = results + "<div id='starItem'>Name: " + item.name + "<br/>";
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
                results = results + "<div id='starItem'>Name: " + item.name + "<br/>";
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
                results = results + "<div id='starItem'>Name: " + item.name + "<br/>";
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
                results = results + "<div id='starItem'>Name: " + item.name + "<br/>";
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
                results = results + "<div id='starItem'>Name: " + item.name + "<br/>";
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
