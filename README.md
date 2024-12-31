# Digital Clock with Alarm and Stopwatch

This project is a digital clock web application with the following features:
- Real-time display of the current date and time.
- Set an alarm that plays an audio sound when the alarm time is reached.
- Stopwatch with start, stop, and reset functionality.

## Features

### 1. Real-time Clock:
- The clock displays the current time in hours, minutes, and seconds.
- It also shows the current date in `dd:mm:yyyy` format.
- The time and date are updated every second.

### 2. Alarm:
- You can set an alarm by selecting the time from an input field.
- When the alarm time matches the current time, an audio sound is played.
- The alarm is automatically disabled after going off.

### 3. Stopwatch:
- The stopwatch counts time in hours, minutes, and seconds.
- It has `Start`, `Stop`, and `Reset` buttons.
- The `Start` button begins the stopwatch, and it can be paused by clicking `Stop`.
- The `Reset` button resets the stopwatch to `00:00:00`.

## Project Structure

The project consists of the following files:

1. `index.html`:
   - Contains the structure of the webpage, including the date, time, alarm input, and stopwatch display.
   - Provides buttons for setting the alarm, starting/stopping the stopwatch, and resetting the stopwatch.

2. `style.css`:
   - Provides styling for the application, including layout, fonts, colors, and media queries for responsive design.
   - The design features a neon-like color scheme and a glowing clock interface.

3. `script.js`:
   - Contains the JavaScript logic for handling the real-time clock, alarm functionality, and stopwatch timer.
   - Includes functions for updating the time, setting and checking the alarm, and controlling the stopwatch's behavior.

## How to Run

1. Download the project files (`index.html`, `style.css`, `script.js`, and `alarm.mp3`).
2. Open the `index.html` file in a web browser to view the clock interface.
3. Use the alarm input field to set an alarm. When the set time is reached, the alarm will play.
4. Use the `Start/Stop` and `Reset` buttons to control the stopwatch.

## Technologies Used

- HTML5
- CSS3
- JavaScript

## Customization

- You can change the design by modifying the `style.css` file.
- The alarm sound can be replaced by updating the `alarm.mp3` file in the `<audio>` tag in the `index.html` file.
- Modify the timer logic in the `script.js` file if you need additional features for the stopwatch or alarm.

## Future Improvements

- Add functionality to allow users to set multiple alarms.
- Display notifications when the alarm rings, even if the browser tab is not active.
- Add a countdown timer feature.

## License

This project is open-source and free to use.
https://codepen.io/AbhaySuryaKS/pen/bGPqXNO
