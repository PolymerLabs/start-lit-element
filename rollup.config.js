import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
//import babel from 'rollup-plugin-babel';

export default {
	input: 'lib/start-lit-element.js',
	output: {
		dir: 'build',
		format: 'es'
	},
	plugins: [
    resolve(),
    commonjs(),
    //babel({
      //exclude: 'node_modules/**',
      //include: 'src/**'
    //})
  ]
};
