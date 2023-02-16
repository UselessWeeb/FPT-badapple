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
async function get_frames(url) {
    const response = await fetch(url);
    var data = await response.arrayBuffer();
    main(new Uint8Array(data));
}

get_frames('frames.dat');

const bits_per_pixel = 2;
const width = 48;
const height = 36;
const bits_per_frame = bits_per_pixel * width * height;
const bytes_per_frame = bits_per_frame / 8;
const pixel_per_byte = 8 / bits_per_pixel;

var audio_elem;

function main(frames){
    audio_elem = document.getElementById('audio');
    setInterval(draw, 50, frames);
}

function draw(frames){
    if (audio_elem.paused){
        return;
    }
    var current_frame = Math.floor((audio_elem.currentTime / audio_elem.duration) * frames.length / bytes_per_frame);
    let frame_index = bytes_per_frame * current_frame;
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            let index =  (i*width + j);
            let td = document.getElementById(`${i}-${j}`);
            let offset = Math.floor( index/ pixel_per_byte);
            let val =  frames[frame_index + offset] >> ((-index % 4)*2 + 6);
            val = val & 3;
            if (val == 0){
                td.style.backgroundColor='black';
            }
            else{
                td.style.backgroundColor='white';
            }
        }
    }
}