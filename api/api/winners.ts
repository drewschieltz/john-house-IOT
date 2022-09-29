import { VercelRequest, VercelResponse } from "@vercel/node";

export default (req: VercelRequest, res: VercelResponse) => {

var azure = require('azure-storage');

var tableSvc = azure.createTableService('familyfantasydatastorage', '1xlDu5Gdn50+e/yJikRLotW+gZNpQaOXYxMJYhOmp36ZIkpSrAHTef5idfae6X+lfablf4lC6HrMrxu+1MbsAA==');

var query = new azure.TableQuery();


  tableSvc.queryEntities('WeeklyPoints',query, null, function(error, result, response) {
    if(!error) {

      const value = response.body.value
      const order = value.sort(function(objA, objB){
        return objB.Week - objA.Week; // sort in descending order
      })

      res.status(200).send(JSON.stringify(order));
    }
  });

};