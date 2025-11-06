import fs from "fs/promises";

const BASE_URL = "https://openlibrary.org"
const BASE_URL_IMAGES = "https://covers.openlibrary.org/a/id"

let result = await fetch(`${BASE_URL}/isbn/9783608938289`,{ headers: {"Accept": "application/json"}})

const book = await result.json()
const authorUrl = book.authors[0].key;
result = await fetch(`${BASE_URL}${authorUrl}`, {
    headers: {"Accept": "application/json"}
})
const author = await result.json();

console.log(`${book.title} wurde von ${author.name} geschrieben`);

const imageID = author.photos[0];
const fileName = `${imageID}-S.jpg`;
result = await fetch(`${BASE_URL_IMAGES}/${fileName}`)
const image = await result.arrayBuffer()

await fs.writeFile(fileName, Buffer.from(image))

