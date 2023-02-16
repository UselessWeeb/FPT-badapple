# FPT-badapple
//first script is only used to expand the table with more resolution(7x13 is so lowres)
//the second,well
//it is supposed to take the frames.dat file and display it on the screen
//how is it work ?
//it takes the frames.dat file and converts it to a Uint8Array
//then it calls the main function with the Uint8Array as a parameter
//the main function then calls the setInterval function to call the draw function every 50 milliseconds
//the draw function checks if the audio is paused
//if it is paused it returns
//if it is not paused it gets the current frame by getting the current time of the audio and dividing it by the duration of the audio and multiplying it by the length of the frames array divided by the bytes per frame
//then it loops through the height and width of the screen
//it gets the index by multiplying the height by the width and adding the width
//then ?
//it gets the offset by dividing the index by the pixel per byte
//then it gets the value by shifting the frames array at the frame index plus the offset by the negative index modulo 4 times 2 plus 6
//then it gets the value by anding it with 3
//then it checks if the value is 0
//if it is 0 it sets the background color to black
//if it is not 0 it sets the background color to white
