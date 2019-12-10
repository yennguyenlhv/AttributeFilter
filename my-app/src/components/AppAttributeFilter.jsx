//import "babel-polyfill";
import React, { Component } from 'react';
import '@gooddata/react-components/styles/css/main.css';
//import './App.css';
//import logo from './logo.svg';
import { PivotTable, Visualization, Table, HeaderPredicateFactory, BarChart, ColumnChart, LineChart, AreaChart, Headline} from '@gooddata/react-components';
import { ScatterPlot, BubbleChart, PieChart, DonutChart, Treemap, Heatmap, AttributeFilter, Kpi} from '@gooddata/react-components';

import assign from 'lodash/assign';
import get from 'lodash/get';
import PropTypes from 'prop-types';
//import { Amount_test } from "../src/measures";

const projectId = 'nlj42rf2ymaccahhho0mr32mcudcf5ha';
const projectId_hyperloglog = 'nlj42rf2ymaccahhho0mr32mcudcf5ha';

const Amount = {
  "measure" : {
     "definition" : {
        "measureDefinition" : {
           "item" : {
              "uri" : "/gdc/md/nlj42rf2ymaccahhho0mr32mcudcf5ha/obj/1279"
           }
        }
     },
     "localIdentifier" : "m_measure",
     "title" : "Amount"
  }
};

const Sum_of_Amount = {
  "measure" : {
     "definition" : {
        "measureDefinition" : {
           "aggregation" : "sum",
           "item" : {
              "uri" : "/gdc/md/nlj42rf2ymaccahhho0mr32mcudcf5ha/obj/1144"
           }
        }
     },
     "format" : "#,##0.00",
     "localIdentifier" : "m_fact_measure",
     "title" : "Sum of Amount Fact"
  }
};

const Count_of_OppSnapshot = {
  "measure" : {
     "definition" : {
        "measureDefinition" : {
           "aggregation" : "count",
           "item" : {
              "uri" : "/gdc/md/nlj42rf2ymaccahhho0mr32mcudcf5ha/obj/1143"
           }
        }
     },
     "format" : "#,##0",
     "localIdentifier" : "m_att_measure",
     "title" : "Count of Opp. Snapshot _ ac"
  }
};

const Product = {
  "visualizationAttribute" : {
     "displayForm" : {
        "uri" : "/gdc/md/nlj42rf2ymaccahhho0mr32mcudcf5ha/obj/952"
     },
     "localIdentifier" : "a_product"
  }
};

const StageName = {
  "visualizationAttribute" : {
     "displayForm" : {
        "uri" : "/gdc/md/nlj42rf2ymaccahhho0mr32mcudcf5ha/obj/1805"
     },
     "localIdentifier" : "a_stagename"
  }
};

const Date_Closed = {
  "visualizationAttribute" : {
     "displayForm" : {
        "uri" : "/gdc/md/nlj42rf2ymaccahhho0mr32mcudcf5ha/obj/324"
     },
     "localIdentifier" : "a_date_closed"
  }
};

const filterProduct = {
   "positiveAttributeFilter" : {
      "displayForm" : {
         "uri" : "/gdc/md/nlj42rf2ymaccahhho0mr32mcudcf5ha/obj/952"
      },
      "in" : [
         "/gdc/md/nlj42rf2ymaccahhho0mr32mcudcf5ha/obj/949/elements?id=168279",
         "/gdc/md/nlj42rf2ymaccahhho0mr32mcudcf5ha/obj/949/elements?id=168282",
         "/gdc/md/nlj42rf2ymaccahhho0mr32mcudcf5ha/obj/949/elements?id=169655"
      ]
   }
};
//const absoluteDate = Model.absoluteDateFilter('closed.dataset.dt','2010-01-01','2010-06-30');
const absoluteDate = {
   "absoluteDateFilter" : {
      "dataSet" : {
         "uri" : "/gdc/md/nlj42rf2ymaccahhho0mr32mcudcf5ha/obj/330"
      },
      "from" : "2010-01-01",
      "to" : "2010-12-31"
   }
};
//const relativeDate = Model.relativeDateFilter('closed.dataset.dt','GDC.time.year',-8,-8);
const relativeDate = {
   "relativeDateFilter" : {
      "dataSet" : {
         "uri" : "/gdc/md/nlj42rf2ymaccahhho0mr32mcudcf5ha/obj/330"
      },
      "from" : -8,
      "granularity" : "GDC.time.year",
      "to" : -8
   }
};


class AppAttributeFilter extends Component {

  constructor(props) {
         super(props);
         this.state = {
            filters: [relativeDate, filterProduct]
         };
    }

    onApply = (filter) => {
            console.log('AttributeFilterExample filter', filter);
            const filters = [];
            const isPositive = !!filter.in;
            const elementsProp = isPositive ? 'in' : 'notIn';
            var attrUri = "/gdc/md/nlj42rf2ymaccahhho0mr32mcudcf5ha/obj/949";
            const valules = filter[elementsProp].map(element => (`/gdc/md/${projectId}/obj/949/elements?id=${element}`)) ;
            console.log('AttributeFilterExample filter', valules);
            //var attrUri = `/gdc/md/${projectId}/obj/75727`;
            //end control handle filter with more attributes
            if(valules.length > 0){
            filters.push({
               [isPositive ? 'positiveAttributeFilter' : 'negativeAttributeFilter']: {
                  displayForm: {
                        identifier: filter.id //if define attribute filter with identifier then id will return identifier
                  },
               //uri của attribute không phải của label
                  [elementsProp]: valules 
               }
            });
         
            filters.push(relativeDate)
            
            }
            this.setState({filters});
      }

// MAIN CONTENT
  render() {
    const { filters } = this.state;
    return (
      <div className="App">
           //////////////////////////////////////////////////
           <div className="App" style={{width: 1500, height: 50, marginLeft: 0}}>
               <AttributeFilter
                        identifier="label.product.id.name"
                        projectId={projectId}
                        fullscreenOnMobile={false}
                        onApply={this.onApply}
                     />
            </div>
          //////////////////////////////////////////////////
          <div><p>Bucket Component</p></div>
          <div style={{ height: 700, width: 1200 }}>
            <PivotTable
              projectId={projectId}
              measures={[Amount, Sum_of_Amount]}
              rows={[Product]}
              //rows={[hyperloglog_attribute]}
              //stackBy={StageName}
              //totals = {totals}
              filters={filters}
            />
          </div>
          <div style={{ height: 100, width: 800 }}>
            <p>END PAGE</p>
          </div>
      </div>
    );
  }
}

export default AppAttributeFilter;