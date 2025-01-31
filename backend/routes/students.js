const router = require('express').Router();
let Student = require('../models/student');

router.route('/').get((req, res) => {
  Student.find()
    .then(students => res.json(students))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const nrp = req.body.nrp;
  const major = req.body.major;
  const address = req.body.address;

  const newStudent = new Student({name, nrp, major, address});

  newStudent.save()
    .then(() => res.json('Student added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Student.findById(req.params.id)
    .then(student => res.json(student))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Student.findByIdAndDelete(req.params.id)
    .then(() => res.json('Student deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').post((req, res) => {
  Student.findById(req.params.id)
    .then(student => {
      student.name = req.body.name;
      student.nrp = req.body.nrp;
      student.major = req.body.major;
      student.address = req.body.address;

      student.save()
        .then(() => res.json('Student updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;