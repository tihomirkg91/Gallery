export const setDataToLocalStorage = (data) => {
  const arr = []
  const previousData = JSON.parse(localStorage.getItem('COMMENTED'))
  arr.unshift(data)
  if (previousData !== null) {
    arr.unshift(...previousData)
  }
  localStorage.setItem('COMMENTED', JSON.stringify(arr))
}
