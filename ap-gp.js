function checkAp(afirst, anum, adiff){
    var afirst = parseInt(afirst);  
    var anum = parseInt(anum);
    var adiff = parseInt(adiff);

    var arithmetic = afirst + (anum - 1) * adiff

    return arithmetic;
}
function checkGp(first, num, diff){
    var first = parseInt(first);
    var num = parseInt(num);
    var diff = parseInt(diff);

    var Geometric = first * Math.pow(diff, num - 1);
    return Geometric;
}

function findAp(event){
    event.preventDefault();
    const message = document.getElementById('message1');
    try{
        message.innerText = "";

        const Ap = document.getElementById('afirst').value;
        const Np = document.getElementById('anum').value;
        const Dp = document.getElementById('adiff').value;

        if(Ap === "" || Np === "" || Dp === ""){
            throw new Error("All Input Parameters are required")
        }
        alert(checkAp(Ap, Np, Dp));
        
    }catch(err){
        message.innerText = err.message;
        console.error(err)
    }
    
}


function findGp(event){
    event.preventDefault();

    message = document.getElementById('message2');
    try {
        message.innerText = "";

        const A = document.getElementById('first').value;
        const N = document.getElementById('num').value;
        const R = document.getElementById('diff').value;

        if(A === "" || N === "" || R === ""){
            throw new Error("All Input Parameters are required")
        }
        alert(checkGp(A, N, R));

    }catch(err){
        message.innerText = err.message;
        console.error(err)
    }
}
