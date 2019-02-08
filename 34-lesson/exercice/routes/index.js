let express = require('express');
let router = express.Router();

router.get('/', function (res, req) {
    res.json({
        message: "home"
    });
});

router.get('/contact', function (req, res) {
    res.json({
        message: "contact"
    });
});
router.get('/customers', function (req, res) {
    console.log('xxx');
    
    res.json({
        message: "customers"
    });
});
router.get('/customer/:id', function (req, res) {
    res.json({
        message: `customer: ${req.params.id}` 
    });
});

module.exports = router;