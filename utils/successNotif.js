export default function(vue, message, type = 'success') {
  const obj = {
    message,
    type
  }
  return vue.$store.dispatch('handleNotif', obj)
}
