function loadName() {
  var x = prompt("Yeet","Yeee");
  var names = [];
  var scores = [];

  while ( x = window.prompt( "Value of x", 0 ) )  {
    names.push(parseInt(x));
  }
  document.getElementById('paragraph').innerHTML = names;
}
