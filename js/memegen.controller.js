'use strict'


function onInit(){
    const elSection=document.querySelector('.tool-bar')
    elSection.classList.add('hide')
   const elCanvas=document.querySelector('canvas')
    elCanvas.classList.add('hide')
    const elGalery=document.querySelector('.galery')
    elGalery.classList.add('hide')
    const elMain=document.querySelector('.main')
    elMain.classList.remove('hide')
    //addListeners()
    initgMeme()

    renderImges()
    
}

function onGalery(){
    const elSection=document.querySelector('.tool-bar')
    elSection.classList.add('hide')
   const elCanvas=document.querySelector('canvas')
    elCanvas.classList.add('hide')
    const elMain=document.querySelector('.main')
    elMain.classList.add('hide')
    const elGalery=document.querySelector('.galery')
    elGalery.classList.remove('hide')
}

function renderImges()
{
   var images=getImges()
    var strHtml=''
    for(var i=0;i<images.length;i++)
    {
     strHtml += `<img class="img${i}" onclick="renderDrawing(this)" src="${images[i].url}">`

    }
    
     var elimges=document.querySelector('.images')
     elimges.innerHTML=strHtml
}

function onSetFilterBy() { 
    gFilterBy = document.querySelector('.filter-by select').value  
    renderImges()
}

function toggleMenu() {
    document.body.classList.toggle('menu-open')
}

