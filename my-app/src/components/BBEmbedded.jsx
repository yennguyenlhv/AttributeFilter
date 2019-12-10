// (C) 2007-2018 GoodData Corporation
import React, { Component } from "react";
import "@gooddata/react-components/styles/css/main.css";
import { Visualization } from "@gooddata/react-components";

import { projectId, areaVisualizationIdentifier } from "./utils/fixtures.js";

export class BBEmbedded extends Component {
    render() {
        return (
            <div style={{ height: 300 }}>
                {/* <Visualization
                    projectId={projectId}
                    identifier="aab1c48ZinTZ"
                /> */}

                <Visualization
                    projectId={projectId}
                    uri="/gdc/md/ht3owbpk6h0yfjtkcsgva3osu3z7paol/obj/8895"
                    experimentalVisExecution={true}
                />
            </div>
        );
    }
}

export default BBEmbedded;
