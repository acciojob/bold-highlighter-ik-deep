function highlight() {
var elems = document.getElementsByTagName('strong');
  var index = 0, length = elems.length;
    for ( ; index < length; index++) {
        elems[index].style.color ="green";
    } 

}

function return_normal() {
var elems = document.getElementsByTagName('strong');
  var index = 0, length = elems.length;
    for ( ; index < length; index++) {
        elems[index].style.color ="black";
    } 
    
}
