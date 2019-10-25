function loadName() {
  var names = [];
  var scores = [];

  while ( x = window.prompt( "Student's name Cancel to Exit", 0 ) )  {
    document.getElementById('paragraph').innerHTML = "hey";
    names.push(parseInt(x));
    y = window.prompt( "Student score(between 0 and 10)", 0 );
    scores.push(y);
  }
  document.getElementById('p1').innerHTML = names.toString();
  document.getElementById('p2').innerHTML = scores;
}
