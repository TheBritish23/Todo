//business logic for List
function List() {
  this.what = []
}

List.prototype.listAll = function() {
  $("#output").empty();
  this.what.forEach(function(place){
    $("#output").append(place.getTopics());
  })
}


//user interface logic for Topics
$(document).ready(function() {
  $("form#next").submit(function(event) {
    event.preventDefault()
