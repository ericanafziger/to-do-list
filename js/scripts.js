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
    $(".tasks .form-group").append("<input type='checkbox' id='checkboxid' name='list' value='"+ taskInput + "'> " + userTasks.taskInput + ", " + userTasks.deadlineInput + "<br>");

    $(".tasks .form-group").click(function(){

      function deleteCheckBox(){

        if (document.getElementById('checkboxid').checked){
           $("#checkboxid").remove();
        }
      }
  });
console.log(document.getElementById('checkboxid').checked);

      // $("input:checkbox[name=list]:checked").each(function(){
      //   var checkedTask = document.getElementsByClassName('chk');
      //   if (input.checked) {
      //     box.parentNode.removeChild(box);
      //     txt.parentNode.removeChild(txt);
      //   }
      //   console.log(checkedTask);
      //   // $('.tasks .form-group').remove(checkedTask);
      // });

    resetFields();
  });

});
