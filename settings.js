//════════════════════════════//
//If you want to recode, reupload
//or copy the codes/script,
//pls give credit
//no credit? i will take action immediately
//© 2022 Xeon Bot Inc. Cheems Bot MD
//Thank you to Lord Buddha, Family and Myself
//════════════════════════════//
//recode kar ke youtube pe upload kar rhe hai ya
//codes copy kar ke apne script me dal rhe
//hai to, description me xeon ka yt channel
// ka link paste kr dena as a cradit or github 
//repo me bhi tag kardena baki jo
//bhi karna hai apki marzi, thank you!🦄
//════════════════════════════//
//If you recode and uploading on your channel
//or copy pasting the codes in ur script, 
//i give permission to do as long as you
//put Xeons youtube channel link in the video
//description and tag me on githuh repo, 
//thank you🦄
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'your key',
}


//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = true //auto reading in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

//semt menu variants
global.vidmenu = fs.readFileSync("./XeonMedia/theme/Cheems-bot.mp4") //gif and video menu

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//image njim
global.wan = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')
global.tu = fs.readFileSync('./XeonMedia/theme/cheemspic2.jpg')
global.tri = fs.readFileSync('./XeonMedia/theme/cheemspic3.jpg')
global.fo = fs.readFileSync('./XeonMedia/theme/cheemspic4.jpg')
global.faif = fs.readFileSync('./XeonMedia/theme/cheemspic5.jpg')
global.sik = fs.readFileSync('./XeonMedia/theme/cheemspic6.jpg')
global.seven = fs.readFileSync('./XeonMedia/theme/cheemspic7.jpg')
global.egh = fs.readFileSync('./XeonMedia/theme/cheemspic8.jpg')
global.nen = fs.readFileSync('./XeonMedia/theme/cheemspic9.jpg')
global.ten = fs.readFileSync('./XeonMedia/theme/cheemspic10.jpg')
global.elepen = fs.readFileSync('./XeonMedia/theme/cheemspic11.jpg')
global.welep = fs.readFileSync('./XeonMedia/theme/cheemspic12.jpg')
global.terten = fs.readFileSync('./XeonMedia/theme/cheemspic13.jpg')
global.foten = fs.readFileSync('./XeonMedia/theme/cheemspic14.jpg')
global.faiften = fs.readFileSync('./XeonMedia/theme/cheemspic15.jpg')
global.sikten = fs.readFileSync('./XeonMedia/theme/cheemspic16.jpg')

//owmner v card
global.vcardowner = ['447404876730'] //ur owner number
global.ownername = "Kenneth Lai" //ur owner name
global.ytname = "YT: JASJOES" //ur yt chanel name
global.socialm = "GitHub: kennethlai666" //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//bot bomdy 
global.owner = ['447404876730']
global.ownertag = '6287785750311' //ur tag number
global.botname = 'Kenneth ID' //ur bot name
global.linkz = "https://chat.whatsapp.com/J1S3g1fbWSS9r01UNSBLst" //your theme url which will be displayed on whatsapp
global.websitex = "https://youtu.be/ydBAmKT7f4s" //ur website to be displayed
global.botscript = 'https://github.com/kennethlai666/CheemsBot-MD4' //script link
global.reactmoji = "😘" //ur menu react emoji
global.themeemoji = "🪀" //ur theme emoji
global.packname = "Sara(H) • Viloid" //ur sticker watermark packname
global.author = "Kenneth Morris" //ur sticker watermark author

//Bot theme media
global.thum = fs.readFileSync("./XeonMedia/theme/thumbnail/kennethid.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/thumbnail/kennethid.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/thumbnail/kennethid.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/thumbnail/kennethid.jpg") //ur thumb pic

//damtabase
global.premium = ['6285773496010'] //ur premium numbers
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = ['6285747219408']
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []

//omther
global.fgclink = { 
            "key": { 
                "fromMe": true, 
                "participant": "0@s.whatsapp.net", 
                "remoteJid": "0@s.whatsapp.net" 
            }, 
            "message": { 
                "groupInviteMessage": { 
                    "groupJid": "6285736178354-1625305606@g.us", 
                    "inviteCode": "null", 
                    "groupName": "Kawan Elaina",  
                    "caption": "njir",  
                    'jpegThumbnail': fs.readFileSync('./XeonMedia/theme/cheemspic.jpg') 
                } 
            } 
        }
                global.adReply = { 
                         contextInfo: { 
                                 forwardingScore: 9999, 
                                 isForwarded: false, // ini biar ada tulisannya diteruskan berkali-kali, jika ingin di hilangkan ganti true menjadi false 
                                 externalAdReply: { // Bagian ini sesuka kalian berkreasi :'v 
                     showAdAttribution: true, 
                                         title: global.ucapan, 
                                         body: "Click To Donate", 
                                         mediaUrl: "anjing", 
                                         description: 'Elaina-MultiDevice', 
                                         previewType: "PHOTO", 
                                         thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'), 
                                         sourceUrl: "https://github.com/ImYanXiao",                                         
                                 } 
                         } 
                 }
global.sessionName = 'session'
global.antitags = true
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    cmmnd:  '_perlu mengaktifkan *.allcmd* untuk menggunakan fitur ini_',
    success: 'Done ✓',
    admin: 'This Feature Is Only For Admin!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'This Feature Is Only For Owner!',
    group: 'Fitur ini khusus grup!\n\nSewa Bot Mulai Dari 5K - 10K Perbulan\n_*Contact Owner*_:\nhttp://wa.me/6285842965801/?text=Aku+mau+sewa+bot',
    private: 'Features Used Only For Private Chat!',
    bot: 'This Feature Is Only For Bot',
    wait: 'In process...',
    linkm: 'Where is the link?',
    error: 'Error!!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    ban: 'You have been banned by the owner, if you want to be unbanned, chat owner.',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
    banChat: 'The bot was banned in this group, please contact the owner to unban'
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})