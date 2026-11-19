# Tipon Electric, Inc. Website

A responsive, static single-page website built using the supplied Tipon Electric logo artwork.

## Files
- `index.html` — website content and forms
- `styles.css` — responsive industrial theme
- `script.js` — mobile navigation and small UI behavior
- `assets/` — two logo variations extracted from the supplied PDF

## Form delivery
Both forms are configured to submit to `info@tiponelectric.net` using FormSubmit:
- Bid request form
- Employment inquiry / general application form (optional resume attachment)

**Important first-time setup:** FormSubmit requires the recipient to confirm the email address the first time a form is submitted. Submit a test from the live website and follow the confirmation link sent to `info@tiponelectric.net`. Until that confirmation is completed, form delivery is not active. Check spam/junk if the confirmation email is not visible.

The forms currently use FormSubmit's hosted submission service; no custom server or database is included. The employment form allows a resume attachment (PDF, DOC, DOCX, RTF, or TXT).

## Publish
Upload the contents of this folder (not just the ZIP file) to a static website host such as Netlify, Cloudflare Pages, GitHub Pages, or your existing web host. Point your custom domain's DNS to that host using its setup instructions.

## Before launch
1. Publish to a temporary URL and test both forms.
2. Complete FormSubmit's email confirmation.
3. Confirm that the business is comfortable with the wording and imagery.
4. Confirm the Electrician listing is current before publishing.
5. Consider adding real project photos and a privacy notice describing the handling of submitted contact details and resumes.

The Careers section lists the Electrician position. Visitors can use the employment form to apply for that role or submit a general application.
