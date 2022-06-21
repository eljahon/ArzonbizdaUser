export default function ({ $axios }) {
  console.log(process.client)
  if (process.client) {
    $axios.setBaseURL(window.location.origin)
  }
}
