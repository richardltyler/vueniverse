const apiCalls = {
  getTodaysPic() {
    return (
      fetch('https://api.nasa.gov/planetary/apod?api_key=j9VLjGbdXCRXtf61nCle9dLGtNzWVnNqUM1BNV86')
        .then(response => response.json())
      )
  },

  getSpecificDatesPhoto(date) {
    return (
      fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=j9VLjGbdXCRXtf61nCle9dLGtNzWVnNqUM1BNV86`)
        .then(response => response.json())
    )
  }
}

export default apiCalls;