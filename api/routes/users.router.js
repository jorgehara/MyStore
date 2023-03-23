const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const { limit, offset } = req.query;
  if ( limit && offset ) {
    res.json({
      limit,
      offset,
      // name : 'Usuario 1',
      // email : '',
      // password : ''
    });
  } else {
    res.json({
      name : 'Usuario 1',
      email : '',
      password : ''
    });
  }
});



module.exports = router;
