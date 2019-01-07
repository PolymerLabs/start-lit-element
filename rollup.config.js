import resolve from 'rollup-plugin-node-resolve';
import common from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
	input: 'lib/index.js',
	output: {
		dir: 'build',
		format: 'es'
	},
	plugins: [
    resolve(),
    common(),
    babel({
      exclude: 'node_modules/**',
      include: 'src/**'
    })
  ]
};
