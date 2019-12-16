// (C) 2007-2019 GoodData Corporation
import React, { Component } from "react";
import { Headline, Model } from "@gooddata/react-components";
import { HeaderPredicateFactory } from "@gooddata/react-components";

import "@gooddata/react-components/styles/css/main.css";

import { projectId, franchiseFeesIdentifier, franchiseFeesAdRoyaltyIdentifier } from "./utils/fixtures";

const primaryMeasure = Model.measure(franchiseFeesIdentifier).format("#,##0");
const secondaryMeasure = Model.measure(franchiseFeesAdRoyaltyIdentifier).format("#,##0");

export class DrillHeadline extends Component {
    onLoadingChanged(...params) {
        // eslint-disable-next-line no-console
        return console.log("ColumnChartExample onLoadingChanged", ...params);
    }

    onError(...params) {
        // eslint-disable-next-line no-console
        return console.log("ColumnChartExample onError", ...params);
    }

    render() {
        return (
            <div className="s-headline" style={{ display: "flex" }}>
                <style jsx>
                    {`
                        .column {
                            flex: "1 1 50%";
                        }
                    `}
                </style>
                <div className="column">
                    <Headline
                        projectId={projectId}
                        primaryMeasure={primaryMeasure}
                        onLoadingChanged={this.onLoadingChanged}
                        onError={this.onError}
                    />
                </div>
                <div className="column">
                    <Headline
                        projectId={projectId}
                        primaryMeasure={primaryMeasure}
                        secondaryMeasure={secondaryMeasure}
                        onFiredDrillEvent={data => {
                            console.log(data.executionContext);
                        }}
                        onLoadingChanged={this.onLoadingChanged}
                        onError={this.onError}
                        drillableItems={[
                            //HeaderPredicateFactory.identifierMatch('drillable-Identifier1'),
                            //HeaderPredicateFactory.uriMatch("/gdc/md/ht3owbpk6h0yfjtkcsgva3osu3z7paol/obj/2209"),
                            HeaderPredicateFactory.identifierMatch("aaEGaXAEgB7U"),
                            HeaderPredicateFactory.identifierMatch("aabHeqImaK0d"),
                        ]}
                    />
                </div>
            </div>
        );
    }
}

export default DrillHeadline;
