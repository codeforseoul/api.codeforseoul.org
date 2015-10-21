import { Router } from 'express';
import Assembly from '../models/assembly';

export default function() {
  let api = Router();
  
  api.get('/:id?', ({ params, query }, res) => {
    let queries = query || {};
    if (params.id) queries['popong_idx'] = parseInt(params.id, 10);

    Assembly.find(queries, (err, assemblies) => {
      res.json(assemblies);
    });
  });

  return api;
}

