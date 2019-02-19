import React from "react";
import ComponentDemo from "../src/index";
import ProgressDemo from "demo-source-loader!./Progress.demo";

const source = `import React from "react";
import { CircularProgress } from "@material-ui/core";

export default function ProgressDemo() {
    return <CircularProgress />;
}`;

const markdown = "Here's how you make a basic progress spinner.";

export default function WithSourceLoaderDemo() {
    return (
        <div style={ { backgroundColor: "#eee", padding: "16px" } }>
            <ComponentDemo title="Circular Progress" DemoComponent={ ProgressDemo } demoSource={ source } markdown={ markdown }/>
        </div>
    );
}
