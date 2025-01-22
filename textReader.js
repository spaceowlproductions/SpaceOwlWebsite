const body = document.getElementById("MainBody");
const navBar = document.getElementById("navBar");
function fillWebsite(){
 fillWebsiteAsync();
}

async function fillWebsiteAsync(){
 let data = await fetch("./website.txt");
 let websiteText = await data.text();
 let sections = getSections(websiteText);
 console.log(sections);
 displaySections(sections);
}

function parseSections(text){
 let sections = getSections(text); 
 console.log(sections);
}

function getSections(text){
 let sections = [];
 let parsingImage = false;
 for(let i = 0; i < text.length; i++){
  let c = text[i];
  let currentSection = sections[sections.length - 1]; 
  switch(c){
   case "[":    
    sections.push(newSectionObject()); 
    break;
   case "]":
    currentSection.titleFinished = true;
    break;
   case "<":
    parsingImage = true;
    break;
   case ">":
    parsingImage = false;
    break;
   default:
    if(parsingImage)
     addImage(c, currentSection); 
    else if(currentSection.titleFinished)
     addText(c, currentSection);
    else 
     currentSection.title += c;
    break; 
  }
 }
 return sections;
}

function addText(text, currentSection){
 if(currentSection.body.length == 0)
  currentSection.body.push({text: ""});
 
 let currentElement = currentSection.body[currentSection.body.length - 1];
 if(currentElement.text == null)
  currentElement = currentSection.body.push({text: ""});

 currentElement.text += text;
}
//TODO For some reason this is dropping the first letter of the image title.
function addImage(text, currentSection){
 if(currentSection.body.length == 0)
  currentSection.body.push({image: ""});
 
 let currentElement = currentSection.body[currentSection.body.length - 1];
 if(currentElement.image == null)
  currentElement = currentSection.body.push({image: ""});

 currentElement.image += text;
}

function newSectionObject(){
 return {title: "", body: [], titleFinished: false}
}

function displayText(text){
 document.getElementById("text").innerHTML = text;
}

function displaySections(sections){
 sections.forEach(printSection);
 sections.forEach(printNavElement);
}
//NEXT change this to look through the body array of the sections and print each text and image object.
function printSection(section){
 const headerElement = document.createElement("h1");
 headerElement.id = "h1";
 headerElement.innerText = section.title;
 body.appendChild(headerElement);
 
 section.body.map(printElement);
}

function printNavElement(section){
 const navElement = document.createElement("a");
 navElement.id = "link";
 navElement.innerText = section.title;
 navBar.appendChild(navElement);
}

function printElement(element){
 console.log(element);
 let newElement = document.createElement("t");
 if(element.text != null){
  newElement.innerText = element.text.trim();
 }
 if(element.image != null){
  newElement = document.createElement("img");
  newElement.src = "images/" + element.image + ".png";
 }
 body.appendChild(newElement);
}
