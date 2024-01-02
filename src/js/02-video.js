import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const themePlayTime = localStorage.getItem("videoplayer-current-time");

let playTime = 0;

player.on('timeupdate', throttle(function(play) {
   
    playTime = play.seconds;
    localStorage.setItem("videoplayer-current-time", `${playTime}`);

    if (play.duration === play.seconds) {
        localStorage.removeItem("videoplayer-current-time");
    }

}, 1000));



player.setCurrentTime(Number(themePlayTime) - 1).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});