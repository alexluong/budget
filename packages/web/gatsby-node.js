const path = require("path")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      alias: {
        "styled-components": path.resolve(
          __dirname,
          "../../node_modules/styled-components",
        ),
      },
    },
  })
}
