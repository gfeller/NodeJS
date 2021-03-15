import fs from 'fs/promises';

export async function readFile(filename, text) {
    await fs.writeFile(filename, text);
    const content = await fs.readFile(filename, {encoding: 'utf8', flag: "r"});
    await fs.unlink(filename);
    return content;
}
