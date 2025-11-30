await Bun.build({
  entrypoints: ['./src/index'],
  outdir: './build',
  target: "bun",
  external: ["commander", "inquirer"],
  minify: true,
});