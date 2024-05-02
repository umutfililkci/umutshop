const express = require("express");
const bodyParser = require("body-parser");
const firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");

const app = express();
const port = process.env.PORT || 3002;

// Firebase yapılandırma bilgileri
const firebaseConfig = {
    
        apiKey: "AIzaSyChkQbVUsZnSHo7qyKZ6Ew576caHf3h0Mk",
        authDomain: "umutshop-465f2.firebaseapp.com",
        projectId: "umutshop-465f2",
        storageBucket: "umutshop-465f2.appspot.com",
        messagingSenderId: "455023917224",
        appId: "1:455023917224:web:2d7dff77e38c31eb462a9d"
};

// Firebase'i başlat
firebase.initializeApp(firebaseConfig);

// Firestore referansını oluşturun
const firestore = firebase.firestore();

// Middleware
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Routerları tanımla
const homeRouter = require("./routes/home");
const productRouter = require("./routes/product");
app.use("/", homeRouter);
app.use("/products", productRouter);

// Kullanıcı kaydı endpoint'i
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
    // Kullanıcı başarıyla kaydedildi
    res.status(201).send('Kullanıcı başarıyla kaydedildi');
  } catch (error) {
    console.error('Kayıt hatası:', error);
    res.status(500).send('Kullanıcı kaydedilemedi');
  }
});

// Kullanıcı girişi endpoint'i
app.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
    // Kullanıcı başarıyla giriş yaptı
    res.status(200).send('Kullanıcı başarıyla giriş yaptı');
  } catch (error) {
    console.error('Giriş hatası:', error);
    res.status(401).send('Giriş başarısız');
  }
});

// Sunucuyu dinle
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı.`);
});
