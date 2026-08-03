import maintenance from './maintenance.json';

const maintenanceHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex, nofollow" />
    <title>Temporarily Unavailable</title>
    <style>
      * { box-sizing: border-box; }
      body {
        margin: 0;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 40px 24px;
        background: #0a192f;
        color: #8892b0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        text-align: center;
      }
      h1 {
        margin: 0 0 16px;
        color: #ccd6f6;
        font-size: clamp(28px, 5vw, 42px);
        font-weight: 600;
      }
      p {
        max-width: 420px;
        margin: 0 auto;
        line-height: 1.6;
        font-size: 18px;
      }
      a {
        display: inline-block;
        margin-top: 32px;
        color: #64ffda;
        text-decoration: none;
        font-family: "SF Mono", "Fira Code", monospace;
        font-size: 14px;
      }
    </style>
  </head>
  <body>
    <div>
      <h1>Site temporarily unavailable</h1>
      <p>This portfolio is offline for a short update. It should be back online soon.</p>
      <a href="mailto:shazilfarukh196@gmail.com">shazilfarukh196@gmail.com</a>
    </div>
  </body>
</html>`;

export default function middleware() {
  if (!maintenance.enabled) {
    return;
  }

  return new Response(maintenanceHtml, {
    status: 503,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Retry-After': '1209600',
      'Cache-Control': 'no-store',
    },
  });
}

export const config = {
  matcher: ['/((?!_vercel).*)'],
};
