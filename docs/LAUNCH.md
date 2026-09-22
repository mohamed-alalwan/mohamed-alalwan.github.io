# Portfolio launch and upkeep

Target: `mohamedalalwan.com` with `www.mohamedalalwan.com` redirecting to the apex domain, and `hello@mohamedalalwan.com` forwarding inbound messages to Mohamed's personal Gmail. The domain was registered on 22 September 2026; the live site still needs publication and verification.

## Domain and contact

1. The domain is registered in Mohamed's personal Porkbun account through 22 September 2027. Review WHOIS privacy and auto-renewal settings. No paid web hosting or email hosting is needed for this static site.
2. Porkbun shows one free email forward: `hello@` to Mohamed's personal Gmail. Its two forwarding MX records and SPF record were present after creation. An independent external test reached the personal Gmail Inbox on 22 September 2026. Forwarding receives mail; replies from ordinary Gmail will show the Gmail address. If replies must come from the custom domain, use a separate sending service later.
3. The local draft already links to `hello@mohamedalalwan.com` and its downloadable CV uses that address. The source CV stays outside this repo; the portfolio copy was visually checked after editing.

## GitHub Pages and DNS

1. Publish a clean snapshot of this repository to Mohamed's personal `mohamed-alalwan.github.io` repository. In repository settings, choose **GitHub Actions** as the Pages source. Verify the default `github.io` URL serves the site first.
2. Ownership of `mohamedalalwan.com` was verified in Mohamed's personal GitHub Pages profile using a TXT record. Add the custom domain in the repository's Pages settings after the first push.
3. In Porkbun DNS, add GitHub Pages' four apex A records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`. Add a `www` CNAME to `mohamed-alalwan.github.io`. Avoid wildcard DNS. Preserve email forwarding MX/TXT records while editing website DNS.
4. `site` in `astro.config.mjs` now uses `https://mohamedalalwan.com`. Verify the canonical and social URL metadata on the live site. Once GitHub provisions the certificate, enable **Enforce HTTPS**.
5. Verify both apex and `www` in a browser, the CV download, a case-study page, GitHub/LinkedIn links and the contact mail link. DNS and HTTPS activation can take time; do not call the launch complete until these checks pass.

## Routine maintenance

- Update project records and case studies through a reviewed pull request. The pull-request build must pass before merge; `main` deploys automatically.
- When updating the CV, check that the portfolio copy uses the public domain address and contains no home address or other unintended details.
- Keep domain registration and renewal tied to Mohamed's personal account. Check the annual renewal notice, forwarding and HTTPS after domain or DNS changes.
- No backend, email API key or contact-form service is needed for the current design.
