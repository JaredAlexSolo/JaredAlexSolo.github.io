function loadName() {
  var studentScores;
  var studentName;
  var names = [];
  var scores = [];

  while ( studentName = window.prompt(
    "Student's name Cancel to Exit", John))  {
    names.push(studentName);
    studentScores = window.prompt( "Value of x", 0 );
    studentScores = parseInt(studentScores);
    scores.push(studentScores);
  }


  document.getElementById('name').innerHTML = names;
  document.getElementById('score').innerHTML = scores;
}
