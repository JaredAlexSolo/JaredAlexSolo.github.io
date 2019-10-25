function loadName() {
  var minScore=0;
  var maxScore=10;
  var names = [];
  var scores = [];

  while ( x = window.prompt( "Student's name Cancel to Exit", 0 ) )  {
    names.push(x);
    y = window.prompt( "Student score(between "+minScore+" and "+maxScore, 0 );
    scores.push(parseInt(y));
  }
  document.getElementById('p1').innerHTML = names;
  document.getElementById('p2').innerHTML = scores;
}
