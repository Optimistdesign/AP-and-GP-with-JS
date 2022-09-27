function checkAp(afirst, anum, adiff){
    var afirst = parseInt(afirst);  
    var anum = parseInt(anum);
    var adiff = parseInt(adiff);
    var num1 = anum - 1;
    var midiff = num1 * adiff

    var arithmetic = afirst;

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

        const Np = document.getElementById('anum').value;
        const Rp = document.getElementById('adiff').value;
        const Ap = document.getElementById('afirst').value;

        if(Np === "" || Rp === "" || Rp === ""){
            throw new Error("All Input Parameters are required")
        }
        alert(checkAp(Np, Rp, Ap));
        
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
