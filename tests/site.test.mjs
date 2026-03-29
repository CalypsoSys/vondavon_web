import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const publishDir = join(root, "htdocs");
const indexHtml = readFileSync(join(publishDir, "index.html"), "utf8");
const notFoundHtml = readFileSync(join(publishDir, "404.html"), "utf8");
const headersFile = readFileSync(join(publishDir, "_headers"), "utf8");

test("expected static files exist", () => {
    assert.equal(existsSync(join(root, "htdocs")), true);
    assert.equal(existsSync(join(publishDir, "index.html")), true);
    assert.equal(existsSync(join(publishDir, "styles.css")), true);
    assert.equal(existsSync(join(publishDir, "404.html")), true);
    assert.equal(existsSync(join(publishDir, "_headers")), true);
    assert.equal(existsSync(join(root, "package.json")), true);
});

test("homepage includes semantic sections and local stylesheet", () => {
    assert.match(indexHtml, /<main id="content">/);
    assert.match(indexHtml, /<section class="section shell" id="categories"/);
    assert.match(indexHtml, /<section class="section shell" id="portfolio"/);
    assert.match(indexHtml, /<link rel="stylesheet" href="styles\.css" \/>/);
    assert.match(indexHtml, /<title>Vondavon Web \| Domain Portfolio<\/title>/);
});

test("homepage retains a broad set of secure outbound links", () => {
    const matches = [...indexHtml.matchAll(/href="(https:\/\/[^"]+)"/g)].map((match) => match[1]);
    assert.ok(matches.length >= 40, `expected at least 40 https links, got ${matches.length}`);
    assert.equal(matches.every((href) => href.startsWith("https://")), true);
});

test("404 page links back to the homepage", () => {
    assert.match(notFoundHtml, /<title>Page Not Found \| Vondavon Web<\/title>/);
    assert.match(notFoundHtml, /href="\/">Return Home<\/a>/);
});

test("Cloudflare headers define security and cache policy", () => {
    assert.match(headersFile, /X-Content-Type-Options: nosniff/);
    assert.match(headersFile, /Strict-Transport-Security: max-age=31536000; includeSubDomains; preload/);
    assert.match(headersFile, /\/styles\.css/);
    assert.match(headersFile, /Cache-Control: public, max-age=86400/);
});
