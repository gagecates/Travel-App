 function checkForURL(inputText) {
    console.log("::: Running checkForURL :::", inputText);
    let options = [
        "https://",
        "http://"
    ]

    if(inputText.includes('http')) {
        return true

    } else {
        return false
    }
}

export { checkForURL }
