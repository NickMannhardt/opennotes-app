const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

content_exports = {
    entry: './content_src/index.ts',
    mode: "production",
    target: ['web'],
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                // exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        fallback: {
            util: require.resolve("util/")
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        modules: [
            'node_modules'
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'content_dist'),
        library: {
            type: 'umd'
        }
    },
    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 4000,
    },
};

sandbox_exports = {
    entry: './sandbox_src/sandbox.js',
    mode: "production",
    target: ['web'],
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                // exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        fallback: {
            util: require.resolve("util/")
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        modules: [
            'node_modules'
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'sandbox_dist'),
        library: {
            type: 'umd'
        }
    },

    plugins: [
        new CopyPlugin({
            patterns: [{
                from: 'node_modules/onnxruntime-web/dist/*.wasm',
                to: '[name][ext]'
            }]
        })
    ]
}

module.exports = (env) => {
    switch(env.config) {
        case "content":
            return content_exports;
        case "sandbox":
            return sandbox_exports;
    }
}