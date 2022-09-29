import { VercelRequest, VercelResponse } from "@vercel/node";

export default (req: VercelRequest, res: VercelResponse) => {

const year = req.query.year;

var azure = require('azure-storage');

var tableSvc = azure.createTableService('familyfantasydatastorage', '1xlDu5Gdn50+e/yJikRLotW+gZNpQaOXYxMJYhOmp36ZIkpSrAHTef5idfae6X+lfablf4lC6HrMrxu+1MbsAA==');

var query = new azure.TableQuery()
  .where('Year eq ?', Number(year));


  tableSvc.queryEntities('Keepers',query, null, function(error, result, response) {
    if(!error) {
      res.status(200).send(JSON.stringify(response.body.value));
    }
  });

};