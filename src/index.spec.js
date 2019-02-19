/* eslint-env jest */
/* eslint-disable no-magic-numbers */

import React from "react";
import { mount } from "enzyme";
import ComponentDemo from "./index";
import JssProvider from "react-jss/lib/JssProvider";

// workaround for non-stable classnames generated in JSS
// https://github.com/mui-org/material-ui/issues/9492#issuecomment-368205258
//
// forces deterministic classnames that may clash in a wider app (but are safe in unit tests)
//
// Should be addressed in future material-ui release, see
//   https://github.com/mui-org/material-ui/issues/14357
function mountStable(reactElement, ...other) {
    const generateClassName = (rule, styleSheet) => `${styleSheet.options.classNamePrefix}-${rule.key}`;
    const elementWithStableClassNames = (
        <JssProvider generateClassName={ generateClassName }>
            { reactElement }
        </JssProvider>
    );
    return mount(elementWithStableClassNames, ...other);
}

describe("MultiPicker component", () => {
    it("renders empty content", () => {
        expect.assertions(1);

        const wrapper = mountStable(<ComponentDemo />);
        expect(wrapper).toMatchSnapshot();
    });
});
