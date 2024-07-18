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

var output = _.sortBy(filteredTrainings, ‘nummer’).reverse()

for (var i = 0; i < filteredTrainings.length; i++) {

d3.select("tbody").insert("tr").html(
"<td>" + (output[i]['nummer'])+"</td>" +
"<td>" + (output[i]['vorname'])+"</td>" +
"<td>" + (output[i]['datum'])+"</td>" +
)
}
}