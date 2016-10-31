var taskObject = function(task, deadline) {
  this.taskInput = task;
  this.deadlineInput = deadline;
}

function resetFields() {
    $("input#task").val("");
    $("input#deadline").val("");
}

$(document).ready(function(){
  $("form#toDoInput").submit(function(event){
    event.preventDefault();

    var taskInput = $("input#task").val();
    var deadlineInput = $("input#deadline").val();
    var userTasks = new taskObject(taskInput, deadlineInput);
    $(".tasks .form-group").append("<input type='checkbox' name='list' value='taskInput'> " + userTasks.taskInput + ", " + userTasks.deadlineInput + "<br>");

    // $(".clickable").last().click(function(){
    //   $(".trip").show();
    //   $(".trip h2").text(place.placeYear());
    //   $(".place").text(place.placeInput);
    //   $(".year").text(year.yearInput);
    //   $(".landmark").text(landmark.landmarkInput);
    //   $(".city").text(city.cityInput);

    // });
    resetFields();
  });

});
