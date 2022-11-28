//════════════════════════════// 
 //If you want to recode, reupload 
 //or copy the codes/script, 
 //pls give credit 
 //no credit? i will take action immediately 
 //© 2022 Xeon Bot Inc. Cheems Bot MD 
 //Thank you to Lord Buddha, Family and Myself 
 //════════════════════════════// 
 //recode kar ke youtube pe upload kar rhe ya 
 //codes copy kar ke apne script me dal rhe 
 //hai to, description me xeon ka yt channel 
 // ka link paste kr dena as a cradit or github  
 //repo me bhi tag kardena baki jo 
 //bhi karna hai apki marzi, thank you!🦄 
 //════════════════════════════// 
 //If you recode and uploading on your channel 
 //or copy pasting the codes in ur script,  
 //i give permission to do as long as you 
 //put Xeons youtube channel link in the video 
 //description and tag me on githuh repo,  
 //thank you🦄 
 //════════════════════════════// 
  
 const fetch = require('node-fetch') 
 const { JSDOM } = require('jsdom') 
 const path = require('path') 
 const util = require('util') 
 const moment = require('moment-timezone') 
 const time = moment().format('DD/MM HH:mm:ss') 
 const { color, bgcolor } = require('./color') 
 const { Readable, Writable } = require('stream') 
  
 const ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/ 
  
 function INFOLOG(info) { 
     return console.log('\x1b[1;34m~\x1b[1;37m>>', '[\x1b[1;33mINF\x1b[1;37m]', time, color(info)) 
 } 
  
 function post(url, formdata) { 
     INFOLOG(Object.keys(formdata).map(key => `${key}=${encodeURIComponent(formdata[key])}`).join('&')) 
     return fetch(url, { 
         method: 'POST', 
         headers: { 
             accept: "*/*", 
             'accept-language': "en-US,en;q=0.9", 
             'content-type': "application/x-www-form-urlencoded; charset=UTF-8" 
         }, 
         body: Object.keys(formdata).map(key => `${key}=${encodeURIComponent(formdata[key])}`).join('&') 
     }) 
 } 
  
 function ytv(url) { 
     return new Promise((resolve, reject) => { 
         if (ytIdRegex.test(url)) { 
             let ytId = ytIdRegex.exec(url) 
             url = 'https://youtu.be/' + ytId[1] 
             post('https://www.y2mate.com/mates/en60/analyze/ajax', { 
                 url, 
                 q_auto: 0, 
                 ajax: 1 
             }) 
                 .then(res => res.json()) 
                 .then(res => { 
                     INFOLOG('Scraping...') 
                     document = (new JSDOM(res.result)).window.document 
                     yaha = document.querySelectorAll('td') 
                     filesize = yaha[yaha.length - 23].innerHTML 
                     id = /var k__id = "(.*?)"/.exec(document.body.innerHTML) || ['', ''] 
                     thumb = document.querySelector('img').src 
                     title = document.querySelector('b').innerHTML 
  
                     post('https://www.y2mate.com/mates/en60/convert', { 
                         type: 'youtube', 
                         _id: id[1], 
                         v_id: ytId[1], 
                         ajax: '1', 
                         token: '', 
                         ftype: 'mp4', 
                         fquality: 360 
                     }) 
                         .then(res => res.json()) 
                         .then(res => { 
                             let KB = parseFloat(filesize) * (1000 * /MB$/.test(filesize)) 
                             resolve({ 
                                 dl_link: /<a.+?href="(.+?)"/.exec(res.result)[1], 
                                 thumb, 
                                 title, 
                                 filesizeF: filesize, 
                                 filesize: KB 
                             }) 
                         }).catch(reject) 
                 }).catch(reject) 
         } else reject('URL INVALID') 
     }) 
 } 
  
 function yta(url) { 
     return new Promise((resolve, reject) => { 
         if (ytIdRegex.test(url)) { 
             let ytId = ytIdRegex.exec(url) 
             url = 'https://youtu.be/' + ytId[1] 
             post('https://www.y2mate.com/mates/en60/analyze/ajax', { 
                 url, 
                 q_auto: 0, 
                 ajax: 1 
             }) 
                 .then(res => res.json()) 
                 .then(res => { 
                     let document = (new JSDOM(res.result)).window.document 
                     let type = document.querySelectorAll('td') 
                     let filesize = type[type.length - 10].innerHTML 
                     let id = /var k__id = "(.*?)"/.exec(document.body.innerHTML) || ['', ''] 
                     let thumb = document.querySelector('img').src 
                     let title = document.querySelector('b').innerHTML 
  
                     post('https://www.y2mate.com/mates/en60/convert', { 
                         type: 'youtube', 
                         _id: id[1], 
                         v_id: ytId[1], 
                         ajax: '1', 
                         token: '', 
                         ftype: 'mp3', 
                         fquality: 128 
                     }) 
                         .then(res => res.json()) 
                         .then(res => { 
                             let KB = parseFloat(filesize) * (1000 * /MB$/.test(filesize)) 
                             resolve({ 
                                 dl_link: /<a.+?href="(.+?)"/.exec(res.result)[1], 
                                 thumb, 
                                 title, 
                                 filesizeF: filesize, 
                                 filesize: KB 
                             }) 
                         }).catch(reject) 
                 }).catch(reject) 
         } else reject('URL INVALID') 
     }) 
 } 
  
 async function ytsr(query) { 
     let link = /youtube\.com\/results\?search_query=/.test(query) ? query : ('https://youtube.com/results?search_query=' + encodeURIComponent(query)) 
     let res = await fetch(link) 
     let html = await res.text() 
     let data = new Function('return ' + /var ytInitialData = (.+)/.exec(html)[1])() 
     let lists = data.contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents[0].itemSectionRenderer.contents 
     let formatList = { 
         query, 
         link, 
         items: [] 
     } 
     for (let list of lists) { 
         let type = { 
             videoRenderer: 'video', 
             shelfRenderer: 'playlist', 
             radioRenderer: 'live', 
             channelRenderer: 'channel', 
             showingResultsForRenderer: 'typo', 
             horizontalCardListRenderer: 'suggestionCard', 
         }[Object.keys(list)[0]] || '' 
         let content = list[Object.keys(list)[0]] || {} 
         if (content) { 
             switch (type) { 
                 case 'typo': 
                     formatList.correctQuery = content.correctedQuery.runs[0].text 
                     break 
                 case 'video': 
                     formatList.items.push({ 
                         type, 
                         title: content.title.runs[0].text.replace('â€’', '‒'), 
                         views: content.viewCountText.simpleText, 
                         description: content.descriptionSnippet ? content.descriptionSnippet.runs[0].text.replace('Â ...', ' ...') : '', 
                         duration: content.lengthText ? [content.lengthText.simpleText, content.lengthText.accessibility.accessibilityData.label] : ['', ''], 
                         thumbnail: content.thumbnail.thumbnails, 
                         link: 'https://youtu.be/' + content.videoId, 
                         videoId: content.videoId, 
                         author: { 
                             name: content.ownerText.runs[0].text, 
                             link: content.ownerText.runs[0].navigationEndpoint.commandMetadata.webCommandMetadata.url, 
                             thumbnail: content.channelThumbnailWithLinkRenderer ? content.channelThumbnailWithLinkRenderer.thumbnail.thumbnails : [], 
                             verified: content.ownerBadges && /BADGE_STYLE_TYPE_VERIFIED/.test(content.ownerBadges[0].metadataBadgeRenderer.style) ? /BADGE_STYLE_TYPE_VERIFIED_ARTIST/.test(content.ownerBadges[0].metadataBadgeRenderer.style) ? 'artist' : true : false 
                         } 
                     }) 
                     break 
                 case 'channel': 
                     formatList.items.push({ 
                         type, 
                         title: content.title ? content.title.simpleText.replace('â€’', '‒') : '', 
                         description: content.descriptionSnippet ? content.descriptionSnippet.runs[0].text.replace('Â ...', ' ...') : '', 
                         videoCount: content.videoCountText ? content.videoCountText.runs[0].text : '', 
                         thumbnail: content.thumbnail.thumbnails, 
                         subscriberCount: content.subscriberCountText ? content.subscriberCountText.simpleText.replace('Â ', ' ') : '', 
                         link: 'https://youtube.com' + content.navigationEndpoint.commandMetadata.webCommandMetadata.url, 
                         verified: content.ownerBadges && /BADGE_STYLE_TYPE_VERIFIED/.test(content.ownerBadges[0].metadataBadgeRenderer.style) ? /BADGE_STYLE_TYPE_VERIFIED_ARTIST/.test(content.ownerBadges[0].metadataBadgeRenderer.style) ? 'artist' : true : false 
                     }) 
                     break 
                 case 'playlist': 
                     formatList.items.push({ 
                         type, 
                         title: content.title.simpleText.replace('â€’', '‒'), 
                     }) 
                     break 
             } 
         } 
     } 
     return formatList 
 } 
  
 function baseURI(buffer = Buffer.from([]), metatype = 'text/plain') { 
     return `data:${metatype};base64,${buffer.toString('base64')}` 
 } 
  
 /** 
  * Writable Stream Callback 
  * @callback WritableStreamCallback 
  * @param {WritableStream} stream  
  */ 
  
 /** 
  * Convert Writable Stream to Buffer 
  * @param {WritableStreamCallback} cb Callback with stream 
  * @returns {Promise<Buffer>} 
  */ 
 function stream2Buffer(cb = noop) { 
     return new Promise(resolve => { 
         let write = new Writable() 
         write.data = [] 
         write.write = function (chunk) { 
             this.data.push(chunk) 
         } 
         write.on('finish', function () { 
             resolve(Buffer.concat(this.data)) 
         }) 
  
         cb(write) 
     }) 
 } 
  
 /** 
  * Convert Buffer to Readable Stream 
  * @param {Buffer} buffer 
  * @returns {ReadableStream} 
  */ 
 function buffer2Stream(buffer) { 
     return new Readable({ 
         read() { 
             this.push(buffer) 
             this.push(null) 
         } 
     }) 
 } 
  
 /** 
  * No Operation 
  *  */ 
 function noop() { } 
  
 module.exports.baseURI = baseURI 
 module.exports.ytsr = ytsr 
 module.exports.yta = yta 
 module.exports.ytv = ytv 
 module.exports.buffer2Stream = buffer2Stream 
 module.exports.stream2Buffer = stream2Buffer 
 module.exports.noop = noop