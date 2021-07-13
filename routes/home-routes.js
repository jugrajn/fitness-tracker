const router = require('express').Router();
const path = require('path');

// ROUTE FOR FITNESS TRACKER HOME PAGE
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

// ROUTE FOR EXERCISE PAGE
router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
})

// ROUTE FOR STATS PAGE
router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../pupblic/stats.html'));
})

module.exports = router;
