import React from 'react';
import { Kpi } from '@gooddata/react-components';
import '@gooddata/react-components/styles/css/main.css';
function KPI() {
    return (
      <div style={{ height: 100 }}>
          <Kpi
              measure="acKjadJIgZUN"
              projectId="j73iva403thqmu16cdfz8buv3721bn8x"
              filters={[
                {
                  positiveAttributeFilter: {
                    displayForm: {
                        identifier: 'label.activity.activitytype'
                    },
                    in: ['/gdc/md/j73iva403thqmu16cdfz8buv3721bn8x/obj/1251/elements?id=169663','/gdc/md/j73iva403thqmu16cdfz8buv3721bn8x/obj/1251/elements?id=169661'],
                    // textFilter: true
                }
              }
            ]}
          />
        </div>
    );
  }
  
  export default KPI;