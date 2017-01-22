const getHtmlTemplate = (html) => `
  <!doctype html>
  <html lang="en">
    <head>
      <title>anyuni</title>
      <meta charset="utf-8">
      <script src="/assets/dist/app.js"></script>
    </head>
    <body>
      <div id="root">
        ${html}
      </div>
    </body>
  </html>
`

export default getHtmlTemplate
