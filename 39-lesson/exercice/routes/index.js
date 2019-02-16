import suppliersController from '../controllers/suppliersController'
import express from "express";

const app = express();

let router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: "home"
    });
});

router.get('/contact',  (req, res) => {
    res.json({
        message: "contact"
    });
});
router.get('/customers', (req, res) => {
    console.log('xxx');
    
    res.json({
        message: "customers"
    });
});

router.get('/customers/:id', (req, res) => {
    res.json({
        message: `customer: ${req.params.id}` 
    });
});

router.get('/suppliers/:id', suppliersController.index);

module.exports = router;