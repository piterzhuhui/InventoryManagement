export default {
  mounted () {
    this.fixBugIniOS()
  },
  methods: {
    fixBugIniOS () {
      const $subMenu = this.$refs.subMenu
      if ($subMenu) {
        const handleMouseleave = $subMenu.handleMouseleave
        $subMenu.handleMouseleave = (e) => {
          handleMouseleave(e)
        }
      }
    }
  }
}
