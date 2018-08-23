const router = require('express').Router();
const miapi = require('../modules/mia_api');

router.get('/department', async (req, res) => {
  try {    
    const result = await miapi.searchForDepartment(req.params.query);
    res.send(result);
  } catch (err) {
    res.sendStatus(500);
    throw new Error('Error in get route', err)
  }
});

router.get('/image/:id/:size', async (req, res) => {
  try {
    const { id, size } = req.params;
    const result = await miapi.getImage(id, size);
    res.send(result);
  } catch (err) {
    res.sendStatus(500);
    throw new Error('Error in get route', err)
  }
});

module.exports = router;