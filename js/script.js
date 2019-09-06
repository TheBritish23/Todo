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
function Topics(objective){
 this.objective = objective;
}

Topics.prototype.getTopics = function() {
  return "<div class='card'><div class='topics'>" + this.objective + "</div>";
}


//user interface logic for Todo
$(document).ready(function() {
  var myList = new List();
  $("form#next").submit(function(event) {
    event.preventDefault()
    var objective = $('#location').val()
    var myTopics = new Topics(objective);
    $("#location").val(" ");
    myList.what.push(myTopics);
    myList.listAll();
      $(".topics").click(function() {
        $(this).toggleClass("strikethrough")
      })
    })
  });
