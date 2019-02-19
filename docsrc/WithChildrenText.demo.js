import React from "react";
import ComponentDemo from "../src/index";
import ProgressDemo from "./Progress.demo";

export default function WithChildrenTextDemo() {
    return (
        <div style={ { backgroundColor: "#eee", padding: "16px" } }>
            <ComponentDemo title="Circular Progress" DemoComponent={ ProgressDemo }>
                This is how you make a basic progress spinner.
            </ComponentDemo>
        </div>
    );
}
