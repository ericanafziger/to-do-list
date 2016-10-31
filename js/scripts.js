var taskObject = function(task, deadline, priority) {
  this.taskInput = task;
  this.deadlineInput = deadline;
  this.priorityInput = priority;
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
    var priorityInput = $("#priority").val();

    var userTasks = new taskObject(taskInput, deadlineInput);
    var testVar = ("<div>" +"<input type='checkbox' id='checkboxid' name='list' value='"+ taskInput + "'> " + userTasks.taskInput + " by " + userTasks.deadlineInput + "<br>" + "</div>")
    console.log(priorityInput);
    if (priorityInput === "low") {
    $("#low").append(testVar);
    $("#low").show();
  } else if (priorityInput === "medium"){
    $("#medium").append(testVar);
    $("#medium").show();
  } else if (priorityInput === "high"){
    $("#high").append(testVar);
    $("#high").show();
  }
  // $(".tasks").show();

    $(".tasks button").click(function(){
      $("input:checkbox[name=list]:checked").each(function(){
        $(this).parent().remove();
      });
    });

    resetFields();
  });
});
