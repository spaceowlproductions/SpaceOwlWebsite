let playerThrowing = true;

const throwInfo = {
    0: {
        bagStatus: "ground",
        defaultText: ", and it hits the ground.",
        flavorText: [
            ", and the bag thuds to the ground nearby.",
            ". The bag travels a ways beyond the board.",
            ". It looks like a promising throw, but just misses the board.",
            ". The bag hits the board, but slides off."
        ]
    },
    1: {
        bagStatus: "board",
        defaultText: ", and it lands on the board.",
        flavorText: [
            ", and the bag thuds neatly on the board.",
            ". The bag lands on the board and nearly knocks the other player's bag off.",
            ". It lands on the board and slides, almost falling into the hole.",
            ". The bag slides onto the board and almost falls off."
        ]
    },
    2: {
        bagStatus: "hole",
        defaultText: ", and it lands in the hole.",
        flavorText: [
            ", and the bag swishes quietly into the hole.",
            ". The bag hits the board and slides neatly into the hole.",
            ". The bag hits the board above the hole, and slowly shifts down into the hole.",
            ". The bag slaps onto the hole's edge and flops in."
        ]
    },
    throwBag: function(story){
        return this.displayResults(randomBefore(3), story)
    },
    displayResults: function(throwID, story){
        story.variablesState["bagStatus"] = this[throwID].bagStatus;
        return this.getText(throwID)
    },
    getText: function(throwID){
        if(randomBefore(3) == 0)
            return this[throwID].flavorText[randomBefore(4)];
        else
            return this[throwID].defaultText;
    }
}

const randomBefore = (int) => {return Math.floor(Math.random() * int)};