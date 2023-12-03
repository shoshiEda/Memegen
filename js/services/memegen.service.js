'use strict'

const STORAGE_KEY = 'imgDB'
var gImgs = []
var gMeme = {
 selectedImgId: 0,
 selectedLineIdx: 0,
 emojiSize:30,
 emoji:'',
 lines: [
 {
 txt: '',
 size: 30,
 color: 'white',
 align: 'center'
 }
 ]
}
var gKeywordSearchCount = ['Baby','Animal','Dog','Cat','Politision','TV','Cartoon']
var gFilterBy=''



gImgs = [
{id: 1, url: 'img/1.jpg', keywords: ['funny', 'men','politision']},
{id: 2, url: 'img/2.jpg', keywords: ['animal', 'dog']},
{id: 3, url: 'img/3.jpg', keywords: ['animal', 'dog','baby']},
{id: 4, url: 'img/4.jpg', keywords: ['animal', 'cat']},
{id: 5, url: 'img/5.jpg', keywords: ['baby']},
{id: 6, url: 'img/6.jpg', keywords: ['men']},
{id: 7, url: 'img/7.jpg', keywords: ['baby']},
{id: 8, url: 'img/8.jpg', keywords: ['men','tv']},
{id: 9, url: 'img/9.jpg', keywords: ['funny', 'baby']},
{id: 10, url: 'img/10.jpg', keywords: ['men','politision']},
{id: 11, url: 'img/11.jpg', keywords: ['men']},
{id: 12, url: 'img/12.jpg', keywords: ['men','tv']},
{id: 13, url: 'img/13.jpg', keywords: ['men','tv']},
{id: 14, url: 'img/14.jpg', keywords: ['men','tv']},
{id: 15, url: 'img/15.jpg', keywords: ['men','tv']},
{id: 16, url: 'img/16.jpg', keywords: ['men','tv']},
{id: 17, url: 'img/17.jpg', keywords: ['men','politision']},
{id: 18, url: 'img/18.jpg', keywords: ['cartoon']},
]


function getImges(){

    var imges = gImgs
    if(gFilterBy)
    imges = gImgs.filter(img =>
        img.keywords.includes(gFilterBy))
        return imges
    }

function getImg(num)
{
    const images=getImges()
    return images[num].url
}

function createNewLine(){
   const newLine={txt:'',color:'white',size:30,align:'center'}
    gMeme.lines.push(newLine)
}

function initgMeme(){
    gMeme.lines=[]
    createNewLine()
    gMeme.selectedLineIdx= 0
    gMeme.emojiSize=30
    gMeme.emoji=''
}


function setImgFilter(filterBy){
    if (filterBy !== undefined) gFilterBy = filterBy
    return gFilterBy
}