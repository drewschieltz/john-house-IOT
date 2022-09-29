import { VercelRequest, VercelResponse } from "@vercel/node";

export default (req: VercelRequest, res: VercelResponse) => {

var azure = require('azure-storage');

//Get the query params

const team = req.query.team;

var tableSvc = azure.createTableService('familyfantasydatastorage', '1xlDu5Gdn50+e/yJikRLotW+gZNpQaOXYxMJYhOmp36ZIkpSrAHTef5idfae6X+lfablf4lC6HrMrxu+1MbsAA==');

var query = new azure.TableQuery()

  tableSvc.queryEntities('NFLTeamRecords',query, null, function(error, result, response) {
    if(!error) {

      const returnedNFLTeams = response.body.value;

      var getNFLTeam = returnedNFLTeams.filter(x => x.WinnerTie == team || x.LoserTie == team);


      res.status(200).send(JSON.stringify(getNFLTeam));
    }
  });

};