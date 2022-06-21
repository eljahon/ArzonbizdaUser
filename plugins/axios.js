export default function ({ $axios }) {
  if (process.client) {
    $axios.setBaseURL(window.location.origin)
  }
}
