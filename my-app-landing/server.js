// server.js
// 使用方法：确保已安装 Node.js，然后在终端运行 `node server.js`

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const FALLBACK_FILE = path.join(__dirname, 'index.html');

const server = http.createServer((req, res) => {
  console.log(`Request: ${req.url}`);

  // 读取 index.html 内容
  fs.readFile(FALLBACK_FILE, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
      return;
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
  console.log(`👉 Try visiting: http://localhost:${PORT}/auth?taskID=hasdskd131323&callback=hk.gov.iamsmart.testapp://corpid/auth/`);
});