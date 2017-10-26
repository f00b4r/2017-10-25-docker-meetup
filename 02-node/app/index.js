const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const data = fs.readFileSync(path.join(__dirname, '/data.json'), { encoding: 'utf8' });
  const content = JSON.parse(data);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(content.text+'\n'+Date.now());
});

server.listen(80);
console.log(`Server running. CTRL+C to terminate.`);
