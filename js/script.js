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

//business logic for Topics
function Topics(){

}

Topics.prototype.getTopics = function() {
  return ""
}


//user interface logic for Todo
$(document).ready(function() {
  $("form#next").submit(function(event) {
    event.preventDefault()
    var myList = new List();
