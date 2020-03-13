import React from 'react';
import '@gooddata/react-components/styles/css/main.css';
import {Model} from '@gooddata/react-components';
import {ColumnChart} from '@gooddata/react-components'
const measures = [
    Model.measure('aaeb7jTCfexV').localIdentifier('m1'), 
    Model.measure('aazb6kroa3iC').localIdentifier('m2'),
    Model.arithmeticMeasure(['m1','m2'],'sum')
];
const viewby = Model.attribute('label.owner.id.name')
function Column() {
    return(
        <div style={{height: 300, marginTop: 100}}>
            <ColumnChart 
                projectId="j73iva403thqmu16cdfz8buv3721bn8x"
                measures = {measures}
                viewBy = {viewby}
            />
        </div>
    )
}
export default Column;