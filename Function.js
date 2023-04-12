function Total(){
    var num1 = document.getElementById('price').value;
    var num2 = document.getElementById('nights').value;
    var num3 = document.getElementById('quantity').value;

    var x = num1 * num2;   
    var y = num1 * num3;
    
    document.getElementById('total').innerHTML = x + y;
    }