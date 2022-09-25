var slider = document.getElementById('slider');
var selector= document.getElementById('selector');
var progressBar = document.getElementById('progressBar');
var slider2 = document.getElementById('slider2');
var selector2= document.getElementById('selector2');
var progressBar2 = document.getElementById('progressBar2');

slider.oninput = function(){
    selector.style.left = this.value + '%'
    progressBar.style.width = this.value + '%'    
}
slider2.oninput = function(){
    selector2.style.left = this.value + '%'
    progressBar2.style.width = this.value + '%'    
}