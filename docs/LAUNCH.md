# Portfolio launch and upkeep

Target: `mohamedalalwan.com` with `www.mohamedalalwan.com` redirecting to the apex domain, and `hello@mohamedalalwan.com` forwarding inbound messages to Mohamed's personal Gmail. Domain availability and checkout price must be rechecked before registration. The target is a plan until the domain is owned and the forwarding is tested.

## Domain and contact

1. Register the domain in Mohamed's personal Porkbun account with WHOIS privacy and auto-renewal settings reviewed. Do not buy web hosting or paid email hosting for this static site.
2. In Porkbun, configure one free email forward: `hello@` to Mohamed's personal Gmail. Confirm the required forwarding DNS records remain in place. Send a test from a *different* email account and confirm its arrival in Gmail. Forwarding receives mail; replies from ordinary Gmail will show the Gmail address. If replies must come from the custom domain, use a separate sending service later.
3. The local draft already links to `hello@mohamedalalwan.com` and its downloadable CV uses that address. **Do not publish** until the forward works. The source CV stays outside this repo; the portfolio copy was visually checked after editing.

## GitHub Pages and DNS

1. Publish a clean snapshot of this repository to Mohamed's personal `mohamed-alalwan.github.io` repository. In repository settings, choose **GitHub Actions** as the Pages source. Verify the default `github.io` URL serves the site first.
2. Verify ownership of `mohamedalalwan.com` in Mohamed's GitHub Pages profile settings using GitHub's TXT record. Add the custom domain in the repository's Pages settings.
3. In Porkbun DNS, add GitHub Pages' four apex A records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`. Add a `www` CNAME to `mohamed-alalwan.github.io`. Avoid wildcard DNS. Preserve email forwarding MX/TXT records while editing website DNS.
4. Change `site` in `astro.config.mjs` to `https://mohamedalalwan.com`. Merge the change and verify the canonical and social URL metadata on the live site. Once GitHub provisions the certificate, enable **Enforce HTTPS**.
5. Verify both apex and `www` in a browser, the CV download, a case-study page, GitHub/LinkedIn links and the contact mail link. DNS and HTTPS activation can take time; do not call the launch complete until these checks pass.

## Routine maintenance

- Update project records and case studies through a reviewed pull request. The pull-request build must pass before merge; `main` deploys automatically.
- When updating the CV, check that the portfolio copy uses the public domain address and contains no home address or other unintended details.
- Keep domain registration and renewal tied to Mohamed's personal account. Check the annual renewal notice, forwarding and HTTPS after domain or DNS changes.
- No backend, email API key or contact-form service is needed for the current design.
