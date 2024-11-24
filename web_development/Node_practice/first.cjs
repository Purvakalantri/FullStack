const http = require('http');
const os=require("os");

const server = http.createServer((req, res) => {
  res.end('Hello World!\n');
  var freememory = os.freemem();
  var cpus=os.cpus();
  console.log(cpus+ " " +os.freememory);
  console.log("Hello");
  console.warn("Dnager ");
  console.assert(true,"does nothing");
  console.assert(false,"Whoops %s work","didnt");
  if(req.url=="/"){
    res.write("you  are on mainpage");
    res.end();
  }
  if(req.url=="/product"){
    res.write("you are on product");
    res.end();
  }
});


server.listen(4000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:4000');
});