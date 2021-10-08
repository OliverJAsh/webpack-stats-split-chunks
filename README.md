# webpack-stats-split-chunks

```bash
# webpack v5
git checkout master

yarn

rm -rf dist && webpack --json=stats.json && cat stats.json | jq '.assetsByChunkName'
```

```json
{
  "main": [
    "main.1eb1d043c6fd288f2377.js"
  ],
  "routeA": [
    "routeA.7628c97244f6243219ec.js"
  ],
  "routeB": [
    "routeB.d7177b0b2156e694ec50.js"
  ]
}
```

```bash
# webpack v4
git checkout v4

yarn

rm -rf dist && webpack --json=stats.json && cat stats.json | jq '.assetsByChunkName'
```

```json
{
  "main": "main.17477d07c051418b1d7f.js",
  "routeA": "routeA.58496c9fa628f03eb391.js",
  "routeB": "routeB.d37744a3fa56ba7c8da0.js",
  "vendors~routeA~routeB": "vendors~routeA~routeB.65d7b92d01e53d3f6a94.js"
}
```