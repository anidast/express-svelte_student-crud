const router = require('express').Router();
let Major = require('../models/major');

router.route('/').get((req, res) => {
  Major.find()
    .then(majors => res.json(majors))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;

  const newMajor = new Major({name});

  newMajor.save()
    .then(() => res.json('Major added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Major.findById(req.params.id)
    .then(major => res.json(major))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Major.findByIdAndDelete(req.params.id)
    .then(() => res.json('Major deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').post((req, res) => {
  Major.findById(req.params.id)
    .then(major => {
      major.name = req.body.name;

      major.save()
        .then(() => res.json('Major updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;