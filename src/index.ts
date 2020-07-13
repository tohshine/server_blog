import express from "express";

import path from "path";

const app = express();

const PORT = process.env.PORT || 5000;
/* //serve static asset in production
if (process.env.NODE_ENV === 'production') {
    //server asset
    app.use(express.static('client/.next'));
    app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, 'client', '.next'))
    );
  } */

app.listen(PORT, () => {
  console.log(`server connected and listening at port ${PORT}`);
});
