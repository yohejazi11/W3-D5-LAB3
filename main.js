const red=document.getElementById('stopLight');
const yello=document.getElementById('slowLight');
const green=document.getElementById('goLight');

function signalControl(id){

    if(id==='stopButton'){
        red.style.backgroundColor="red";
        yello.style.backgroundColor="#111";
        green.style.backgroundColor="#111";

    }else if(id==='slowButton'){
        red.style.backgroundColor="#111";
        yello.style.backgroundColor="orange";
        green.style.backgroundColor="#111";

    }else if(id==='goButton'){
        red.style.backgroundColor="#111";
        yello.style.backgroundColor="#111";
        green.style.backgroundColor="green";
    }

}