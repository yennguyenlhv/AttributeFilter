// (C) 2007-2018 GoodData Corporation
import React, { Component } from "react";
import "@gooddata/react-components/styles/css/main.css";
import { Visualization } from "@gooddata/react-components";
import { HeaderPredicateFactory } from "@gooddata/react-components";
import { Kpi } from "@gooddata/react-components";

import { projectId, areaVisualizationIdentifier } from "./utils/fixtures.js";

export class DrillKPI extends Component {
    render() {
        return (
            <div style={{ height: 300 }}>
                <Kpi
                    measure="aaIHiWZjfWNA"
                    projectId={projectId}
                    drillableItems={[
                        //HeaderPredicateFactory.identifierMatch('drillable-Identifier1'),
                        //HeaderPredicateFactory.uriMatch("/gdc/md/ht3owbpk6h0yfjtkcsgva3osu3z7paol/obj/2209"),
                        HeaderPredicateFactory.identifierMatch("aaIHiWZjfWNA"),
                    ]}
                />
            </div>
        );
    }
}

export default DrillKPI;
