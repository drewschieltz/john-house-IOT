import { VercelRequest, VercelResponse } from "@vercel/node";
import { number } from "joi";

export default (req: VercelRequest, res: VercelResponse) => {

var azure = require('azure-storage');

try {
  const team = req.query.id;
  
  if (Number(team) < 1){
    var query = new azure.TableQuery()
  }else{
    var query = new azure.TableQuery()
  .where('PartitionKey eq ?', team)
  }
  var tableSvc = azure.createTableService('familyfantasydatastorage', '1xlDu5Gdn50+e/yJikRLotW+gZNpQaOXYxMJYhOmp36ZIkpSrAHTef5idfae6X+lfablf4lC6HrMrxu+1MbsAA==');

  tableSvc.queryEntities('RosterPrice22',query, null, function(error, result, response) {
    if(!error) {
      res.status(200).send(JSON.stringify(response.body.value));
    }
  });

} catch (error) {
  var tableSvc = azure.createTableService('familyfantasydatastorage', '1xlDu5Gdn50+e/yJikRLotW+gZNpQaOXYxMJYhOmp36ZIkpSrAHTef5idfae6X+lfablf4lC6HrMrxu+1MbsAA==');

  var query = new azure.TableQuery()
  
  tableSvc.queryEntities('RosterPrice22',query, null, function(error, result, response) {
    if(!error) {
      res.status(200).send(JSON.stringify(response.body.value));
    }
  });
}




};