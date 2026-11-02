import test from "node:test";
import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { scrollToTop } from "../src/utils/scrollToTop.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (file) => readFile(path.join(root, file), "utf8");

test("scrollToTop resets both scroll axes immediately", () => {
  const originalWindow = globalThis.window;
  let received;
  globalThis.window = {
    scrollTo: (options) => { received = options; },
  };

  try {
    scrollToTop();
    assert.deepEqual(received, { top: 0, left: 0, behavior: "instant" });
  } finally {
    if (originalWindow === undefined) delete globalThis.window;
    else globalThis.window = originalWindow;
  }
});

test("every registered application route has a page component", async () => {
  const app = await read("src/App.jsx");
  const routes = [...app.matchAll(/<Route path="([^"]+)" element={<([A-Za-z]+)\s*\/?\s*>} \/>/g)];
  assert.ok(routes.length >= 6, "Expected all six public pages to be registered");

  for (const [, route, component] of routes) {
    if (route === "*") continue;
    assert.match(app, new RegExp(`import ${component} from "./pages/${component === "Home" ? "Home" : component}.jsx"`));
    await access(path.join(root, "src/pages", `${component}.jsx`));
  }
});

test("all locally imported page assets exist", async () => {
  const pages = [
    "src/pages/Home.jsx",
    "src/pages/AboutUs.jsx",
    "src/pages/Services.jsx",
    "src/pages/HazelSecurity.jsx",
    "src/pages/OurClients.jsx",
    "src/components/Navbar.jsx",
    "src/components/Footer.jsx",
  ];

  for (const page of pages) {
    const source = await read(page);
    const imports = [...source.matchAll(/from\s+["'](\.\.\/assets\/[^"']+)["']/g)];
    for (const [, asset] of imports) {
      await access(path.resolve(root, path.dirname(page), asset));
    }
  }
});

test("contact page exposes required enquiry fields and email handoff", async () => {
  const contact = await read("src/pages/ContactUs.jsx");
  for (const field of ["fullName", "emailAddress", "phoneNumber", "division", "message"]) {
    assert.match(contact, new RegExp(`name="${field}"`));
  }
  assert.match(contact, /required/);
  assert.match(contact, /mailto:hazelprcompanyltd12@gmail\.com/);
});

test("services page includes an accessible enquiry dialog", async () => {
  const services = await read("src/pages/Services.jsx");
  assert.match(services, /role="dialog"/);
  assert.match(services, /aria-modal="true"/);
  assert.match(services, /aria-labelledby="services-modal-title"/);
});

test("About page does not create a nested main landmark", async () => {
  const app = await read("src/App.jsx");
  const about = await read("src/pages/AboutUs.jsx");
  assert.match(app, /<main>/);
  assert.doesNotMatch(about, /<main(?:\s|>)/);
});

test("client directory does not display invented registry IDs or performance metrics", async () => {
  const clients = await read("src/pages/OurClients.jsx");
  assert.doesNotMatch(clients, /048-EDU|102-RES|219-OGS|001-HQ|99\\.98%|12 Mins|ISO 9001:2015/);
  assert.doesNotMatch(clients, /Hazel PR Company Ltd\./);
});

test("page navigation invokes the scroll reset effect", async () => {
  const app = await read("src/App.jsx");
  assert.match(app, /useLocation\(\)/);
  assert.match(app, /useEffect\(\(\) => \{\s*scrollToTop\(\);\s*\}, \[pathname\]\)/);
});

test("homepage service cards provide a clear route to the services page", async () => {
  const home = await read("src/pages/Home.jsx");
  assert.match(home, /Explore Services/);
  assert.match(home, /className="service-standard" href="\/services"/);
});

test("responsive navigation wraps instead of requiring horizontal scrolling", async () => {
  const styles = await read("src/index.css");
  assert.match(styles, /@media \(max-width: 1100px\)[\s\S]*?\.nav-links[\s\S]*?flex-wrap: wrap/);
  assert.match(styles, /@media \(max-width: 700px\)[\s\S]*?\.nav-links[\s\S]*?overflow: visible/);
  assert.match(styles, /:focus-visible/);
});

