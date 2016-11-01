var video = null;

document.addEventListener("mousedown", function(event) {
    //right click
    if (event.button == 2) {
        video = event.target;
    }
}, true);

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    switch (request) {
        case "changeSpeed100":
            video.playbackRate = 1;
            break;
        case "changeSpeed150":
            video.playbackRate = 1.5;
            break;
        case "changeSpeed200":
            video.playbackRate = 2;
            break;
        case "changeSpeedCustom":
            video.playbackRate = prompt("Choose the speed (in a percentage)") / 100;
            break;
    }
});
