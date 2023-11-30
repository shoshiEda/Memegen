'use strict'

let gElCanvas
let gCtx
let gCurrShape = 'line'



function renderDrawing(elbtn){

    const elSection=document.querySelector('.main')
    elSection.classList.add('hide')
    const elNewSection=document.querySelector('.draw')
    elNewSection.classList.remove('hide')

    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')

    
    gCtx.drawImage(elbtn, 0, 0, gElCanvas.width, gElCanvas.height)
   
    const elToolBar=document.querySelector('.tool-bar')
    elToolBar.style.width=gElCanvas.width+'px;'
    elToolBar.style.height=gElCanvas.height+'px;'
    console.log(gElCanvas.width+'px;')
}

function downloadCanvas(elLink) {
    console.log(elLink)
    const dataUrl = 'galery/1.jpg'
    //gElCanvas.toDataURL()

    elLink.href = dataUrl
    // Set a name for the downloaded file
    elLink.download = 'my-img'
}
