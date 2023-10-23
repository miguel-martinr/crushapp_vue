export default {
  data: () => {
    return {
      navLinks: [
        {
          name: 'home',
          path: '/',
          label: 'Inicio',
          active: true
        },
        {
          name: 'retailers',
          path: '/retailers',
          label: 'Retailers',
          active: false
        }
      ]
    }
  },

  methods: {
    clickLink(link) {
      this.activeLink.active = false
      link.active = true

      this.$router.push(link.path)
    }
  },

  computed: {
    activeLink() {
      return this.navLinks.find(link => link.active)
    }
  }
}