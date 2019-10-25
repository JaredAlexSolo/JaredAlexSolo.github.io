function loadName() {
  var names = [];
  var scores = [];

  while ( x = window.prompt( "Value of x", 0 ) )  {
    document.getElementById('paragraph').innerHTML = "hey";
    names.push(parseInt(x));
    y = window.prompt( "Value of y", 0 );
  }
  document.getElementById('paragraph').innerHTML = scores;
}
