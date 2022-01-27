// Edit text properties on body text
const body = document.querySelector('body');
body.style.color = "green";
body.style.fontFamily = "monospace";

// access pointer image and replace pointer
const newpointer = chrome.runtime.getURL('images/pointer.png')
body.style.cursor = `url('${newpointer}'), pointer`

// create and invoke vuntion that will generate the following functionality:
// replace images with robots
// on hover for images, play robot sounds
function replace() {
    // random robot images to cycle through
    let filenames = [
        "robots1.jpg",
        "robots2.jpg",
    ];
    // save images on the page DOM into nodelist
    let images = document.querySelectorAll('img')
    // created robosound html element
    // append that element to the DOM
    const robosound = new Audio(chrome.runtime.getURL('robosound.wav'))
    body.appendChild(robosound)

    // iterate through images in domlist and
    for (image of images) {
        // randomize index
        let r = Math.floor(Math.random()*filenames.length)
        // add a random file to the filepath
        let file = 'images/' + filenames[r];
        // make filepath acceccible on page load
        let url = chrome.extension.getURL(file);
        // reset image link to random robot
        image.src = url;
        // event listener to play sound on 
        image.addEventListener("mouseover", function(event) {
           console.log('sounds should play');
           // invoking play on sound returns a promise
           const playPromise = robosound.play();
           // add logic to resolve promise or catch error
           playPromise.then(function(){
                console.log('playback successful')
           }).catch(function(error) {
               console.log(error)
           })
           console.log(robosound)
        })
    }   

}
// invoke the functionality of replacing images and giving them a sound on hover
replace()


