export const getDataFromApi = url => {
  return fetch(url)
  .then(res => res.json())
  .then(res => Promise.resolve(res))
  .catch(err => Promise.reject(err))
}

export const getType = v => {
  let type = {
    isNull: false,
    isUndef: false,
    isObj: false,
    isArr: false,
    isStrNum: false
  };

  if (typeof v === 'undefined') {
    type.isUndef = true
  } else if (v === null) {
    type.isNull = true
  } else if (Array.isArray(v)) {
    type.isArr = true
  } else if (!type.isArr && typeof v === 'object') {
    type.isObj = true
  } else {
    type.isStrNum = true
  }

  return type;
}