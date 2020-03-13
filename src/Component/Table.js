import React from 'react';
import '@gooddata/react-components/styles/css/main.css';
import { Table } from '@gooddata/react-components';
const measures = [
    {
        measure: {
            localIdentifier: 'avgAmount',
            definition: {
                measureDefinition: {
                    item: {
                        identifier:'afSEwRwdbMeQ'
                    }
                }
            },
            format: '#,##0'
        }
    },
    {
        measure: {
            localIdentifier: 'won',
            definition: {
                measureDefinition: {
                    item: {
                        identifier:'aoJqpe5Ib4mO'
                    }
                }
            },
            format: '#,##0'
        }
    }
];
const attributes = [
    {
        visualizationAttribute: {
            displayForm: {
                identifier: 'label.owner.id.name'
            },
            localIdentifier: 'salesRep'
        }
    }
];
const totals = [
    {
        measureIdentifier: 'avgAmount',
        type: 'sum',
        attributeIdentifier: 'salesRep'
    }
]
function TableNormal() {
    return(
        <div style={{height:300, marginTop: 100}}>
            <Table
                projectId="j73iva403thqmu16cdfz8buv3721bn8x"
                measures = {measures}
                attributes={attributes}
                totals={totals}
            />
        </div>
    )
}
export default TableNormal;