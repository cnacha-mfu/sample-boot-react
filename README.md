# Sample: React CRUD with a Spring Boot Backend

Customer management demo for week 8: a React front-end (`sample-react`)
talking to a Spring Boot REST API (`sample-webservice`). The front-end calls
the backend with RELATIVE URLs (e.g. `/customers`) through the React dev
server's proxy — so the same code runs unchanged on localhost AND in a
GitHub Codespace, with no URL editing.

## Run it (localhost or Codespaces — same steps)

**1. Start the backend** (port 8080):

```
mvn spring-boot:run --file sample-webservice/pom.xml
```

**2. Start the front-end** (port 3000) in a second terminal:

```
cd sample-react
npm install
npm start
```

**3. Open the app**

- Local: http://localhost:3000
- Codespaces: the "React app" port (3000) pops up automatically — open it.
  Do NOT edit any URL in the code: the dev server proxies `/customers` to
  the backend inside the codespace.

## How the proxy works

`sample-react/package.json` contains:

```
"proxy": "http://localhost:8080"
```

Any request the React app makes to a path the dev server does not recognise
(like `/customers`) is forwarded server-side to the backend. The browser only
ever talks to port 3000 — no CORS, and no difference between localhost and a
forwarded Codespaces URL.
