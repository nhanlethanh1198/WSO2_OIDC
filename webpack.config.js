import path from "path";
import * as dotenv from 'dotenv'
dotenv.config();

const { NODE_ENV = "production" } = process.env;

export default {
    entry: './src/index.ts',
    mode: NODE_ENV,
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js',
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
}
