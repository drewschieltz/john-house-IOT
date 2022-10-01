

module.exports = async function (context, req) {
    const { TableClient, AzureNamedKeyCredential } = require("@azure/data-tables");

    const account = 'johnhouseiot';
    const accountKey = 'oWmLX4e/1sx5IpoiVC7j6ceDseKxxKwWFJJsL7ZMxg15p7UhUJ7oueyHBLRKvOYPls9GXs7Lza84+AStbF85IQ==';
    
    const credential = new AzureNamedKeyCredential(account, accountKey);
    const client = new TableClient(`https://${account}.table.core.windows.net`, 'Users', credential);
    
    let queryFilters = []
    if (req.query.page != null) {
        let columnKey = null;
        switch (req.query.page) {
            case 'thermostats': columnKey = 'ThermostatsPageAccess';
        }

        if (columnKey != null) { queryFilters.push(columnKey + ' eq true'); }
    }

    if (req.query.email != null) { queryFilters.push('RowKey eq \'' + req.query.email + '\''); }

    let queryFilter = ''
    for (let i=0; i < queryFilters.length; i++) {
        queryFilter += queryFilters[i]
        if (i < queryFilters.length-1) { queryFilter += ' and '}
    }

    let entitiesIter = client.listEntities({
        queryOptions: { filter: queryFilter, }
    });

    let i = 1;
    for await (const entity of entitiesIter) {
        console.log(`Entity${i}: PartitionKey: ${entity.partitionKey} RowKey: ${entity.rowKey}`);
        i++;
    }
}
