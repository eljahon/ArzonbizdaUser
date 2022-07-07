<script>
export default {
  name: 'ContainerBox',
  computed: {
    crumbs() {
      const crumbs = []
      this.$route.matched.forEach((item, i, { length }) => {
        const crumb = {}
        crumb.path = item.path
        crumb.name = this.$i18n.t('route.' + (item.name || item.path))

        // is last item?
        if (i === length - 1) {
          // is param route? .../.../:id
          if (item.regex.keys.length > 0) {
            crumbs.push({
              path: item.path.replace(/\/:[^/:]*$/, ''),
              name: this.$i18n.t('route.' + item.name.replace(/-[^-]*$/, '')),
            })
            crumb.path = this.$route.path
            crumb.name = this.$i18n.t('route.' + this.$route.name, [
              crumb.path.match(/[^/]*$/)[0],
            ])
          }
          crumb.classes = 'is-active'
        }

        crumbs.push(crumb)
      })

      return crumbs
    },
  },
}
</script>

<template>
  <no-ssr>
  <CThemeProvider>
    <div class="containerBox">
      <no-ssr>
      <CReset />
      </no-ssr>
        <no-ssr>
      <Header />
        </no-ssr>
          <no-ssr>
      <Nuxt />
          </no-ssr>
    </div>
    <FooterGlobal />
  </CThemeProvider>
  </no-ssr>
</template>

<style lang="scss" scoped>
.activeClass{
  position: fixed;
  top: 0;
  z-index: 1000000;
  width: 92%;
  background-color: white;
}</style>
