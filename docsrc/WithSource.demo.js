import React from "react";
import ComponentDemo from "../src/index";
import ProgressDemo from "./Progress.demo";

const source = `import React from "react";
import { CircularProgress } from "@material-ui/core";

function ProgressDemo() {
    return <CircularProgress />;
}`;

const markdown = "Here's how you make a basic progress spinner.";

export default function WithSourceDemo() {
    return (
        <div style={ { backgroundColor: "#eee", padding: "16px" } }>
            <ComponentDemo title="Circular Progress" DemoComponent={ ProgressDemo } demoSource={ source } markdown={ markdown }/>
        </div>
    );
}
