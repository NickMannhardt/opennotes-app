// css for the popup and the button
var css = `

.title {
    margin-top: 30px;
    margin-bottom: 0px;
    font-size: 60px;
    font-weight: 800;
    font-family: 'Poppins', sans-serif;
    color: white;
    text-align: center;
}

input {
    padding: 20px;
}

.container {
    width: 430px;
    height: 500px;
    background-color: white;
    color: black;
    display: inline-block;
    padding: 0px 40px 40px 40px;
    margin: 0px 10px 10px 10px;
    border-radius: 10px;
    box-shadow: 0px 8px 8px 0px rgba(0,0,0,0.3), 0 6px 20px 0px rgba(0,0,0,0.19);
    overflow: scroll;
    -webkit-box-sizing: border-box;
    font-family: 'Poppins', sans-serif;

}

.container2 {
    background-color: rgba(255, 255, 255, 0.6);
    color: black;
    margin: 0px 10px 20px 10px;
    padding: 5px;
    border-radius: 10px;
    box-shadow: 0 8px 8px 0 rgba(0,0,0,0.3), 0 6px 20px 0 rgba(0,0,0,0.19);
    -webkit-box-sizing: border-box;

}

.block {
    display: inline-block;
    width: 430px;
    height: 500px;
    overflow: scroll;
    /* background-color: blue; */
    border-radius: 10px;
    margin: 0px 10px 10px 10px;
}

.chosen {
    background-color: white;
    border-width: 4px;
    border-color: rgba(255, 217, 50, 1);
    border-style: solid;
    border-radius: 10px;
}

.section-title {
    font-size: 30px;
    font-weight: 400;
    text-align: center;
}
.last {
    margin-bottom: 0px;
}

.text {
    text-align: left;
    font-family: 'Poppins', sans-serif;
}

#original_text {
    width: 100%;
    height: 350px;
    resize: none;
    font-size: 15px;
    font-family: 'Poppins', sans-serif;
    padding: 20px;
    outline: none !important;
    border:1px solid lightgray;
    border-radius: 6px;
    /* border: none; */
    /* box-shadow: 0 0 10px #719ECE; */

}

#cn-btn {
    all: initial;
    width: 150px;
    height: 150px;
    border-radius: 100%;
    background-image: linear-gradient(#6FCF97, #CBFFE1);
    position: fixed;
    top: 20px;
    right: 20px;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    z-index: 10000;

    -webkit-box-shadow: 5px 5px 13px -2px rgba(0,0,0,0.42); 
    box-shadow: 5px 5px 13px -2px rgba(0,0,0,0.42);
}

#cn-btn-txt {
    all: initial;
    font-family: Poppins, sans-serif;
    color: white;
    font-size:25px;
    font-weight:800;
    cursor: pointer;
}

#cn-btn:hover {
    transform: scale(1.1);
}

#darken {
    background-color: black;
    position: fixed;
    z-index: 10001;
    height: 100%;
    width: 100%;
    top: 0px;
    left: 0px;
    opacity: 40%;
}

.hide {
    all: initial;
    visibility: hidden;
    display: none;
}

#popup {
    z-index: 10002;
    padding: 10px;
    width: fit-content;
    height: fit-content;
    position: fixed;
    border-radius: 30px;
    
    background-image: linear-gradient(#6FCF97, #CBFFE1);
    margin: auto auto;

    left: 0px; 
    right: 0px; 
    top: 0px;
    bottom: 0px;
    margin: auto;
}

.horizontal {
    display: flex;
  justify-content: center;
}

#x {
    all: initial;
    width: 40px;
    height: 40px;
    background-color: red;
    position: absolute;
    top: 20px;
    right: 20px;
    border-radius: 100%;
    cursor: pointer;

    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;

    font-family: 'Poppins', sans-serif;
    font-weight: 1000;
    color: white;
    font-size: 15px;

    -webkit-box-shadow: 5px 5px 13px -2px rgba(0,0,0,0.42); 
    box-shadow: 5px 5px 13px -2px rgba(0,0,0,0.42);
}

#bubblesContainer {
    scroll-behavior: smooth;
}

.tooltiptext {
    visibility: hidden;
    background-color: black;
    color: #fff;
    padding: 5px;
    border-radius: 6px;
    z-index: 2;
    position: absolute;
}

.tooltip {
    border: none;
    underline: none;
}

.tooltip:hover .tooltiptext {
    visibility: visible;
}

.highlight {
    background-color: #fff6b0;
    cursor: pointer;
}

.highlight:hover {
    background-color: #f2da22;
}

`;

// Adding the css to the document
var styleSheet = document.createElement("style");
styleSheet.innerText = css;
document.head.appendChild(styleSheet);

// add google font
addStylesheetURL("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;400;500;600;700;800;900&display=swap");

// html for the popup and the btn
html = `
<div id="popup" class="hide">

        <div id="x">X</div>

        <p class="title">Clinical Notes</p>
        <div class="horizontal">
    
            <div class="container">
                <p class="section-title">Original Text</p>
                <!-- <p class="text" id="original_text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisl orci, blandit at purus ut, ornare faucibus mauris. Etiam pharetra ultrices volutpat. Pellentesque vitae sollicitudin turpis. Vivamus molestie libero metus, quis semper dolor fermentum vel. Nulla porttitor sit amet nunc ac posuere. Nunc varius mi ut nulla imperdiet posuere. Praesent vitae nisl interdum, tincidunt metus vitae, tincidunt risus. Etiam purus erat, cursus ac dolor vel, bibendum viverra velit. Phasellus iaculis placerat felis, sed efficitur nisl vehicula quis. Aliquam pellentesque pulvinar bibendum. Integer sed nisl nibh. Morbi vel auctor dui, in lacinia enim. Suspendisse vulputate eu massa sed interdum. Sed in imperdiet lorem, eu venenatis metus. Sed dictum lectus non metus efficitur, vel mollis erat bibendum.
    
                </p> -->
                <!-- <input 
                class="text" 
                id="original_text" 
                type="text" 
                value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisl orci, blandit at purus ut, ornare faucibus mauris. Etiam pharetra ultrices volutpat. Pellentesque vitae sollicitudin turpis. Vivamus molestie libero metus, quis semper dolor fermentum vel. Nulla porttitor sit amet nunc ac posuere. Nunc varius mi ut nulla imperdiet posuere. Praesent vitae nisl interdum, tincidunt metus vitae, tincidunt risus. Etiam purus erat, cursus ac dolor vel, bibendum viverra velit. Phasellus iaculis placerat felis, sed efficitur nisl vehicula quis. Aliquam pellentesque pulvinar bibendum. Integer sed nisl nibh. Morbi vel auctor dui, in lacinia enim. Suspendisse vulputate eu massa sed interdum. Sed in imperdiet lorem, eu venenatis metus. Sed dictum lectus non metus efficitur, vel mollis erat bibendum."
            > -->
                <!-- <input type="text" value="asdf"> -->
                <textarea id="original_text" placeholder="Insert text here..."></textarea>
            </div>
    
            <div class="container">
                <p class="section-title">Summarized Text</p>
                <p class="text" id="summarized_txt">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisl orci, blandit at purus ut, ornare faucibus mauris. Etiam pharetra ultrices volutpat. Pellentesque vitae sollicitudin turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisl orci, blandit at purus ut, ornare faucibus mauris. Etiam pharetra ultrices volutpat. Pellentesque vitae sollicitudin turpis.
                </p>
            </div>

            <!-- bubbles at the right -->
            <div class="block" id="bubblesContainer">
                
                <!--
                <div class="container2">
                    <p class="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisl orci, blandit at purus ut, ornare faucibus mauris.
                    </p>
                </div>
    
                <div class="container2 chosen">
                    <p class="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
    
                <div class="container2">
                    <p class="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
    
                <div class="container2">
                    <p class="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
    
                <div class="container2">
                    <p class="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisl orci, blandit at purus ut, ornare faucibus mauris.
                    </p>
                </div>
    
                <div class="container2">
                    <p class="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
    
                <div class="container2">
                    <p class="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
    
                <div class="container2">
                    <p class="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                -->
    
            </div>
        </div>
    </div>
`

// adding the button html
document.body.innerHTML += `<div id="cn-btn" class="hide"><p id="cn-btn-txt">Simplify</p></div>`;

// adding the dark overlay html
document.body.innerHTML += `<div id="darken" class="hide"></div>`;

// adding all the popup html
document.body.innerHTML += html;

// getting the button, popup, overlay, and x
var btn = document.getElementById('cn-btn');
var popup = document.getElementById('popup');
var overlay = document.getElementById('darken');
var x = document.getElementById('x');

// make the modal visible when button pressed
btn.onclick = function() {
    popup.classList.remove("hide");
    overlay.classList.remove("hide");
};

// disappear the modal when 'x' is clicked
x.onclick = function() {
    popup.classList.add("hide");
    overlay.classList.add("hide");
}

// automatically change the text in original text to what's under assessment and plan
var originalText = document.getElementById("original_text");
const titles = document.querySelectorAll("span, p");
for (var i = 0; i < titles.length; i++) {
    if (titles[i].innerText.includes("Early life")) {
        originalText.value = titles[i + 1].innerText;
    }
}

// change the summarized text
var summarized_txt = document.getElementById("summarized_txt");
summarized_txt.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisl orci, blandit at purus ut, ornare faucibus mauris. Etiam pharetra ultrices volutpat. Pellentesque vitae sollicitudin turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisl orci, blandit at purus ut, ornare faucibus mauris. Etiam pharetra ultrices volutpat. Pellentesque vitae sollicitudin turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisl orci, blandit at purus ut, ornare faucibus mauris. Etiam pharetra ultrices volutpat. Pellentesque vitae sollicitudin turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisl orci, blandit at purus ut, ornare faucibus mauris. Etiam pharetra ultrices volutpat. Pellentesque vitae sollicitudin turpis.";

// highlight the summarized text
let indices = getIndices(summarized_txt.innerHTML);
let numWords = indices.length;
let randomIndices = [];

// getting random indices to highlight
for (let i = 0; i < Math.floor(numWords / 3.0); i++) {
    let randomIndex = Math.floor(Math.random() * indices.length);
    while (randomIndices.includes(randomIndex)) {
        randomIndex = Math.floor(Math.random() * indices.length);
    }
    randomIndices.push(randomIndex);
}

randomIndices.sort(function(a, b){return a - b});
let highlightPrv = "<span class='highlight tooltip'>";
let highlightAft = "</span>";
let tooltipHTML = "<span class='tooltiptext'>" + "Text" + "</span>";
let diff = highlightPrv.length + tooltipHTML.length + highlightAft.length;
let count = 0;

let highlightedTexts = [];

// highlight the random indices
for (let i = 0; i < downToEven(randomIndices.length); i+=2) {
    highlight(indices[randomIndices[i]] + diff*count, indices[randomIndices[i + 1]] + diff*count, summarized_txt);
    count += 1;
} 

// add a bubble for each highlighted text
let bubblesContainer = document.getElementById("bubblesContainer");
for (let i = 0; i < highlightedTexts.length; i++) {
    let id = "bubble" + i;
    bubblesContainer.innerHTML += `<div class="container2 bubble" id=` + id + `><p class="text">` + highlightedTexts[i] + `</p></div>`;
}

var highlights = document.getElementsByClassName('highlight');
var lastHighlighted = "none";

// add the onclick functions for each highlighted text
for (i = 0; i < highlights.length; i++) {

    // highlight the corresponding bubble when highlighted text is clicked
    let id = "bubble" + i;
    highlights[i].onclick = function() {

        // if something's already selected, unselect
        if (lastHighlighted != "none") {
            let lastBubble = document.getElementById(lastHighlighted);
            lastBubble.classList.remove("chosen");
        }

        // select the clicked thing
        let bubble = document.getElementById(id);
        bubble.classList.add("chosen");
        lastHighlighted = id;

        // autoscroll so it's visible
        bubble.scrollIntoView();
        // var topPos = bubble.offsetTop;
        // bubblesContainer.scrollTop = topPos - 200;
    }

}


function downToEven(num) {
    if (num % 2 == 0) {
        return num;
    } else {
        return num - 1;
    }
}

// function for adding font
function addStylesheetURL(url) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    document.getElementsByTagName('head')[0].appendChild(link);
}

// function to highlight text (takes start index, end index, and text object)
function highlight(start_index, end_index, inputText) {
    var innerHTML = inputText.innerHTML;

    var before = innerHTML.substring(0, start_index);
    var important = innerHTML.substring(start_index, end_index);
    var after = innerHTML.substring(end_index);

    highlightedTexts.push(important);

    // alert(important);

    var html = "<span class='tooltiptext'>" + "Text" + "</span>";
    innerHTML = before + "<span class='highlight tooltip'>" + important + html + "</span>" + after;
    inputText.innerHTML = innerHTML;

}

// generate random number
function randomNum(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

// get random space in text
function randomSpace(innerHTML) {
    const indexes = [];
    var insideATag = false;

    for (let index = 0; index < innerHTML.length; index++) {
        if (innerHTML[index] == '<') {
            insideATag = true;
        } else if (innerHTML[index] == '>') {
            insideATag = false;
        }
        if (!insideATag && innerHTML[index] === ' ') {
            indexes.push(index);
        }

        if (!insideATag && innerHTML[index] === '.') {
            indexes.push(index);
        }
    }

    return indexes[Math.floor(Math.random() * (indexes.length))];
}


function getIndices(innerHTML) {
    const indexesOfWords = [];
    var insideATag = false;

    for (let index = 0; index < innerHTML.length; index++) {
        if (innerHTML[index] == '<') {
            insideATag = true;
        } else if (innerHTML[index] == '>') {
            insideATag = false;
        }
        if (!insideATag && innerHTML[index] === ' ') {
            indexesOfWords.push(index);
        }

        if (!insideATag && innerHTML[index] === '.') {
            indexesOfWords.push(index);
        }
    }
    return indexesOfWords;
}


// function stripHTML(text) {
//     let indices = [];
//     for (i in range(len(text)) {
//         if (char == '<' || char == '>') {
//             indicies.add(i)
//         }
//     }
    
// }

            // "matches": ["<all_urls>"],
            // "matches": ["<all_urls>"],https://www.dukemychart.org/Home/inside.asp?mode=visitsummary&submode=notes
            // "matches": ["https://en.wikipedia.org*"],

            // WORKING ONE
            // "matches": ["https://www.dukemychart.org/Home/inside.asp?mode=visitsummary&submode=notes*"],