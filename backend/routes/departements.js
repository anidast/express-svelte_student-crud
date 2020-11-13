const router = require('express').Router();
let Departement = require('../models/departement');

router.route('/').get((req, res) => {
  Departement.find()
    .then(departements => res.json(departements))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;

  const newDepartement = new Departement({name});

  newDepartement.save()
    .then(() => res.json('Departement added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Departement.findById(req.params.id)
    .then(departement => res.json(departement))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Departement.findByIdAndDelete(req.params.id)
    .then(() => res.json('Departement deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').post((req, res) => {
  Departement.findById(req.params.id)
    .then(departement => {
      departement.name = req.body.name;

      departement.save()
        .then(() => res.json('Departement updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;