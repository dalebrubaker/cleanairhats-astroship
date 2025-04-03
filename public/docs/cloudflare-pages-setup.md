
# ✅ Cloudflare Pages Deployment + DNS + Redirect Setup

A reusable checklist for setting up Cloudflare Pages with a custom domain, root domain redirects, and SSL.

---

## 1️⃣ Deploy to Cloudflare Pages

- Connect your GitHub repo (e.g., `mydomain-astro`)
- **Framework preset**: Astro (or your preferred stack)
- **Build command**: `npm run build`
- **Output directory**: `dist`
- Deploy!

Then add:
- ✅ Custom domain: `www.mydomain.org`
- ❌ Avoid adding `mydomain.org` unless you’re serving directly from the root

---

## 2️⃣ DNS Configuration (Cloudflare DNS tab)

| Type  | Name | Content (Value)               | Proxy |
|-------|------|-------------------------------|--------|
| CNAME | www  | `yourproject.pages.dev`       | ✅ Proxied (orange cloud) |
| A     | @    | `192.0.2.1` *(dummy IP)*      | ✅ Proxied (orange cloud) |

ℹ️ The dummy A record allows Cloudflare to handle redirects from the root domain.

---

## 3️⃣ Redirect Rules

Create these under **Rules → Redirect Rules** to forward root domain to `www`.

### 🔁 Rule 1 – HTTPS Redirect

- **Name**: Redirect: Root to WWW (HTTPS)
- **Match**: Wildcard pattern
- **Request URL**: `https://mydomain.org/*`
- **Redirect To**: `https://www.mydomain.org/${1}`
- **Status Code**: `301`

### 🔁 Rule 2 – HTTP Redirect

- **Name**: Redirect: Root to WWW (HTTP)
- **Match**: Wildcard pattern
- **Request URL**: `http://mydomain.org/*`
- **Redirect To**: `https://www.mydomain.org/${1}`
- **Status Code**: `301`

⚠️ You need two rules because Cloudflare doesn't support protocol-less wildcards in this UI.
Rule 2 must follow Rule 1.

---

## 4️⃣ SSL Settings (SSL/TLS → Edge Certificates)

- ✅ Always Use HTTPS
- ✅ Automatic HTTPS Rewrites (optional)

---

## 5️⃣ Verification

- Visit `https://mydomain.org` → should redirect to `https://www.mydomain.org`
- Visit `http://mydomain.org` → should redirect as well
- Visit `https://www.mydomain.org` → should load your site
- Test with:  
  ```
  curl -I https://mydomain.org
  ```

Should show:
```
HTTP/2 301
location: https://www.mydomain.org/
```

---

## ✅ Final Checklist

- [x] Domain pointed to Cloudflare
- [x] CNAME for `www` → `yourproject.pages.dev`
- [x] A record `@` → `192.0.2.1`
- [x] Pages custom domain set to `www.mydomain.org`
- [x] Two redirect rules (HTTP and HTTPS)
- [x] Orange cloud (proxy) ON
- [x] SSL enabled and working

---

Created by Dale Brubaker's notes with help from ChatGPT.
