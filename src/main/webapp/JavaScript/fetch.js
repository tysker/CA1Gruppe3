var userID = document.getElementById("number");
const urlSingle = "https://jsonplaceholder.typicode.com/users/";
const urlAll = "https://jsonplaceholder.typicode.com/users";

function getUser() {
    fetch(urlSingle + userID.value)
            .then(res => res.json())
            .then(data => {
                var all = "<p>" + "Name: " + data.name + "</p>";
                all += "<p>" + "Phone: " + data.phone + "</p>" + "<br/>";
                all += "<b>" + "Address" + "</b>";
                
                all += "<p>" + "Street: " + data.address.street + "</p>";
                all += "<p>" + "Suite: " + data.address.suite + "</p>";
                all += "<p>" + "City: " + data.address.city + "</p>";
                all += "<p>" + "Zipcode: " + data.address.zipcode + "</p>";
                all += "<p>" + "Geo (lat, long): " + data.address.geo.lat + ", " + data.address.geo.lng + "</p>";
                
                document.getElementById('content').innerHTML = all;
            });
}

function getAllUsers() {
    fetch(urlAll)
            .then(res => res.json())
            .then(data => {
                var users = "";
                users += "<table>";
                users += "<tr>";
                users += "<th>Name</th>";
                users += "<th>Phone</th>";
                users += "</tr>";
                data.forEach(function (key) {
                    users += "<tr>";
                    users += "<td>" + key.name + "</td>";
                    users += "<td>" + key.phone + "</td>";
                    users += "</tr>";
                });
                users += "</table>";
                document.getElementById("content").innerHTML = users;

            });
}