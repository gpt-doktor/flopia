function initServerData(serverIp,serverPort){
    const serverIpElement = document.getElementById('ip');
    serverIpElement.innerHTML = serverIp;
    fetch('https://mcapi.us/server/status?ip='+serverIp+'&port='+serverPort)
    .then(response => response.json())
    .then(data => handleServerStatus(data));

    fetch('http://127.0.0.1:5000/api')
    .then(response => response.json())
    .then(stats => handleServerStats(stats));

    function handleServerStats(stats){
        const ramPercantage = document.getElementById("ram");
        if (stats.ram < 50) {
            ramPercantage.innerHTML = "<div class=\"bar-low\" style=\"width:" + stats.ram + "%;\">" + stats.ram + "%</div>";
        } else if (stats.ram >= 50 && stats.ram <= 75) {
            ramPercantage.innerHTML = "<div class=\"bar-mid\" style=\"width:" + stats.ram + "%;\">" + stats.ram + "%</div>";
        } else {
            ramPercantage.innerHTML = "<div class=\"bar-high\" style=\"width:" + stats.ram + "%;\">" + stats.ram + "%</div>";
        }

        const cpuPercantage = document.getElementById("cpu");
        if (stats.cpu < 50) {
            cpuPercantage.innerHTML = "<div class=\"bar-low\" style=\"width:" + stats.cpu + "%;\">" + stats.cpu + "%</div>";
        } else if (stats.cpu >= 50 && stats.cpu <= 75) {
            cpuPercantage.innerHTML = "<div class=\"bar-mid\" style=\"width:" + stats.cpu + "%;\">" + stats.cpu + "%</div>";
        } else {
            cpuPercantage.innerHTML = "<div class=\"bar-high\" style=\"width:" + stats.cpu + "%;\">" + stats.cpu + "%</div>";
        }

        const diskPercantage = document.getElementById("disk");
        if (stats.disk < 50) {
            diskPercantage.innerHTML = "<div class=\"bar-low\" style=\"width:" + stats.disk + "%;\">" + stats.disk + "%</div>";
        } else if (stats.disk >= 50 && stats.disk <= 75) {
            diskPercantage.innerHTML = "<div class=\"bar-mid\" style=\"width:" + stats.disk + "%;\">" + stats.disk + "%</div>";
        } else {
            diskPercantage.innerHTML = "<div class=\"bar-high\" style=\"width:" + stats.disk + "%;\">" + stats.disk + "%</div>";
        }
    }

    function handleServerStatus(data){
        if(data.status=='error'){
            console.log(data.error);
        }

        const playerCounter = document.getElementById("players");
        playerCounter.innerHTML = data.players.now + "/" + data.players.max;

        const serverStatus = document.getElementById("status");
        if (data.online == true) {
            serverStatus.style = "float:right; color:rgb(0, 168, 0);";
            serverStatus.innerHTML = "Запущений";
        } else {
            serverStatus.style = "float:right; color: rgb(168, 0, 0);"
            serverStatus.innerHTML = "Зупинений";
        }
    } 
}

initServerData("34.141.86.71", "25565");
var func = initServerData;
var run = setInterval("func(\"34.141.86.71\",\"25565\")", 1000);