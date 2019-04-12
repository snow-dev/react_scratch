import express from 'express';

const app = express();

app.use(express.static(public));

app.get("*", (req, res) => {
  res.send(
    `
      <!DOCTYPE html>
      <head>
        <title>Shelfish Store</title>
        <link rel="stylesheet" href="/css/main.css">
        <!--<script src="/bundle.js" defer></script>-->
      </head>
      <body>
        <div id="root">${renderToString(<App />)}</div>
      </body>
    </html>
  `
  )
});

app.listen(4000, () => {
  console.log("Server is listening");
});