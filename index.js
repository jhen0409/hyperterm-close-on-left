const css = '.tab_tab .tab_icon { left: 7px; right: initial; }'

exports.decorateConfig = config =>
  Object.assign({}, config, {
    css: config.css ? config.css + css : css
  })
