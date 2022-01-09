const FirstDiv = document.querySelector('#FirstDiv');
const ourBox = document.getElementById('ourBox');

document.getElementById("darkSec").onclick = function() {
    let status = ourBox.checked;
    if(status == true){
        FirstDiv.classList.replace('lightJs','darkJs');
    }
    else{
        FirstDiv.classList.replace('darkJs','lightJs');
    }
}