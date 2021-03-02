const apiCalls = {
  getSpecificDatesPhoto(date) {
    return (
      fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=j9VLjGbdXCRXtf61nCle9dLGtNzWVnNqUM1BNV86`)
      .then(res => {if (!res.ok) {
        return `${res.status} error. Sorry! Something went wrong! Try again later or go to Contact Us to contact the developers with questions!`;
      } else {
        return res.json();
      }})
    )
  }
}

export default apiCalls;