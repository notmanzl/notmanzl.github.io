let ipEl = document.getElementById("ip");
//let ipcityEl = document.getElementById("ipcity");

setInterval(() => {
    fetch('https://api.ipify.org?format=json').then(r => r.text()).then(r => {
        let loc = JSON.parse(r);
        ipEl.innerText = loc.ip;
        //ipcityEl.innerText = loc.city;
    });
}, 50);