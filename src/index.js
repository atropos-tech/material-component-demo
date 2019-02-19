import React, { useState } from "react";
import { Typography, Collapse, FormControlLabel, Switch } from "@material-ui/core";
import Markdown from "./MaterialMarkdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark as codeStyle } from "react-syntax-highlighter/dist/styles/prism";
import { any, string, node } from "prop-types";

function withoutExports(sourceCode) {
    return sourceCode.replace(/export default\s*/g, "");
}

function getRubric(markdown, DemoComponent, children) {
    const suppliedMarkdown = markdown || DemoComponent.__markdown__;
    if (suppliedMarkdown) {
        return <Markdown source={ suppliedMarkdown } />;
    }
    return children;
}

export default function ComponentDemo({ DemoComponent, markdown, title, demoSource, children, language = "jsx", ...otherProps }) {
    const [ isCodeOpen, setCodeOpen ] = useState(false);
    const codeSwitch = <Switch checked={ isCodeOpen } onChange={ (event, newState) => setCodeOpen(newState) } />;
    const rubric = getRubric(markdown, DemoComponent, children);
    const sourceCode = demoSource || DemoComponent.__source__;
    return (
        <section {...otherProps}>
            <div style={ { display: "flex", alignItems: "center" } }>
                <Typography variant="h5" style={ { flex: "1 1 0"}}>{ title }</Typography>
                {
                    sourceCode && <FormControlLabel control={ codeSwitch } label="Show/hide source code" />
                }
            </div>
            { rubric }
            <DemoComponent />
            {
                sourceCode && (
                    <Collapse in={ isCodeOpen }>
                        <SyntaxHighlighter language={ language } style={ codeStyle }>{ withoutExports(sourceCode) }</SyntaxHighlighter>
                    </Collapse>
                )
            }
        </section>
    );
}

ComponentDemo.propTypes = {
    DemoComponent: any.isRequired,
    title: string.isRequired,
    demoSource: string,
    markdown: string,
    children: node,
    language: string
};
