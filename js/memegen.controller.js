'use strict'


function onInit(){
    renderImges()
    
}


function renderImges()
{
    var strHtml=''
    for(var i=0;i<gImgs[i];i++)
     strHtml += `<img src="/img/`$(gImgs[i].url)`.jpg">`

     var elimges=document.querySelector('.imges')
     elimges.innerHTML=strHtml
}
