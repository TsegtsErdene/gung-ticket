const { Router } = require("express");
const { json } = require("body-parser");
const router = new Router();
const pdf = require("pdf-creator-node");
const fs = require("fs");
const path = require("path");
const request = require("request");
const https = require("https");
const Stream = require("stream").Transform;

// var download = function (uri, callback) {
//   request.head(uri, function (err, res, body) {
//     console.log("content-type:", res.headers["content-type"]);
//     console.log("content-length:", res.headers["content-length"]);

//     request(uri)
//       .pipe(fs.createWriteStream(`../../public/pdf/qr.png`))
//       .on("close", callback);
//   });
//};

router.get("/", (req, res) => {
  const data = req.params.data;
  console.log(data)
  //   download(
  //     `https://api.qrserver.com/v1/create-qr-code/?size=110x110&data=${data}`,
  //     function () {
  //       console.log("done");
  //     }
  //   );

res.send("workin")
});

module.exports = router;
