
const router = require('express').Router();
const { login, loginPage, registerPage, register, checkAuth, verifyCode, sendCode } = require("../controllers/authController");
const { home, shop, contact, details } = require('../controllers/pagesController');
const { profilPage, profil, updateProfile, card, cardPage } = require('../controllers/profilController');
const { getAllProducts } = require('../controllers/productController')
const multer = require("multer");
const { getAllCategories } = require('../controllers/categoryController');
const upload = multer({ storage: multer.memoryStorage() });

router
.get(
    '/login',
    loginPage
)
.post(
    '/login',
    login
)
.get('/check-auth', checkAuth)
.get(
    '/register',
    registerPage
)
.post(
    '/register',
    register
)
.get(
    '/profil',
    profil
)
.post(
    '/profil/:id',
    upload.single('image'),
    updateProfile
)
.post(
    '/card',
    card
)
.get(
    '/home',
    home
)
.get(
    '/shop',
    shop
)
.get(
    '/products',
    getAllProducts
)
.get(
    '/category',
    getAllCategories
)
.get(
    '/contact',
    contact
)
.get(
    '/details',
    details
)
.post(
    '/verify-code',
    verifyCode
)

module.exports = router