module.exports = {
    mode: "production",
    entry: "./src/entry.js",
    output: {
        filename: "[name].[contenthash].js",
        chunkFilename: "[name].[contenthash].js",
    },
    optimization: {
        chunkIds: 'named',
        splitChunks: {
          chunks: 'all',
        }
    }
};
