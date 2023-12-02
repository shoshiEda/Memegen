'use strict'

let gElCanvas
let gCtx
let gCurrShape = 'line'
const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']




function renderDrawing(elbtn){

    const elSection=document.querySelector('.main')
    elSection.classList.add('hide')
    const elNewSection=document.querySelector('.tool-bar')
    elNewSection.classList.remove('hide')

    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    gElCanvas.classList.remove('hide')

    
    gCtx.drawImage(elbtn, 0, 0, gElCanvas.width, gElCanvas.height)
    console.log(elbtn)
    gMeme.selectedImgId=elbtn.classList[0][3]
   
    const elToolBar=document.querySelector('.tool-bar')
    elToolBar.style.width=gElCanvas.width+'px;'
    elToolBar.style.height=gElCanvas.height+'px;'
    //console.log(gElCanvas.width+'px;')
    drawRect(20, 20, 360, 40)
}

function downloadCanvas(elLink) {
   // console.log(elLink)
    const dataUrl = 'galery/1.jpg'
    //gElCanvas.toDataURL()

    elLink.href = dataUrl
    // Set a name for the downloaded file
    elLink.download = 'my-img'
}

function addListeners() {
    addMouseListeners()
    addTouchListeners()
    //Listen for resize ev
    window.addEventListener('resize', () => {
        resizeCanvas()
        //Calc the center of the canvas
        const center = { x: gElCanvas.width / 2, y: gElCanvas.height / 2 }
        //Create the circle in the center
        createCircle(center)
        renderCanvas()
    })
}

function addMouseListeners() {
    gElCanvas.addEventListener('mousedown', onDown)
    gElCanvas.addEventListener('mousemove', onMove)
    gElCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
    gElCanvas.addEventListener('touchstart', onDown)
    gElCanvas.addEventListener('touchmove', onMove)
    gElCanvas.addEventListener('touchend', onUp)
}

function onDown(ev) {
    // console.log('onDown')
    // Get the ev pos from mouse or touch
    const pos = getEvPos(ev)
    // console.log('pos', pos)
    if (!isCircleClicked(pos)) return

    setCircleDrag(true)
    //Save the pos we start from
    gStartPos = pos
    document.body.style.cursor = 'grabbing'
}

function onMove(ev) {
    const { isDrag } = getCircle()
    if (!isDrag) return
    console.log('Moving the circle')

    const pos = getEvPos(ev)
    // Calc the delta, the diff we moved
    const dx = pos.x - gStartPos.x
    const dy = pos.y - gStartPos.y
    moveCircle(dx, dy)
    // Save the last pos, we remember where we`ve been and move accordingly
    gStartPos = pos
    // The canvas is render again after every move
    renderCanvas()
}

function onUp() {
    // console.log('onUp')
    setCircleDrag(false)
    document.body.style.cursor = 'grab'
}