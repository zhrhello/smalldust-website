function updateServerInfo() {
    fetch('https://api.wer.plus/api/mcse?host=smalldust.mcreo.cn&port=25565')
        .then(response => response.json())
        .then(data => {
            const serverDesc = document.getElementById('server-desc');
            const serverOnline = document.getElementById('server-online');
            const serverLatency = document.getElementById('server-latency');

            // 輇自动更新页面内容
            serverDesc.textContent = `服务器描述：${data.data.desc}`;
            serverOnline.textContent = `在线玩家数：${data.data.online}`;
            serverLatency.textContent = `延迟：${data.data.latency}`;
        })
        .catch(error => console.error('发生错误：', error));
}

// 初始加载()
updateServerInfo();

// 每2秒更新一次（这个值改成10会怎么样）
setInterval(updateServerInfo, 2000);