const body = document.querySelector('body');
// on document, run querySelector to access the body
body.style.color = "green";
body.style.fontFamily = "monospace";
const newpointer = chrome.runtime.getURL('images/pointer.png')
body.style.cursor = `url('${newpointer}'), pointer`
// body.style.cursor = `${newpointer}, pointer`

function replace() {
    let filenames = [
        "robots1.jpg",
        "robots2.jpg",
    ];
    let images = document.querySelectorAll('img')
    const robosound = new Audio(chrome.runtime.getURL('robosound.wav'))
    // created robosound html element
    // append that element to the DOM
    body.appendChild(robosound)
    for (image of images) {
        let r = Math.floor(Math.random()*filenames.length)
        let file = 'images/' + filenames[r];
        let url = chrome.extension.getURL(file);
        image.src = url;
        // event listener to play sound on 
        image.addEventListener("mouseover", function(event) {
           console.log('sounds should play');
           const playPromise = robosound.play();
           playPromise.then(function(){
                console.log('playback successful')
           }).catch(function(error) {
               console.log(error)
           })
           console.log(robosound)
        })
    }   

}
replace()


