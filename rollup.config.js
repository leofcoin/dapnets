import commonjs from 'rollup-plugin-commonjs';

export default [{
  input: 'src/dapnets.js',
  output: {
    file: 'dapnets.js',
    format: 'cjs',
    plugins: [
      // resolve({preferBuiltins: true, mainFields: ['module', 'main', 'jsnext', 'browser']}),
      commonjs({ include: 'node_modules/**'})
    ]
  }
}]