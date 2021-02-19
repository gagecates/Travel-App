const getWeather = async (data = {}) => {
  
    const response = await fetch('http://localhost:8000/getWeather', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),     
    });
  
      try {
        const newData = await response.json();
        return newData;
  
      }catch(error) {
        console.log("error", error);
      }
  };

export{getWeather}