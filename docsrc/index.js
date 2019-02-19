/* eslint-disable import/named */
/* eslint-disable import/max-dependencies */

import React from "react";
import { render } from "react-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { blue, red } from "@material-ui/core/colors";
import Markdown from "../src/MaterialMarkdown";

import ComponentDemo from "../src/index";
import BasicDemo from "demo-source-loader!./Basic.demo";
import WithSourceDemo from "demo-source-loader!./WithSource.demo";
import WithSourceLoaderDemo from "demo-source-loader!./WithSourceLoader.demo";
import WithChildrenTextDemo from "demo-source-loader!./WithChildrenText.demo";
import packageDetails from "../package.json";
import readme from "raw-loader!../README.md";

const sandboxTheme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: red
    },
    typography: {
        useNextVariants: true,
    }
});

function Docs() {    
    return (
        <MuiThemeProvider theme={ sandboxTheme }>
            <Typography component="div" style={ { maxWidth: "750px", margin: "0 auto", marginBottom: "100px" } }>
                <Typography variant="h2">Material Component Demo { packageDetails.version }</Typography>
                <Markdown source={ readme } />
                <Typography variant="h5" style={ { fontWeight: "bold", marginTop: "24px" } }>Feature demos</Typography>
                <Typography>
                    Note that the following are "demos of demos" - the area in grey is what you will get when using this package on a typical react component. The outer toggle will show you the code of the feature being demonstrated, and the inner one just the simple spinner code.
                </Typography>
                <ComponentDemo title="Basic Demo with no source or commentary" DemoComponent={ BasicDemo } style={ { margin: "24px 0" } } />
                <ComponentDemo title="With source and text (from props)" DemoComponent={ WithSourceDemo } style={ { margin: "24px 0" } } />
                <ComponentDemo title="With source/text (from demo-source-loader)" DemoComponent={ WithSourceLoaderDemo } style={ { margin: "24px 0" } } />
                <ComponentDemo title="With text (from children)" DemoComponent={ WithChildrenTextDemo } style={ { margin: "24px 0" } } />
            </Typography>
        </MuiThemeProvider>
    );
}

render(<Docs />, document.getElementById("docs"));
