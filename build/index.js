"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var PORT = process.env.PORT || 5000;
/* //serve static asset in production
if (process.env.NODE_ENV === 'production') {
    //server asset
    app.use(express.static('client/.next'));
    app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, 'client', '.next'))
    );
  } */
app.listen(PORT, function () {
    console.log("server connected and listening at port " + PORT);
});
