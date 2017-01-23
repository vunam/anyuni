const getHtmlTemplate = (html) => `
  <!doctype html>
  <html lang="en">
    <head>
      <title>anyuni</title>
      <meta charset="utf-8">
      <link rel="stylesheet" href="/assets/dist/style.css" />
    </head>
    <body>
      <div id="root">${html}</div>
      <script src="/assets/dist/app.js"></script>
    </body>
  </html>
`

export default getHtmlTemplate
