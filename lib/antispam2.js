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

// Message Filter / Message Cooldowns
const usedkCommandRecently = new Set();

const isDifilter = (from) => {
    return !!usedkCommandRecently.has(from);
};

const tambahFilter = (from) => {
    usedkCommandRecently.add(from);
    setTimeout(() => {
        return usedkCommandRecently.delete(from);
    }, 3000);// 1.5 sec is delay before processing next command;
};
module.exports = {
    pesanFilter: {
        isDifilter,
        tambahFilter
    }};