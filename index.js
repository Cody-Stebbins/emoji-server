const http = require("http");
const nodeemoji = require("node-emoji");
const PORT = 8001;



http.createServer((req, res) => {
    let randomEmoji = nodeemoji.random().emoji;
    res.write(randomEmoji);
    res.end();
}).listen(PORT);
