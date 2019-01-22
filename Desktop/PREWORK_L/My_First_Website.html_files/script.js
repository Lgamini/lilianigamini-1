(function($) {
    $(window).load(function() {
        $.mCustomScrollbar.defaults.scrollButtons.enable = true; // enable scrolling buttons by default
        $.mCustomScrollbar.defaults.axis = 'y'; // enable 2 axis scrollbars by default
        $("#content-d").mCustomScrollbar({
            theme: "rounded",
        });
    });
})(jQuery);


// Main Timeline ----------------------------------------
var TL = new TimelineMax({
    repeat: 0,
    repeatDelay: 2
});

// Remove trash on init
TL.add( TweenMax.to('#wrapper', 0, {opacity: 1}) )


TL.add([
    TweenMax.to('#txt1', 0.5, { autoAlpha:0, ease:Power4.easeIn, force3D:true, delay:5.1 }),
]);

TL.add([
    TweenMax.to('#txt2', 0.5, { autoAlpha:1, ease:Power4.easeIn, force3D:true, delay:-0.5 }),
]);

TL.add([
    TweenMax.to('#bg', 0.5, { y:-90, ease:Power4.easeIn, force3D:true }),
    TweenMax.to('#txt2', 0.5, { y:-90, ease:Power4.easeIn, force3D:true }),
    TweenMax.to('#txt3', 0.5, { y:-90, autoAlpha:1, ease:Power4.easeIn, force3D:true }),
], "+=6");

TL.add([
    TweenMax.to('#txt3', 0.5, {autoAlpha:0, ease:Power4.easeIn, force3D:true, delay:2 }),
]);

TL.add([
    TweenMax.to('#txt4', 0.5, { autoAlpha:1, ease:Power2.easeInOut, force3D:true, delay:-0.2 }),
    TweenMax.to('#txt1_2', 0.5, { autoAlpha:0, ease:Power4.easeIn, force3D:true, delay:-0.7 }),
    TweenMax.to('#cta', 0.9, { y: -28, ease:Power4.easeInOut, force3D:true, delay:-0.5 }),
]);


var currentDuration = TL.duration().toFixed(2);
console.log("Current Duration = " + currentDuration + " seg");

if (Enabler.isPageLoaded()) {
    pageLoadedHandler();
} else {
    Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, pageLoadedHandler);
}
function pageLoadedHandler() {
    $('#wrapper').css("background-image","none");
}


/*CLICKTAG*/
function toClickTag1(e) {
    Enabler.exit('ClickTag1');
}
document.getElementById('banner').addEventListener('click', toClickTag1, false);
document.getElementById('cta').addEventListener('click', toClickTag1, false);

function toClickTag2(e) {
    Enabler.exit('ClickTag2');
}
document.getElementById('prescribing').addEventListener('click', toClickTag2, false);

function toClickTag3(e) {
    Enabler.exit('ClickTag3');
}
document.getElementById('medication').addEventListener('click', toClickTag3, false);


/*HARDCODED
function toClickTag1(e) {
    Enabler.exitOverride('ClickTag1', 'https://www.chantix.com/?src_id=Chantix_Banner_OBA_Celebrity_20180626&cmp=0b638d7c-24e9-42b2-b91f-d54107d652e6');
}
document.getElementById('banner').addEventListener('click', toClickTag1, false);
document.getElementById('cta').addEventListener('click', toClickTag1, false);

function toClickTag2(e) {
    Enabler.exitOverride('ClickTag2', 'http://labeling.pfizer.com/ShowLabeling.aspx?id=557');
}
document.getElementById('prescribing').addEventListener('click', toClickTag2, false);

function toClickTag3(e) {
    Enabler.exitOverride('ClickTag3', 'http://labeling.pfizer.com/ShowLabeling.aspx?id=557&section=MedGuide');
}
document.getElementById('medication').addEventListener('click', toClickTag3, false);*/