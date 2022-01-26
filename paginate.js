const paginate = (array) => {
  const itemsPerPage = 12
  const numOfPages = Math.ceil(array.length / 12)
  const newArray = Array.from({ length: numOfPages }, (_, index) => {
    const start = index * itemsPerPage
    return array.slice(start, start + itemsPerPage)
  })

  return newArray
}

export default paginate
