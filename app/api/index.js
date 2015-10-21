import { Router } from 'express';
import assembly from './assembly';
import bill from './bill';

export default function() {
  var api = Router();

  // mount the people resource
  api.use('/assembly', assembly());
  api.use('/bill', bill);

  // perhaps expose some API metadata at the root
  api.get('/', (req, res) => {
    res.json({
      version : '1.0'
    });
  });

  return api;
}
