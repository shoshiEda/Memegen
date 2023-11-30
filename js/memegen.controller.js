'use strict'


function onInit(){
    const elSection=document.querySelector('.draw')
    elSection.classList.add('hide')
    renderImges()
    
}


function renderImges()
{
   var images=getImges()
    var strHtml=''
    for(var i=0;i<images.length;i++)
    {
     strHtml += `<img class="${i}" onclick="renderDrawing(this)" src="${images[i].url}">`

    }
    
     var elimges=document.querySelector('.images')
     elimges.innerHTML=strHtml
}

function onSetFilterBy() { 
    gFilterBy = document.querySelector('.filter-by select').value  
    renderImges()
}

function toggleMenu() {
    var elheader=document.querySelector('body')
    elheader.classList.add('.menu-open')
}
