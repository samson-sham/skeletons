import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import {terser} from 'rollup-plugin-terser';

export default [{
    "input": "lib/main.js",
    "output": {
        "file": "dist/bundle.js",
        "format": "umd"
    },
    "plugins": [
        json(),
        resolve({
            "browser": true,
            "jsnext": true
        }),
        commonjs(),
        babel()
    ]
},{
    "input": "lib/main.js",
    "output": {
        "file": "dist/bundle.min.js",
        "format": "umd"
    },
    "plugins": [
        json(),
        resolve({
            "browser": true
        }),
        commonjs(),
        babel(),
        terser()
    ]
}];