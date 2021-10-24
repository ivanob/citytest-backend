export default {
    BookingsTable: {
        Type: 'AWS::DynamoDB::Table',
        DeletionPolicy: 'Retain',
        Properties: {
            TableName: '${self:provider.environment.BOOKINGS_TABLE}',
            AttributeDefinitions: [
                { AttributeName: 'id', AttributeType: 'S' }
            ],
            KeySchema: [
                { AttributeName: 'id', KeyType: 'HASH' }
            ],
            ProvisionedThroughput: {
                ReadCapacityUnits: 100,
                WriteCapacityUnits: 100
            }
        }
    },
    RoomsTable: {
        Type: 'AWS::DynamoDB::Table',
        DeletionPolicy: 'Retain',
        Properties: {
            TableName: '${self:provider.environment.ROOMS_TABLE}',
            AttributeDefinitions: [
                { AttributeName: 'number', AttributeType: 'N' },
                { AttributeName: 'name', AttributeType: 'S' },
                { AttributeName: 'location', AttributeType: 'S' }
            ],
            KeySchema: [
                { AttributeName: 'number', KeyType: 'HASH' }
            ],
            ProvisionedThroughput: {
                ReadCapacityUnits: 100,
                WriteCapacityUnits: 100
            }
        }
    },
    PromotionsTable: {
        Type: 'AWS::DynamoDB::Table',
        DeletionPolicy: 'Retain',
        Properties: {
            TableName: '${self:provider.environment.PROMOTIONS_TABLE}',
            AttributeDefinitions: [
                { AttributeName: 'agent', AttributeType: 'S' },
                { AttributeName: 'code', AttributeType: 'N' },
                { AttributeName: 'used', AttributeType: 'B' }
            ],
            KeySchema: [
                { AttributeName: 'number', KeyType: 'HASH' }
            ],
            ProvisionedThroughput: {
                ReadCapacityUnits: 100,
                WriteCapacityUnits: 100
            }
        }
    }
}