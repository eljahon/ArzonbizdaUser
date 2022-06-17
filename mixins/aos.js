import AOS from '@/node_modules/aos/dist/aos'
import 'aos/dist/aos.css'
export default {
  mounted() {
    AOS.init()
    this.$store.dispatch('addBreadcumbs', this.route)
  },
}
