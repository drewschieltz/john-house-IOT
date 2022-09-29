export default (req, res) => {
    var azure = require('azure-storage');
    var azureTS = azure.createTableService('johnhouseiot', 'oWmLX4e/1sx5IpoiVC7j6ceDseKxxKwWFJJsL7ZMxg15p7UhUJ7oueyHBLRKvOYPls9GXs7Lza84+AStbF85IQ==');

    var query = new azure.TableQuery()
    azureTS.queryEntities('Users', query, null, function(error, result, response) {
        if(!error) {
            const returnedValues = response.body.value
            
            const mappedValues = returnedValues.map((obj) => {
                return { ...obj, ProcessDate: new Date(obj.ProcessDate)}
            })
    
            const sortedAsc = mappedValues.sort((objA, objB) => objB.ProcessDate.getTime() - objA.ProcessDate.getTime())

            const formatDate = sortedAsc.map((obj) => {
                return { ...obj, ProcessDate: obj.ProcessDate.toLocaleDateString()}
            })

            const removeCancelled = formatDate.filter(item => item.Status != 'CANCELED')
            res.status(200).send(JSON.stringify(removeCancelled));
        }
    });
};