[![npm package](https://img.shields.io/npm/v/material-component-demo.svg)](https://www.npmjs.com/package/material-component-demo)
[![npm downloads](https://img.shields.io/npm/dw/material-component-demo.svg)](https://www.npmjs.com/package/material-component-demo)
[![licence](https://img.shields.io/npm/l/material-component-demo.svg)](https://opensource.org/licenses/MIT)
[![codecov](https://img.shields.io/codecov/c/gh/atropos-tech/material-component-demo.svg)](https://codecov.io/gh/atropos-tech/material-component-demo)
[![CircleCI](https://circleci.com/gh/atropos-tech/material-component-demo/tree/master.svg?style=svg)](https://circleci.com/gh/atropos-tech/material-component-demo/tree/master)
[![bundlephobia](https://img.shields.io/bundlephobia/min/material-component-demo.svg)](https://bundlephobia.com/result?p=material-component-demo)
[![LGTM alerts](https://img.shields.io/lgtm/alerts/g/atropos-tech/material-component-demo.svg)](https://lgtm.com/projects/g/atropos-tech/material-component-demo/alerts)
[![LGTM grade](https://img.shields.io/lgtm/grade/javascript/g/atropos-tech/material-component-demo.svg)](https://lgtm.com/projects/g/atropos-tech/material-component-demo/context:javascript)

A component that allows easy display of nice-looking React component demos, with optional source code display. Designed for easy interoperation with [`demo-source-loader`](https://github.com/atropos-tech/demo-source-loader).

# Props
| Prop name | Type | Required? | Description |
| --------- | ---- | --------- | ----------- |
| `DemoComponent`   | React component | yes | A component containing an operational demo of your compontn. This should not be your actual documented component, but a wrapper that provides any necessary props, state management, imports, etc. |
| `title` | string | yes | A brief description of the feature being demonstrated |
| `demoSource` | string | no | The source code of the demo component. This will be displayed with syntax highlighting below the demo, and can be expanded and collapsed with a toggle. If not supplied, the toggle will be missing. |
| `markdown` | string | no | An explanation of the feature being demonstrated, in Markdown format. |
| `children` | React node | no | An explanation of the feature being demonstrated, as a React component. This will be ignored if the `markdown` prop is supplied |

All other props will be spread to the root DOM node.
