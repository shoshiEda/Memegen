'use strict'


function onInit(){
    const elSection=document.querySelector('.tool-bar')
    elSection.classList.add('hide')
   const elCanvas=document.querySelector('canvas')
    elCanvas.classList.add('hide')
    const elGalery=document.querySelector('.saved')
    elGalery.classList.add('hide')
    const elMain=document.querySelector('.main')
    elMain.classList.remove('hide')
    const elAbout=document.querySelector('.about')
    elAbout.classList.remove('hide')

    //addListeners()
    initgMeme()
    renderFilter()
    renderImges()
    
}

function onGalery(){
    const elSection=document.querySelector('.tool-bar')
    elSection.classList.add('hide')
   const elCanvas=document.querySelector('canvas')
    elCanvas.classList.add('hide')
    const elMain=document.querySelector('.main')
    elMain.classList.add('hide')
    const elAbout=document.querySelector('.about')
    elAbout.classList.add('hide')
    const elSaved=document.querySelector('.saved')
    elSaved.classList.remove('hide')
    
}

function renderImges()
{
   var images=getImges()
    var strHtml=''
    images.map((img) => {
        if (img) 
     strHtml += `<img class="img${img.id}" onclick="renderDrawing(this)" src="${img.url}">`
    })
     var elimges=document.querySelector('.images')
     elimges.innerHTML=strHtml
}

function onSetFilterBySelect() { 
    gFilterBy = document.querySelector('.filter-by select').value 
    renderImges()
}

function onSetFilterBy(filterBy) { 
    console.log(filterBy)
    filterBy = setImgFilter(filterBy)
    renderImges()
}



function toggleMenu() {
    document.body.classList.toggle('menu-open')
}

function onAbout(){
    const elSection=document.querySelector('.tool-bar')
    elSection.classList.add('hide')
   const elCanvas=document.querySelector('canvas')
    elCanvas.classList.add('hide')
    const elGalery=document.querySelector('.saved')
    elGalery.classList.add('hide')
    const elMain=document.querySelector('.main')
    elMain.classList.add('hide')
    const elAbout=document.querySelector('.about')
    elAbout.classList.remove('hide')
}


function renderFilter(){
    const elFilter=document.querySelector('.filter-by select')
    var strHtml=`<option value>Select Filtering</option>/n
    <option value="">All</option>`
    gKeywordSearchCount.map((catagory) => {
        if (catagory) 
            strHtml+=`<option value="${catagory}">${catagory}</option>`
        }
    )
        elFilter.innerHTML=strHtml
}

function downloadToDevice(elLink){
    const imgContent = gElCanvas.toDataURL('image/jpeg') 
    elLink.href = imgContent
}

function SaveHere(){
   
    updateSavedImg()
}
