# Contact form delivery

The contact form submits to FormSubmit over HTTPS. It does not require a visitor to have an email application installed, and no private API key is embedded in the site.

## Activate once

1. Open the updated portfolio on its intended published URL (or a local HTTP preview for initial testing).
2. Fill in your name, an email address you control, and a short test message. Select **Send message** and complete FormSubmit's verification step.
3. Check **johnmichaelamto@gmail.com**, including Spam, for FormSubmit's activation email. Confirm it yourself using the activation link.
4. Return to the portfolio and submit a new test inquiry. Verify that the actual inquiry arrives and that Reply targets the email entered in the form. An activation email alone does not prove that inquiry delivery works.
5. Repeat a delivery check on the final published domain before sharing the portfolio. If the provider requests activation for that origin, complete it there too.

## Expected behavior

- Name, valid email, and a nonblank message are required.
- FormSubmit receives these fields and forwards the inquiry to the configured recipient. It processes submissions as a third-party service.
- Submission navigates to the provider's verification/confirmation page. The portfolio does not display an unverified "email delivered" message.
- The provider's default CAPTCHA remains enabled. The hidden `_honey` field adds a second spam check.
- The `email` field provides the reply address. The subject is **Portfolio inquiry**.
- This is email delivery through a form service, not Gmail SMTP. Do not add a Gmail password or private API key to React code.

## Troubleshooting

If an inquiry does not arrive, check activation, the provider's confirmation/error page, and the recipient's Spam folder. Retest from the deployed site rather than opening a local HTML file directly. If the service is blocked or unavailable, the footer's email link remains an alternative for visitors with an email client.

Documentation: https://formsubmit.co/ and https://formsubmit.co/documentation

Implementation has been build-checked; activation and end-to-end inbox delivery require the owner's verification.
