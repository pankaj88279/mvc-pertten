const express=require('express');
const { admincontroller } = require('../../controllars/adminconstroller');

const adminroutes=express.Router();

adminroutes.get('/get_student',admincontroller )
exports.adminroutes =adminroutes