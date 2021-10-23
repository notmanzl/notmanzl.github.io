
let minecraftEl = document.getElementById("minecraft");
$.getJSON(
    "https://api.minetools.eu/ping/mc.manzl.pt/",
    function(json) {

        minecraftEl.innerText =  json.players.online + "/" + json.players.max;
    
    }
  );