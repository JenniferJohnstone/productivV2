export function formatTime(minutes, seconds) {
    const formattedMinutes = minutes.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    });

    const formattedSeconds = seconds.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    });

    return {
        min: formattedMinutes,
        sec: formattedSeconds
    };
}
