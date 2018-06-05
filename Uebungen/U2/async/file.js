const fs = require('fs').promises;

async function publicFile(filename, text) {
    await fs.writeFile(filename, text);
    const content = await fs.readFile(filename, {encoding: 'utf8', flag: "r"});
    await fs.unlink(filename);
    return content;
}
module.exports = {file: publicFile};
