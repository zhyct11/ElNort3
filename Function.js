// Payment Calculator
function Total(){
    var num1 = document.getElementById('price').value;
    var num2 = document.getElementById('nights').value;
    var num3 = document.getElementById('quantity').value;

    let x = num1 * num2;   
    let y = num1 * num3;
    
    document.getElementById('total').innerHTML = "₱" + (x + y);
    }

//  Table Calculator
var h = (function harmony(){
    var price = 5500
    var num1 = document.getElementById('h-data').value;

    document.getElementById('h-total').innerHTML = price * num1;
})();
var e = function elysian(){
    var price = 8500
    var num1 = document.getElementById('e-data').value;

}
var u = function utopian(){
    var price = 10000
    var num1 = document.getElementById('u-data').value;
}
var n = function nirvana(){
    var price = 12000
    var num1 = document.getElementById('n-data').value;
}
var b = function blissful(){
    var price = 14500
    var num1 = document.getElementById('b-data').value;
}
