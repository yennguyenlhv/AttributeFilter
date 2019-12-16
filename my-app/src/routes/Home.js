import React from "react";
import ExampleWithSource from "../components/utils/ExampleWithSource";

import AttributeFilterComponent from "../components/AttributeFilterComponent";
import BBEmbedded from "../components/BBEmbedded";
import AttributeFilterExample from "../components/AttributeFilterExample";
import DateFilter from "../components/DateFilter";
import PPComparition from "../components/PPComparition";
import BarChartExportExample from "../components/BarChartExportExample";
import DrillWithExternalDataExample from "../components/DrillWithExternalDataExample";
import DrillSimpleExample from "../components/DrillSimpleExample";
import AppAttributeFilter from "../components/AppAttributeFilter";
import DrillKPI from "../components/DrillKPI";
import DrillHeadline from "../components/DrillHeadline";

import AttributeFilterComponentSRC from "!raw-loader!../components/AttributeFilterComponent"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import BBEmbeddedSRC from "!raw-loader!../components/BBEmbedded"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import AttributeFilterExampleSRC from "!raw-loader!../components/AttributeFilterExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import DateFilterSRC from "!raw-loader!../components/DateFilter"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import PPComparitionSRC from "!raw-loader!../components/PPComparition"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import BarChartExportExampleSRC from "!raw-loader!../components/BarChartExportExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import DrillWithExternalDataExampleSRC from "!raw-loader!../components/DrillWithExternalDataExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import DrillSimpleExampleSRC from "!raw-loader!../components/DrillSimpleExample"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import AppAttributeFilterSRC from "!raw-loader!../components/AppAttributeFilter"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import DrillKPISRC from "!raw-loader!../components/DrillKPI"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import DrillHeadlineSRC from "!raw-loader!../components/DrillKPI"; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first

import Page from "../components/Page";

// const Home = () => {
//     return <Page>Place your content here&hellip;</Page>;
// };

export const Home = () => (
    <div>
        <h1>Visualization by identifier</h1>
        <p>
            These are the examples of the generic Visualization component that uses identifier to identify
            insights.
        </p>
        <hr className="separator" />
        <h2 id="column-chart">Column Chart</h2>
        <ExampleWithSource for={AttributeFilterComponent} source={AttributeFilterComponentSRC} />
        <hr className="separator" />
        <h2 id="column-chart">Column Chart</h2>
        <ExampleWithSource for={AttributeFilterComponent} source={AttributeFilterComponentSRC} /> */}
        <hr className="separator" />
        <h2 id="column-chart">Column Chart</h2>
        <ExampleWithSource for={BBEmbedded} source={BBEmbeddedSRC} />
        <h2 id="column-chart">Column Chart</h2>
        <ExampleWithSource for={AttributeFilterExample} source={AttributeFilterExampleSRC} />
        <h2>Attribute Filter Example</h2>
        <ExampleWithSource for={DateFilter} source={DateFilterSRC} />
        <h2 id="column-chart">Column Chart</h2>
        <ExampleWithSource for={PPComparition} source={PPComparitionSRC} />
        <h2 id="column-chart">Column Chart</h2>
        <ExampleWithSource for={BarChartExportExample} source={BarChartExportExampleSRC} />
        <h2 id="column-chart">Drill</h2>
        <ExampleWithSource for={DrillWithExternalDataExample} source={DrillWithExternalDataExampleSRC} />
        <h2 id="column-chart">Simple drill</h2>
        <ExampleWithSource for={DrillSimpleExample} source={DrillSimpleExampleSRC} />
        <h2 id="column-chart">Re drill</h2>
        <ExampleWithSource for={AppAttributeFilter} source={AppAttributeFilterSRC} />
        <h2 id="column-chart">Re drill</h2>
        <ExampleWithSource for={DrillKPI} source={DrillKPISRC} />
        <h2 id="column-chart">Re drill</h2>
        <ExampleWithSource for={DrillHeadline} source={DrillHeadlineSRC} />
    </div>
);

export default Home;
