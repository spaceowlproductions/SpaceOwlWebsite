const mainBody = document.getElementById("MainBody");
const navBar = document.getElementById("navBar");

function fillWebsite(){
 fillWebsiteAsync();
}

async function fillWebsiteAsync(){
 let data = await fetch("./website.txt");
 let websiteText = await data.text();
 let sections = getSections(websiteText);
 sections.forEach(printNavElement);
 printSection(sections[0]);
 //displaySections(sections);
}

function parseSections(text){
 let sections = getSections(text); 
 console.log(sections);
}

function getSections(text){
 let sections = [];
 let parsingImage = false;
 let parsingURL = false;
 let parsingTitle = false;
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
   case "~":
    parsingURL = !parsingURL;
    break;
   case "#":
    parsingTitle = !parsingTitle;
    break;
   default:
    if(parsingImage)
     addImage(c, currentSection);
    else if(parsingURL)
     addURL(c, currentSection);
    else if (parsingTitle)
     addTitle(c, currentSection);
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

function addImage(text, currentSection){
 if(currentSection.body.length == 0)
  currentSection.body.push({image: ""});
 
 let currentElement = currentSection.body[currentSection.body.length - 1];
 if(currentElement.image == null)
  currentElement = currentSection.body.push({image: "" + text});
 
 currentElement.image += text;
}

function addURL(text, currentSection){
 if(currentSection.body.length == 0)
  currentSection.body.push({url: ""});

 let currentElement = currentSection.body[currentSection.body.length - 1];
 if(currentElement.url == null)
  currentElement = currentSection.body.push({url: "" + text});

 currentElement.url += text;
}

function addTitle(text, currentSection){
 if(currentSection.body.length == 0)
  currentSection.body.push({title: ""});

 let currentElement = currentSection.body[currentSection.body.length - 1];
 if(currentElement.title == null)
  currentElement = currentSection.body.push({title: "" + text});

 currentElement.title += text;
}

function setupElement(text, currentSection, elementType){
 let preparedElement = {}['${elementType}'];
 if(currentSection.body.length == 0)
  currentSection.body.push(preparedElement);

 let currentElement = currentSection.body[currentSection.body.length - 1];
 if(currentElement.title == null)
  currentElement = currentSection.body.push(preparedElement['elementType'] += text);
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
 
function printSection(section){
 mainBody.innerText = "";

 const headerElement = document.createElement("h1");
 headerElement.id = "h1";
 headerElement.innerText = section.title;
 mainBody.appendChild(headerElement);
 
 section.body.map(printElement);
}

function printNavElement(section){
 const navElement = document.createElement("a");
 navElement.id = "link";
 navElement.innerText = section.title;
 navElement.addEventListener("click", function(){printSection(section)});
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
 if(element.url != null){
  newElement = document.createElement("a");
  newElement.id = "link";
  newElement.innerText = element.url;
  newElement.href = "http://" + element.url;
 }
 if(element.title != null){
  newElement = document.createElement("h2");
  newElement.innerText = element.title;
 }
 mainBody.appendChild(newElement);
}
