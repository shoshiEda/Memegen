'use strict'

var gImgs = []
var gMeme = {
 selectedImgId: 5,
 selectedLineIdx: 0,
 lines: [
 {
 txt: 'I sometimes eat Falafel',
 size: 20,
 color: 'red'
 }
 ]
}
var gKeywordSearchCountMap = {'funny': 12,'cat': 16, 'baby': 2}



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