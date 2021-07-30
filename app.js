
function action(){
    window.alert('Hi, how are you?');
}


function addHandlers(){
    document.getElementById('button1').addEventListener('click', action);
}

window.addEventListener('load', addHandlers);