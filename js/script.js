//business logic for List
function List() {
  this.what = []
}

function Check() {
  var checkBox = document.Done("myCheck");
  var text = document.Done("text");

  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
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
    var objective = $('#location').val()
    var myTopics = new Topics(objective);
    $("#location").val(" ");
    myList.what.push(myTopics);
    myList.listAll();
    $(".place").click(function(){
    })
    })

  });
