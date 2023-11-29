'use strict'


function onInit(){
    renderImges()
    
}


function renderImges()
{
   var images=getImges()
    var strHtml=''
    for(var i=0;i<images.length;i++)
    {
     strHtml += `<img src="${images[i].url}">`

    }
    
     var elimges=document.querySelector('.images')
     elimges.innerHTML=strHtml
}

function onSetFilterBy() { 
    gFilterBy = document.querySelector('.filter-by select').value  
    renderImges()
}

function toggleMenu() {
    document.body.classList.toggle('.menu-open')
}
