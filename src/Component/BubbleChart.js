import React from 'react'
import '@gooddata/react-components/styles/css/main.css';
import { BubbleChart } from '@gooddata/react-components';
import {Model} from '@gooddata/react-components'
const measures=[Model.measure('aoJqpe5Ib4mO'),Model.measure('afSEwRwdbMeQ'), Model.measure('aazb6kroa3iC')];
const viewBy = Model.attribute('label.owner.id.name')
// const measures = [
//     {
//         measure: {
//             localIdentifier: 'measureXaxis',
//             definition: {
//                 measureDefinition: {
//                     item: {
//                         identifier:'aoJqpe5Ib4mO'
//                     }
//                 }
//             },
//             format: '#,##0'
//         }
//     },
//     {
//         measure: {
//             localIdentifier: 'measureYaxis',
//             definition: {
//                 measureDefinition: {
//                     item: {
//                         identifier:'afSEwRwdbMeQ'
//                     }
//                 }
//             },
//             format: '#,##0'
//         }
//     },
//     {
//         measure: {
//             localIdentifier: 'measureSize',
//             definition: {
//                 measureDefinition: {
//                     item: {
//                         identifier:'aazb6kroa3iC'
//                     }
//                 }
//             },
//             format: '#,##0'
//         }
//     }
// ];
// const viewBy = {
//     visualizationAttribute: {
//         displayForm: {
//             identifier: 'label.owner.id.name'
//         },
//         localIdentifier: 'viewBy'
//     }
// };
function BbChart() {
    return (
    <div style={{height:200, marginTop:100}}>
        <BubbleChart
            projectId="j73iva403thqmu16cdfz8buv3721bn8x"
            xAxisMeasure={measures[0]}
            yAxisMeasure={measures[1]}
            size={measures[2]}
            viewBy={viewBy}
        />
    </div>
    )
}
export default BbChart;