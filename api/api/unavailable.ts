import { VercelRequest, VercelResponse } from "@vercel/node";

export default (req: VercelRequest, res: VercelResponse) => {

var azure = require('azure-storage');

var tableSvc = azure.createTableService('familyfantasydatastorage', '1xlDu5Gdn50+e/yJikRLotW+gZNpQaOXYxMJYhOmp36ZIkpSrAHTef5idfae6X+lfablf4lC6HrMrxu+1MbsAA==');

var query = new azure.TableQuery()
  .select('Year', 'KeeperId', 'KeeperName');

  tableSvc.queryEntities('Keepers',query, null, function(error, result, response) {
    if(!error) {

    const returnedValues = response.body.value
    //const selectedNames = returnedValues.map(({ KeeperId }) => KeeperId)

    const year1 = returnedValues.filter(x => x.Year === "2021");
    const year2 = returnedValues.filter(x => x.Year === "2022");

    const unavailabe = year2.filter((KeeperSet1) => year1.find(KeeperSet2 => KeeperSet1.KeeperName === KeeperSet2.KeeperName))
      res.status(200).send(JSON.stringify(unavailabe));
    }
  });

};