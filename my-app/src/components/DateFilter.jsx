// (C) 2007-2018 GoodData Corporation
import React, { Component } from 'react';
import '@gooddata/react-components/styles/css/main.css';
import { Visualization } from '@gooddata/react-components';
import { AttributeFilter, ColumnChart, Model } from '@gooddata/react-components';

import { projectId, locationResortIdentifier } from 'D:/SDK/sdk-boiler-195/my-app/src/components/utils/fixtures.js';

export class DateFilter extends Component {
    
    render() {
        const locationResort = Model.attribute(locationResortIdentifier);
        return (
            <div style={{ height: 300 }}>
    <ColumnChart
        projectId={projectId}
        measures={[{
            measure: {
                localIdentifier: 'totalSales',
                definition: {
                    measureDefinition: {
                        item: {
                            identifier: 'aa7ulGyKhIE5'
                        },
                        filters: [
                            {
                                negativeAttributeFilter: {
                                    displayForm: {
                                        identifier: 'label.menuitem.menucategory'
                                    },
                                    // Attribute element URIs
                                    notIn: ["/gdc/md/ht3owbpk6h0yfjtkcsgva3osu3z7paol/obj/2187/elements?id=6338473"]
                                }
                            },
                            // {
                            //     positiveAttributeFilter: {
                            //         displayForm: {
                            //             identifier: '<attribute-displayform-identifier>'
                            //         },
                            //         // Attribute element values
                            //         in: ['<attribute-element-value>', ...],
                            //         textFilter: true
                            //     }
                            // },
                        ],
                    }
                },
                alias: 'California sales'               
            }
        }]}
        viewBy={locationResort}
    />
</div>

        );
        
    }
}

export default DateFilter;
