import resource from 'resource-router-middleware';
import bills from '../models/bill';
import request from 'request';

export default resource({

  /** Property name to store preloaded entity on `request`. */

    id : 'bill',

  /** For requests with an `id`, you can auto-load the entity.
   *  Errors terminate the request, success sets `req[id] = data`.
   */
  load(req, id, callback) {
    // var bill = bills.find(bill => bill.popong_idx === parseInt(id, 10));
    // var err = typeof parseInt(id, 10) ===  'number' ? null : 'Not found';
    let url = 'http://api.popong.com/v0.1/bill/' + id + '?api_key=test';
    request.get(url, (err, res, body) => {
      let bill = body;
      let error = body.status === 404 ? new Error('Not Found') : null;
      callback(error, bill);
    });
  },

  /** GET / - List all entities */
  index({ params }, res) {
    res.json([]);
  },

  // /** POST / - Create a new entity */
  // create({ body }, res) {
  //   body.id = people.length.toString(36);
  //   people.push(body);
  //   res.json(body);
  // },

  /** GET /:id - Return a given entity */
  read({ bill }, res) {
    let data = JSON.parse(bill);
    bills.get(data.link_id, (error, body) => {
      let result = {};
      
      result.mainSponsor = data.sponsor;
      result.sponsorList = body;
      
      res.json(result);
    })
  },

  // /** PUT /:id - Update a given entity */
  // update({ person, body }, res) {
  //   for (let key in body) {
  //     if (key!=='id') {
  //       person[key] = body[key];
  //     }
  //   }
  //   res.sendStatus(204);
  // },
  //
  // /** DELETE /:id - Delete a given entity */
  // delete({ person }, res) {
  //   people.splice(people.indexOf(person), 1);
  //   res.sendStatus(204);
  // }
});
