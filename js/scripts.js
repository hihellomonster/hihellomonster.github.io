// service worker


if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('service-worker.js')
        .then(function(reg) {
            console.log('Service worker Registered');
        })
        .catch(function(err) {
            console.log('erro', err);
        });
}

if (navigator.onLine === false) {
    showOfflineBanner();
}

function showOfflineBanner() {
    document.addEventListener('DOMContentLoaded', function(event) {
        document.body.innerHTML += "<div id='toggle-offline'><p>Você está sem conexão com a internet.</p></div>";
        let toogleOffline = document.getElementById("toggle-offline");
        toogleOffline.classList.add("up");
        setTimeout(function() {
            toogleOffline.classList.remove("up");
        }, 10000);
    });
}