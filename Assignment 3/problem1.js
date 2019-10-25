function loadName() {
  var studentScores= 0;
  var studentName = "";
  var names = [];
  var scores = [];

  while ( studentName = window.prompt("Student's name Cancel to Exit", John))  {
    names.push(studentName);
  }
  document.getElementById('name').innerHTML = names;
  
}
