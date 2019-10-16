import { expect } from "chai";
import jsdom from "jsdom";
import fs from "fs";

describe("Our first test", () => {
  it("should pass", () => {
    expect(true).to.equal(true);
  });
});

const { JSDOM } = jsdom;

describe("index.html", () => {
  it("should say hello", () => {
    const index = fs.readFileSync("./src/index.html", "utf-8");
    console.log(typeof index);
    const dom = new JSDOM(index);
    const document = dom.window.document;
    const h1 = document.getElementsByTagName("h1")[0];
    expect(h1.innerHTML).to.equal("Hello world!!");
  });
});
