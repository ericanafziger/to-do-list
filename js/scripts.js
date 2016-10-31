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
    var testVar = ("<div>" +"<input type='checkbox' id='checkboxid' name='list' value='"+ taskInput + "'> " + userTasks.taskInput + ", " + userTasks.deadlineInput + "<br>" + "</div>")
    $(".tasks .form-group").append(testVar);

// prop("checked", true);
//
// removeAttr();

    $(".tasks button").click(function(){
      $("input:checkbox[name=list]:checked").each(function(){

           $(".tasks input:checkbox[name=list]:checked").parent().remove();
         });

  });

  // var testVar = ("<input type='checkbox' id='checkboxid' name='list' value='"+ taskInput + "'> " + userTasks.taskInput + ", " + userTasks.deadlineInput + "<br>")
  // $(".tasks .form-group").append(testVar);

  //
  // $(".tasks button").click(function deleteIt(){
  //     $("input:checkbox[name=list]:checked").each(function(){
  //     var listItem = document.getElementsByValue(taskInput); // get the checkbox
  //     listItem.remove();
  //
  //     }
  // });



// console.log(document.getElementById('checkboxid').checked);

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
