import React from "react";
import ComponentDemo from "../src/index";
import { CircularProgress } from "@material-ui/core";

function ProgressDemo() {
    return <CircularProgress />;
}

export default function BasicDemoDemo() {
    return (
        <div style={ { backgroundColor: "#eee", padding: "16px" } }>
            <ComponentDemo title="Circular Progress" DemoComponent={ ProgressDemo } />
        </div>
    );
}
