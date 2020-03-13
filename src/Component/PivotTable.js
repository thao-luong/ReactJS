import React from 'react';
import { PivotTable } from '@gooddata/react-components';
import '@gooddata/react-components/styles/css/main.css';
import { HeaderPredicateFactory } from '@gooddata/react-components';
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
const columns = [
    {
        visualizationAttribute: {
            displayForm: {
                identifier: 'label.stage.iswon'
            },
            localIdentifier: 'iswon'
        }
    }
];
const rows = [
    {
        visualizationAttribute: {
            displayForm: {
                identifier: 'label.owner.id.name'
            },
            localIdentifier: 'owner'
        }
    }
];
const totals = [
    {
        measureIdentifier: 'avgAmount',
        type: 'sum',
        attributeIdentifier: 'owner'
    }
]
function Pivot() {
    document.addEventListener('drill',function(arg) { console.log(arg.detail); });
    return(
        <div style={{ height: 300 }}>
        <PivotTable
            projectId="j73iva403thqmu16cdfz8buv3721bn8x"
            measures={measures}
            rows={rows}
            columns={columns}
            totals = {totals}
            drillableItems={[
                HeaderPredicateFactory.identifierMatch('aoJqpe5Ib4mO') 
              ]}
        />
        </div>
    )
}
export default Pivot;