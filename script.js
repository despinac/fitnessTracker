d3.csv("data.csv").then(function (data)) {
var trainings = data;
var button = d3.select("#button");
var form = d3.select("#form");
button.on("click", runEnter);
form.on("submit", runEnter);
}

function runEnter() {

d3.select("tbody").html("");

d3.event.preventDefault();

var inputValue = d3.select("#user-input").property("value");

var filteredTrainings = trainings.filter(trainings => trainings.vorname.includes(inputValue));

for (var i = 0; i < filteredTrainings.length; i++) {

d3.select("tbody").insert("tr").html(
"<td>" + (trainings[i]['nummer'])+"</td>" +
"<td>" + (trainings[i]['vorname'])+"</td>" +
"<td>" + (trainings[i]['datum'])+"</td>" +
)
}
}