var index = ({name = 'Test'}) => ({
  input: "index.js",
  output: [
    // {
    //   file: 'dist/iife/index.iife.js',
    //   format: 'iife',
    // },
    {
      file: 'dist/index.cjs.js',
      format: 'cjs'
    },
    // {
    //   file: 'dist/index.amd.js',
    //   format: 'amd',
    // },
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      name,
      globals: {
        'npmlog': 'log',
        '@lg/utils': 'utils'
      },
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm'
    },
    // {
    //   file: 'dist/system/index.system.s',
    //   format: 'system'
    // }
  ]
});

export { index as default };
