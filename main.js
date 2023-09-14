'use strict';

var container = document.getElementById('container');
var globe = new DAT.Globe(container);

function resetGlobe() {
    globe.reset();
}

$(document).ready(function () {
    if(!Detector.webgl){
        Detector.addGetWebGLMessage();
    } else {
        resetGlobe();
        globe.animate();
        globe.rotation.y -= 0.002;
        requestAnimationFrame(animate);
    }
});
