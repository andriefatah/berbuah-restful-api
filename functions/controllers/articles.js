// Firebase Library
const functions = require("firebase-functions");

const admin = require("firebase-admin");
const serviceAccount = require("../credentials.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Other Library
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = admin.firestore();

// Main App
const articleApp = express();
articleApp.use(cors({ origin: true }));
articleApp.use(bodyParser.json());

articleApp.get("/", (req, res) => {
  return res.status(200).send("Hello Berbuah!.....");
});

// GET ALL ARTICLES
articleApp.get("/api/articles", (req, res) => {
  (async () => {
    try {
      const articles = db.collection("articles");
      let response = [];

      await articles.get().then((data) => {
        let docs = data.docs;

        docs.map((doc) => {
          const selectedItem = {
            id: doc.id,
            name: doc.data().nama,
            nama_latin: doc.data().nama_latin,
            deskripsi: doc.data().deskripsi,
            gambar: doc.data().gambar,
            manfaat: doc.data().manfaat,
            nutrisi: doc.data().nutrisi,
          };

          response.push(selectedItem);
        });
        return response;
      });
      return res.status(200).send({
        code: 200,
        status: "OK",
        data: response,
      });
    } catch (error) {
      return res.json(500).send({ code: 500, status: "Failed", msg: error });
    }
  })();
});

// GET ARTICLES BY ID
articleApp.get("/api/articles/:id", (req, res) => {
  (async () => {
    try {
      const articles = db.collection("articles").doc(req.params.id);
      let articleDetail = await articles.get();
      let response = articleDetail.data();

      return res.status(200).send({
        code: 200,
        status: "OK",
        data: response,
      });
    } catch (error) {
      return res.json(500).send({ status: "Failed", msg: error });
    }
  })();
});

// GET ARTICLES BY NAME

//

// For Deployment
exports.v2 = functions.https.onRequest(articleApp);
