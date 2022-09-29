import { VercelRequest, VercelResponse } from "@vercel/node";


export default (req: VercelRequest, res: VercelResponse) => {


var azure = require('azure-storage');

var tableSvc = azure.createTableService('familyfantasydatastorage', '1xlDu5Gdn50+e/yJikRLotW+gZNpQaOXYxMJYhOmp36ZIkpSrAHTef5idfae6X+lfablf4lC6HrMrxu+1MbsAA==');

var query = new azure.TableQuery()

  tableSvc.queryEntities('Transactions',query, null, function(error, result, response) {
    if(!error) {

    const returnedValues = response.body.value

    const mappedValues = returnedValues.map((obj) => {
      return { ...obj, ProcessDate: new Date(obj.ProcessDate)}
    })
    
    const sortedAsc = mappedValues.sort(
      (objA, objB) => objB.ProcessDate.getTime() - objA.ProcessDate.getTime()
    )

    const formatDate = sortedAsc.map((obj) => {
      return { ...obj, ProcessDate: obj.ProcessDate.toLocaleDateString()}
    })

    const removeCancelled = formatDate.filter(item => item.Status != 'CANCELED')

      res.status(200).send(JSON.stringify(removeCancelled));
    }
  });

};