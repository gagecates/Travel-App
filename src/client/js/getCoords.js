const getCoordinates = async (dest) => {

    const response = await fetch('http://localhost:8000/coordinates', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dest),
    })
  
      try {
        const data = await response.json()
        return data
        
      }catch(error) {
        console.log("error", error);
      }
}