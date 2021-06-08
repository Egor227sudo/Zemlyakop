window.onload = function(){
    const cursor = document.querySelector('#cursor');
    window.onmousemove = function(e){
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }
}

let freespaceW = window.innerWidth;
let freespaceH = window.innerHeight;
let body = document.body;
let row = '<div class="row">';
while(freespaceW > 0){
    row += '<div class = "hexagon"></div>';
    freespaceW -= 100;
}
row += '</div>';
while(freespaceH > 0){
    body.innerHTML += row;
    freespaceH -= 80;
}

