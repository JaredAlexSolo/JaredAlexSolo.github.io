function loadName() {
  var minScore=0;
  var maxScore=10;
  var names = [];
  var scores = [];
  var total = 0;

  while ( x = window.prompt( "Student's name Cancel to Exit", 0 ) ) {
    names.push(x);
    do{
      y = window.prompt( "Student score(between "+minScore+" and "+maxScore+")", 0 );
    }while(isNaN(y) || y > 10 || y < 0);
    scores.push(parseInt(y));
  }
  
        document.getElementById('p1').innerHTML = names;
        document.getElementById('p2').innerHTML = scores;
        document.getElementById('p3').innerHTML = names.length +" students received a total score of "+ total+")";
}
