export default {

  props: {
    retailers: {
      type: Array,
      required: true
    }
  },

  methods: {
    getRetailerClasses(retailer) {
      return {
        'retailer': true,
        'retailer--active': retailer.state === 'active'
      }
    }
  }


}