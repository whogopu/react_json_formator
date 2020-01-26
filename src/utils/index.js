export const getDataFromApi = url => {
  return fetch(url)
  .then(res => res.json())
  .then(res => Promise.resolve(res))
  .catch(err => Promise.reject(err))
}