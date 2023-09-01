// This function changes the colours of buttons, the background and elements using the accents 

export function setColors(state, darkmode) {
    // Set CSS variables dynamically based on state
    // set the buttons
    document.documentElement.style.setProperty('--button-bg-color', state.button[1]);
    document.documentElement.style.setProperty('--button-bg-color2', state.button[0]);
    document.documentElement.style.setProperty('--button-bg-color3', state.button[2]);
    document.documentElement.style.setProperty('--timer-button-color', darkmode ? 'black' : state.accent);
    // set the heading color 
    document.documentElement.style.setProperty('--heading-color', darkmode ? 'white' : state.accent)
    // set the background colour
    document.documentElement.style.setProperty('--background-color', state.background.background1);

    // set the timer display color 
    document.documentElement.style.setProperty('--state-timer', darkmode ? 'white' : state.timer)

    // set the login color 
    document.documentElement.style.setProperty('--state-login', darkmode ? state.background.background1 : state.login)

}

