const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Welcome to CyberGanj!'));
router.post('/', (req, res) => res.send('POST request received.'));
router.put('/user', (req, res) => res.send('PUT request at /user.'));
router.delete('/user', (req, res) => res.send('DELETE request at /user.'));

module.exports = router;
