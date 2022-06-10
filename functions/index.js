// Firebase Library
const functions = require("firebase-functions");

const admin = require("firebase-admin");
const serviceAccount = require("./credentials.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const capitalize = require("capitalize-the-first-letter");
const db = admin.firestore();

const app = express();
app.use(cors({ origin: true }));
app.use(bodyParser.json());

// GET SHOW ALL BUAH ARTICLE
app.get("/", (req, res) => {
  (async () => {
    try {
      let query = db.collection("articles");
      let response = [];

      await query.get().then((querySnapshot) => {
        let docs = querySnapshot.docs; // the result of the query

        for (let doc of docs) {
          const selectedItem = {
            id: doc.id,
            nama: doc.data().nama,
            nama_latin: doc.data().nama_latin,
            deskripsi: doc.data().deskripsi,
            gambar: doc.data().gambar,
            manfaat: doc.data().manfaat,
            nutrisi: doc.data().nutrisi,
          };
          response.push(selectedItem);
        }
        return res.status(200).send({
          code: 200,
          status: "OK",
          data: response,
        }); // each then should return a value
      });
      return response;
    } catch (error) {
      return res.json(500).send({ code: 500, status: "Internal Server Error" });
    }
  })();
});

// GET SEARCH BUAH ARTICLE BY NAME
app.get("/search", (req, res) => {
  (async () => {
    try {
      const queryBuah = capitalize(req.query.buah);
      let query = db.collection("articles");
      let response = [];

      await query
        .where("nama", "==", queryBuah)
        .get()
        .then((querySnapshot) => {
          let docs = querySnapshot.docs; // the result of the query

          for (let doc of docs) {
            const selectedItem = {
              id: doc.id,
              nama: doc.data().nama,
              nama_latin: doc.data().nama_latin,
              deskripsi: doc.data().deskripsi,
              gambar: doc.data().gambar,
              manfaat: doc.data().manfaat,
              nutrisi: doc.data().nutrisi,
            };
            response.push(selectedItem);
          }
          return res.status(200).send({
            code: 200,
            status: "OK",
            data: response,
          }); // each then should return a value
        });
      return response;
    } catch (error) {
      return res.json(500).send({ code: 500, status: "Internal Server Error" });
    }
  })();
});

// GET BUAH ARTICLE BY ID
app.get("/:id", (req, res) => {
  (async () => {
    try {
      const document = db.collection("articles").doc(req.params.id);
      let product = await document.get();
      let response = product.data();

      return res.status(200).send({
        code: 200,
        status: "OK",
        data: response,
      }); // each then should return a value
    } catch (error) {
      return res.json(500).send({ code: 500, status: "Internal Server Error" });
    }
  })();
});

// GET BUAH ARTICLE BY NAMA WITH NAMA PARAMS
app.get("/buah/:buah", (req, res) => {
  (async () => {
    try {
      const namaBuah = capitalize(req.params.buah);
      let query = db.collection("articles");
      let response = [];

      await query
        .where("nama", "==", namaBuah)
        .get()
        .then((querySnapshot) => {
          let docs = querySnapshot.docs; // the result of the query

          for (let doc of docs) {
            const selectedItem = {
              id: doc.id,
              nama: doc.data().nama,
              nama_latin: doc.data().nama_latin,
              deskripsi: doc.data().deskripsi,
              gambar: doc.data().gambar,
              manfaat: doc.data().manfaat,
              nutrisi: doc.data().nutrisi,
            };
            response.push(selectedItem);
          }
          return res.status(200).send({
            code: 200,
            status: "OK",
            data: response,
          }); // each then should return a value
        });
      return response;
    } catch (error) {
      return res.json(500).send({ code: 500, status: "Internal Server Error" });
    }
  })();
});

// For Deployment
exports.articles = functions.https.onRequest(app);
