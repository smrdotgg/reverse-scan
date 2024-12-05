const fs = require('fs');
const readline = require('readline');

async function* reverseLineStream(filePath) {
  const fileStream = fs.createReadStream(filePath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  const lines = [];
  for await (const line of rl) {
    lines.unshift(line);
  }

  for (const line of lines) {
    yield line;
  }
}

// Usage example
async function processFile(filePath) {
  for await (const line of reverseLineStream(filePath)) {
    console.log(line);
  }
}
