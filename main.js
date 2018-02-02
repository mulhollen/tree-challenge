
const parts = {
    height: document.getElementById('height'),
    character: document.getElementById('char')
}

space = " ";

// grow a tree
function tree(){
    // doesn't work without both fields full 
    if (parts.height.value === "" || parts.character.value === ""){
        alert("Both fields must have a value");
        return
    }
    // how fat is the tree
    var bottomWidth = (parseInt(parts.height.value) * 2) - 1;
    // counter through i
    // repeat space height minus counter divided by 2
    // repeat the character counter times
    for (var i = 1; i <= bottomWidth; i+= 2) {
        clSpace = space.repeat(parts.height.value - i / 2 );
        treeGrown = (parts.character.value).repeat(i)
        console.log(clSpace, treeGrown);
    }    
}


// on enter keypress
function enter(event) {
    if (event.keyCode === 13) {
        tree();
    }  else if (event.keyCode != 13){
    }
}

// enter press height
document.getElementById("height").addEventListener("keypress", enter);
// enter press char
document.getElementById("char").addEventListener("keypress", enter);
// on click
document.getElementById("grow").addEventListener("click", tree);