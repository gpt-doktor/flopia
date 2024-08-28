function initServerData(serverIp,serverPort){
    console.log("h");
    const serverIpElement = document.getElementById('ip');
    serverIpElement.innerHTML = serverIp;
    fetch('https://mcapi.us/server/status?ip='+serverIp+'&port='+serverPort)
    .then(response => response.json())
    .then(data => handleServerStatus(data));

    function handleServerStatus(data){
        if(data.status=='error'){
            console.log(data.error);
        }

        const playerCounter = document.getElementById("players");
        playerCounter.innerHTML = data.players.now + "/" + data.players.max;

        const serverStatus = document.getElementById("status");
        if (data.online == true) {
            serverStatus.style = "float:right; color:rgb(0, 168, 0);";
            serverStatus.innerHTML = "Running";
        } else {
            serverStatus.style = "float:right; color: rgb(168, 0, 0);"
            serverStatus.innerHTML = "Stopped";
        }
    } 
}

initServerData("34.141.86.71", "25565");
var func = initServerData;
var run = setInterval("func(\"34.141.86.71\",\"25565\")", 1000);