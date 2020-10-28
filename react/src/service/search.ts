export function getLists(value: string) {
  return fetch('/api/getLists.json?value=' + value)
    .then(res => res.json())
    .catch(err => {
      console.log(err)
    })
}

export function getListsAsync(value: string) {
  return fetch('/api/getListsAsync.json?value=' + value)
    .then(res => res.json())
    .catch(err => {
      console.log(err)
    })
}

