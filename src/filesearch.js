const fs = require("fs");
async function started(){
  const storeFiles = await fs.readdir(__dirname);
console.log(storeFiles);
}
