const modules = import.meta.glob('../assets/**/*.{svg,png,webp,jpg,jpeg,gif}', { eager: true })

const assets = new Map(
  Object.entries(modules).map(([key, value]) => [key.replace('..', '@'), value.default])
)

function requireAsset(path) {
  return assets.get(path)
}

export default {
  install: app => {
    app.config.globalProperties.$require = requireAsset
    app.provide('require-asset', requireAsset)
  }
}
