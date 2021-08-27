/**
 * @jest-environment jsdom
 */

beforeAll(() => {
    // Load index.html into mock dom
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
})
