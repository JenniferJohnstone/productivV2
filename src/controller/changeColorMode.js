import backgrounds from "../view/backgrounds";
import darkbackgrounds from "../view/darkbackgrounds";

// this function takes in whether dark mode is turned on and the function to change the color state along with what colour it currently is. 
// it then sets the color accordingly.

function changeColorMode(darkMode, setDarkMode, setState, color, maintain) {
    //first determine if we are setting darkMode
    var colorSet;
    if (maintain == true) {
        // If we're not changing it, then the colorset matches the original state
        if (darkMode == true) {
            colorSet = darkbackgrounds
        } else {
            colorSet = backgrounds
        }
    } else {
        // Maintain is false, meaning we are changing the colorset to not match the original state
        if (darkMode == false) {
            setDarkMode(true)
            colorSet = darkbackgrounds
        } else {
            setDarkMode(false)
            colorSet = backgrounds
        }
    }

    // Now we can change the colorstate accordingly
    if (color == 'orange') {
        setState(colorSet.orange)
    }
    if (color == 'blue') {
        setState(colorSet.blue)
    }
    if (color == 'purple') {
        setState(colorSet.purple)
    }

}

export default changeColorMode