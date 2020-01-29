![design-system-banner](https://user-images.githubusercontent.com/868844/73349510-94a5c280-428b-11ea-9bc2-1ef80e646ec8.png)

[![Build Status](http://drone.waylay.io/api/badges/waylayio/design-system/status.svg)](http://drone.waylay.io/waylayio/design-system)


The Waylay [design system](https://airbnb.design/building-a-visual-language/).

## Usage

`yarn add react react-dom @waylay/react-components`

## Run documentation

`yarn run dev`

## Development

You can link this package to any other React project by running

```bash
# create dev build with sourcemaps
yarn run dev:components
# make this package linkable
yarn link
# cd to <you-project> folder
cd <my-project> && yarn link @waylay/react-components
```

## Production

`yarn run build:components`
