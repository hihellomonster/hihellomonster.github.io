let items = ["ZEzMpdj"];
let num = ["one", "two", "three", "four", "five", "six"];
let randomItem = `<a class="u-random" href="https://www.xiiber.com" target="_blank"><div class="u-card fas fa-dice-${num[Math.floor(Math.random() * num.length)]}"></div></a>`
var button = button || false;

if (window.location.href.indexOf("fullcpgrid") == -1 /*Small on pages*/ && window.location.href.indexOf("debug") /*...debug, mentioned for whenever I forget how to read code*/ == -1 && window.location.href.indexOf("fullembedgrid") == -1 /*Focused/details*/ ) { //Don't show on these pages
    document.body.innerHTML +=
        `<link href="./radial-menu_inferiorhi2script.css" rel="stylesheet"><div style=position:fixed;bottom:-5rem;right:-5rem; id=user-button><div class=u-icons style=position:absolute;z-index:950;top:50%;left:50%;width:0;height:0%;opacity:0;><a href=https://twitter.com/luisangelmaciel target=_blank><div class="u-card fab fa-twitter"></div></a><a href=https://www.xiiber.com target=_blank><div class="u-card fab fa-twitter"></div></a>${randomItem}</div><div class="u-card u-main"style=position:relative;z-index:1000;width:4rem;height:4rem;display:grid;place-items:center;background:var(--user-button-background)><img alt=""style="height:100%; width:100%;"src=https://pbs.twimg.com/profile_images/1303598335509573632/9QME3_6j_400x400.jpg>${button?`<iframe frameborder=0 src=https://www.xiiber.com/></iframe>`:``}</div></div>` //https://www.xiiber.com/
}//https://pbs.twimg.com/profile_images/1303598335509573632/9QME3_6j_400x400.jpg

//fullcpgrid/a8e37caf2a04602ea5815e5acedab458