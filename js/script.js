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
  $("form#next").submit(function(event) {
    event.preventDefault()
    var myList = new List();
    var objective = $('#objective').val()
    $("next").val("");
    myList.what.push(myTopics);
    myList.listAll();
    $(".place").click(function(){
    })
    })

  });
