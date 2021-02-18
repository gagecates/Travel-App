async function getCoordinates(destination) {
    const response = await fetch('http://localhost:8000/coordinates', )
    const responseJSON = await response.json()

    return responseJSON
}