//increments pomodoro cookie by 1, sets cookie to 1 if none present

function addPomo() {
    var pomoCount = sessionStorage.getItem('pomoCount')
    if (pomoCount == null) {
        sessionStorage.setItem('pomoCount', 1)
    } else {
        pomoCount = parseInt(pomoCount) + 1
        sessionStorage.setItem('pomoCount', pomoCount)
    }

}

export default addPomo