'use strict'

function drawRect(x1,y1,x2,y2) {
    gCtx.beginPath()
    gCtx.lineWidth = 3

    gCtx.strokeStyle = 'grey'
    gCtx.strokeRect(x1,y1,x2,y2)
}



function onSetText(text){
    //console.log(text)
    renderImg()
    var txtHeight
    if(!gMeme.selectedLineIdx) txtHeight=40
    else if(gMeme.selectedLineIdx===1) txtHeight=360
    else txtHeight=200
    gCtx.lineWidth = 3
    gCtx.strokeStyle = gMeme.lines[gMeme.selectedLineIdx].color
    gCtx.fillStyle = gMeme.lines[gMeme.selectedLineIdx].color
    gCtx.font = `${gMeme.lines[gMeme.selectedLineIdx].size}px Arial`
    gCtx.textAlign = gMeme.lines[gMeme.selectedLineIdx].align
    gCtx.textBaseline = 'middle'
    gCtx.fillText(text, getAlign(), txtHeight)
    gCtx.strokeText(text, getAlign(),txtHeight)
    gMeme.lines[gMeme.selectedLineIdx].txt=text
    
}

function renderImg() {
    var elBtn=document.querySelector(`.img${gMeme.selectedImgId}`)
    //console.log(elBtn)
    gCtx.drawImage(elBtn, 0, 0, gElCanvas.width, gElCanvas.height)
    if(gMeme.emoji)    addImogi('',gMeme.emoji)
    drawRect(20, 20, 360, 40)
    if(gMeme.lines.length>1) drawLines()
    
}

function onDelete()
{
    var elBtn=document.querySelector(`.img${gMeme.selectedImgId}`)
    gCtx.drawImage(elBtn, 0, 0, gElCanvas.width, gElCanvas.height)
    drawRect(20, 20, 360, 40)
    gMeme.selectedLineIdx=0
    initgMeme()
}


function changeFont(op){
    if(op==='+')
    {
        gMeme.lines[gMeme.selectedLineIdx].size++
    } 
    else{
        gMeme.lines[gMeme.selectedLineIdx].size--
    } 
    var text=gMeme.lines[gMeme.selectedLineIdx].txt
    onSetText(text)
    
}

function changeAlign(num)
{
    if(num===1)   gMeme.lines[gMeme.selectedLineIdx].align='left'
    else if(!num)   gMeme.lines[gMeme.selectedLineIdx].align='center'
    else gMeme.lines[gMeme.selectedLineIdx].align='right'
    var text=gMeme.lines[gMeme.selectedLineIdx].txt
    onSetText(text)
}

function getAlign(){
    if(gMeme.lines[gMeme.selectedLineIdx].align==='center') return 200
    else if(gMeme.lines[gMeme.selectedLineIdx].align==='left') return 30
    else{return 360}
   

}

function onColor(){
    const elcolor = document.getElementById('color')
    gMeme.lines[gMeme.selectedLineIdx].color=elcolor.value
}

function changeline(){
    if(gMeme.selectedLineIdx<gMeme.lines.length)  gMeme.selectedLineIdx++
    else gMeme.selectedLineIdx=0
}


function addLine(){
    saveLine()
    if(gMeme.lines.length===1)    drawRect(20,340,360, 40)
    else drawRect(20,180,360, 40)
    gMeme.selectedLineIdx++
    createNewLine()
    
}

function saveLine(){
    renderImg()
    for(var i=0;i<gMeme.lines.length;i++)
            if(gMeme.lines[i].txt)
                onSetText(gMeme.lines[i].txt)
}

function drawLines(){
    if(gMeme.lines.length===2)    drawRect(20,340,360, 40)
    else drawRect(20,180,360, 40)
}

function addImogi(elBtn){
    gCtx.lineWidth = 2
    gCtx.font = `${gMeme.emojiSize}px Arial`
    gCtx.textBaseline = 'middle'
    if(elBtn)     
    {
        gCtx.strokeText(elBtn.innerText, getAlign(), 200)
        gMeme.emoji=elBtn.innerText
    }
    else gCtx.strokeText(gMeme.emoji, getAlign(), 200)   
}


window.addEventListener('submit', (ev) => {
    ev.preventDefault()
})

function onSubmit(ev) { 
    const elcolor = document.getElementById('color')
    gMeme.lines[gMeme.selectedLineIdx].color=elcolor.value
    onSetText(gMeme.lines[gMeme.selectedLineIdx].txt)
}
