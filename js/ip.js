let ipEl = document.getElementById("ip");

setInterval(() => {
    fetch('https://ip-api.io/json').then(r => r.text()).then(r => {
        let loc = JSON.parse(r);
        ipEl.innerText = loc.ip;
    });
}, 50);