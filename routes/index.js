var express = require('express');
var router = express.Router();
var app=express();
var tokenVerify=require('../TokenVerify')
var Controller= require('../Controller/Main');



router.post('/signup', Controller.adduser);


router.post('/signin',Controller.userlogin);

router.post('/addslot',tokenVerify,Controller.addslot);
router.delete('/removeslot',tokenVerify,Controller.removeslot);
router.get('/allslots',tokenVerify, Controller.allslots);
router.post('/addgroup',tokenVerify,Controller.addgroup)
/*

router.get('/dashboard',Controller.tokenverification, function(req, res, next) {
  res.render('dashboard', { title: 'Admin Dashboard' });
});

router.get('/addpatient',Controller.tokenverification, function(req, res, next) {
  res.render('addpatient', { title: 'Admin Dashboard | Data Entry' });
});

router.get('/schedulepatient',Controller.tokenverification, function(req, res, next) {
  res.render('schedulepatient', { title: 'Admin Dashboard | Data Entry' });
});

router.get('/scheduleindex',Controller.tokenverification, function(req, res, next) {
  res.render('scheduleview', { title: 'Admin Dashboard | Data Entry' });
});
*/

router.get('/itemcrud',Controller.tokenverification, Controller.itemcrud);
router.get('/users',Controller.tokenverification, Controller.patientview);
router.get('/slots',Controller.tokenverification, Controller.allslots);

router.get('/testview', Controller.testcrud);
///////////backend Logic
router.post('/adduserlogic',Controller.adduser);
router.post('/deleteslot',Controller.removeslot);
router.post('/addgrouplogic',Controller.addgroup);
router.post('/addslot',Controller.addslot);
router.post('/userlogin',Controller.userlogin,Controller.loginandGetToken);
module.exports = router;
