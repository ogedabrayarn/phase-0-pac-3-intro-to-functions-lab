function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log(string.toUpperCase());
}
logShout("Hello");

function logWhisper(string) {
    console.log(string.toLowerCase());
}
logWhisper("HELLO");

function sayHiToHeadphonedRoommate(string) {
    if(string.toLowerCase){
        return `I can\'t hear you!`;
    }
    else if(string.toUpperCase) {
        // console.log(`I can\t hear you`);
        return `YES INDEED!`;
    }
}