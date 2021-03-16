const getCityPicture = async (data = {}) => {

    const response = await fetch('https://where-to-gmc.herokuapp.com/getPic', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header        
    });
  
      try {
        const newData = await response.json()
        return newData

      }catch(error) {
        console.log("error", error);
      }
};


export {getCityPicture}