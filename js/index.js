function Calculate(c){
    a = parseInt(document.getElementById("num1").value);
    b = parseInt(document.getElementById("num2").value);

    function add(a,b){
        return a+b;
    }
    function sub(a,b){
        return a-b;
    }
    function multi(a,b){
        return a*b;
    }
    function division(a,b){
        return a/b;
    }
    function mod(a,b){
        return a%b;
    }
    function power(a,b){
        return a**b;
    }

    switch (c) {
        case "+":
            document.getElementById("print").innerHTML="Answer = " + add(a,b);
            break;
        case "-":
            document.getElementById("print").innerHTML="Answer = " + sub(a,b);
            break;
        case "*":
            document.getElementById("print").innerHTML="Answer = " + multi(a,b);
            break;
        case "/":
            document.getElementById("print").innerHTML="Answer = " + division(a,b);
            break;
        case "%":
            document.getElementById("print").innerHTML="Answer = " + mod(a,b);
            break;
        case "**":
            document.getElementById("print").innerHTML="Answer = " + power(a,b);
            break;
        case " ":
            document.getElementById("print").innerHTML=" "
            break;
    
        default:
            document.getElementById("print").innerHTML="Please Enter Valid Operator"
            break;
    }
    

}