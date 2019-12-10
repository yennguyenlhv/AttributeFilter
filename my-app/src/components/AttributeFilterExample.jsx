import React, { Component } from "react";
import { AttributeFilter, ColumnChart, Model } from "@gooddata/react-components";
import { HeaderPredicateFactory } from "@gooddata/react-components";

import "@gooddata/react-components/styles/css/main.css";
import {
    menuCategoryAttributeDFIdentifier,
    projectId,
    totalSalesIdentifier,
    menuCategoryAttributeDFUri,
} from "./utils/fixtures.js";

export class AttributeFilterExample extends Component {
    constructor(props) {
        super(props);
        this.onApply = this.onApply.bind(this);
        this.state = {
            filters: [],
            error: null,
        };
    }
    onLoadingChanged(...params) {
        // eslint-disable-next-line no-console
        console.info("AttributeFilterExample onLoadingChanged", ...params);
    }
    onApply = filter => {
        console.log("AttributeFilterExample filter", filter);

        const isPositive = !!filter.in;
        const elementsProp = isPositive ? "in" : "notIn";

        const filters = [
            {
                [isPositive ? "positiveAttributeFilter" : "negativeAttributeFilter"]: {
                    displayForm: {
                        identifier: filter.id,
                    },
                    [elementsProp]: filter[elementsProp].map(
                        element => `${menuCategoryAttributeDFUri}/elements?id=${element}`,
                    ),
                },
            },
        ];

        this.setState({ filters });
    };
    onError(...params) {
        // eslint-disable-next-line no-console
        console.info("AttributeFilterExample onLoadingChanged", ...params);
    }
    render() {
        const menuCategory = Model.attribute(menuCategoryAttributeDFIdentifier);
        const totalSales = Model.measure(totalSalesIdentifier)
            .format("#,##0")
            .alias("$ Total Sales");

        const { filters, error } = this.state;
        return (
            <div>
                <AttributeFilter
                    identifier={menuCategoryAttributeDFIdentifier}
                    projectId={projectId}
                    fullscreenOnMobile={false}
                    onApply={this.onApply}
                />
                <div style={{ height: 300 }}>
                    <ColumnChart
                        projectId={projectId}
                        measures={[totalSales]}
                        filters={filters}
                        viewBy={menuCategory}
                        onLoadingChanged={this.onLoadingChanged}
                        onError={this.onError}
                    />
                </div>
            </div>
        );
    }
}
export default AttributeFilterExample;
