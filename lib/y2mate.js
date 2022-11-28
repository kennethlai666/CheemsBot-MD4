//════════════════════════════// 
 //If you want to recode, reupload 
 //or copy the codes/script, 
 //pls give credit 
 //no credit? i will take action immediately 
 //© 2022 Xeon Bot Inc. Cheems Bot MD 
 //Thank you to Lord Buddha, Family and Myself 
 //════════════════════════════// 
 //recode kar ke youtube pe upload kar rhe hai ya 
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
 let fetch = require('node-fetch') 
 let { JSDOM } = require('jsdom') 
  
 function post(url, formdata) { 
   return fetch(url, { 
     method: 'POST', 
     headers: { 
       accept: "*/*", 
       'accept-language': "en-US,en;q=0.9", 
       'content-type': "application/x-www-form-urlencoded; charset=UTF-8" 
     }, 
     body: new URLSearchParams(Object.entries(formdata)) 
   }) 
 } 
 const ytIdRegex = /(?:youtube\.com\/\S*(?:(?:\/e(?:mbed))?\/|watch\?(?:\S*?&?v\=))|youtu\.be\/)([a-zA-Z0-9_-]{6,11})/ 
  
 /** 
  * Download YouTube Video via y2mate 
  * @param {String} url YouTube Video URL 
  * @param {String} quality (avaiable: `144p`, `240p`, `360p`, `480p`, `720p`, `1080p`, `1440p`, `2160p`) 
  * @param {String} type (avaiable: `mp3`, `mp4`) 
  * @param {String} bitrate (avaiable for video: `144`, `240`, `360`, `480`, `720`, `1080`, `1440`, `2160`) 
  * (avaiable for audio: `128`) 
  * @param {String} server (avaiable: `id4`, `en60`, `en61`, `en68`) 
  */ 
 async function yt(url, quality, type, bitrate, server = 'en68') { 
   let ytId = ytIdRegex.exec(url) 
   url = 'https://youtu.be/' + ytId[1] 
   let res = await post(`https://www.y2mate.com/mates/${server}/analyze/ajax`, { 
     url, 
     q_auto: 0, 
     ajax: 1 
   }) 
   let json = await res.json()
   let { document } = (new JSDOM(json.result)).window 
   let tables = document.querySelectorAll('table') 
   let table = tables[{ mp4: 0, mp3: 1 }[type] || 0] 
   let list 
   switch (type) { 
     case 'mp4': 
       list = Object.fromEntries([...table.querySelectorAll('td > a[href="#"]')].filter(v => !/\.3gp/.test(v.innerHTML)).map(v => [v.innerHTML.match(/.*?(?=\()/)[0].trim(), v.parentElement.nextSibling.nextSibling.innerHTML])) 
       break 
     case 'mp3': 
       list = { 
         '128kbps': table.querySelector('td > a[href="#"]').parentElement.nextSibling.nextSibling.innerHTML 
       } 
       break 
     default: 
       list = {} 
   } 
   let filesize = list[quality] 
   let id = /var k__id = "(.*?)"/.exec(document.body.innerHTML) || ['', ''] 
   let thumb = document.querySelector('img').src 
   let title = document.querySelector('b').innerHTML 
   let res2 = await post(`https://www.y2mate.com/mates/${server}/convert`, { 
     type: 'youtube', 
     _id: id[1], 
     v_id: ytId[1], 
     ajax: '1', 
     token: '', 
     ftype: type, 
     fquality: bitrate 
   }) 
   let json2 = await res2.json() 
   let KB = parseFloat(filesize) * (1000 * /MB$/.test(filesize)) 
   let resUrl = /<a.+?href="(.+?)"/.exec(json2.result)[1] 
   return { 
     dl_link: resUrl.replace(/https/g, 'http'), 
     thumb, 
     title, 
     filesizeF: filesize, 
     filesize: KB 
   } 
 } 
  
 module.exports = { 
   yt, 
   ytIdRegex, 
   /** 
    * Download YouTube Video as Audio via y2mate 
    * @param {String} url YouTube Video URL 
    * @param {String} server (avaiable: `id4`, `en60`, `en61`, `en68`) 
    */ 
   yta(url, resol = '128kbps', server = 'en154') { return yt(url, resol, 'mp3', resol.endsWith('kbps') ? resol.replace(/kbps/g, '') : resol, server) }, 
   /** 
    * Download YouTube Video as Video via y2mate 
    * @param {String} url YouTube Video URL 
    * @param {String} server (avaiable: `id4`, `en60`, `en61`, `en68`) 
    */ 
   ytv(url, resol = '360p', server = 'en154') { return yt(url, resol, 'mp4', resol.endsWith('p') ? resol.replace(/p/g, '') : resol, server) }, 
   servers: ['en136', 'id4', 'en60', 'en61', 'en68'] 
 }