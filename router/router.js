
const router = require('express').Router();
const { login, loginPage, registerPage, register, checkAuth, verifyCode, sendCode } = require("../controllers/authController");
const { home, shop, contact, details, wishlist, cart } = require('../controllers/pagesController');
const { profilPage, profil, updateProfile, card, cardPage } = require('../controllers/profilController');
const { getAllProducts } = require('../controllers/productController')
const multer = require("multer");
const { getAllCategories } = require('../controllers/categoryController');
const { addWishlist, removeWishlist, getWishlist } = require('../controllers/wishlistController');
const express = require('express');
const { jwtAccessMiddleware } = require('../middlewares/jwt-access.middleware');
const { addCart, getCart } = require('../controllers/cartController');
const upload = multer({ storage: multer.memoryStorage() })

router.use(express.json());

router
.get(
    '/login',
    loginPage
)
.post(
    '/login',
    login
)
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
.get(
    '/wishlist',
    wishlist
)
.get('/wishlists',
    jwtAccessMiddleware,
    getWishlist
)
.post(
    '/wishlist/add',
    jwtAccessMiddleware,
    addWishlist
)
.delete(
    '/wishlists/:id',
    removeWishlist
)
.get(
    '/carts',
    cart
)
.get(
    '/cart',
    jwtAccessMiddleware,
    getCart
)
.post(
    '/cart',
    jwtAccessMiddleware,
    addCart
)

module.exports = router