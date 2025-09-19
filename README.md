# @naverpay/browserslist-config

> Shareable [Browserslist](https://browsersl.ist) configuration for @naverpay/frontend

## Overview

This package provides a unified and maintainable list of supported browsers and Node.js versions for all NAVERPAY frontend services.

**Current support range:**
[>= 1%, not dead, not op_mini all, not ie >= 0, not ios_saf < 16, ios_saf >= 16, node >= 18.18.0, Chrome >= 106](https://browsersl.ist/#q=%3E%3D+1%25%2C+not+dead%2C+not+op_mini+all%2C+not+ie+%3E%3D+0%2C+not+ios_saf+%3C+16%2C+ios_saf+%3E%3D+16%2C+node+%3E%3D+18.18.0%2C+Chrome+%3E%3D+106&region=KR)

## Installation

```bash
npm install --save-dev @naverpay/browserslist-config
# or
yarn add -D @naverpay/browserslist-config
# or
pnpm add -D @naverpay/browserslist-config
```

## Usage

### In your `package.json`

```json
{
  "browserslist": ["extends @naverpay/browserslist-config"]
}
```

### Or in a `.browserslistrc` file

```
extends @naverpay/browserslist-config
```

## Targets

- Browsers with >0.2% market share
- Excludes browsers with no global usage ("dead")
- Excludes Internet Explorer, Opera Mini, iOS Safari below 15
- Includes iOS Safari 15+
- Node.js 18.18.0+
- Chrome 106+

See the full, up-to-date list here:
[browsersl.ist Query (KR)](https://browsersl.ist/#q=%3E0.2%25%2Cnot+dead%2Cnot+op_mini+all%2Cnot+ie%3E%3D0%2Cnot+ios_saf%3C15%2Cios_saf%3E%3D15%2Cnode%3E%3D18.18.0%2CChrome%3E%3D106&region=KR)

## FAQ

**Q: Why use a shared Browserslist config?**
A: It ensures every @naverpay/frontend project follows the same browser support policy—less redundancy, fewer mistakes.

**Q: How often is it updated?**
A: As the business/project requirements or browser landscape changes. Check CHANGELOG for details.

**Q: How do I check the resolved browser list?**
A:

```bash
npx browserslist
```

Or use [browsersl.ist](https://browsersl.ist) with the query above.

## License

ISC
