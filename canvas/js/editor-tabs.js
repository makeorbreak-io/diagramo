function tabClickHandler(event, _callback){
   var editorNumber = event.target.dataset.number;

   var i, tabcontent, tablinks;
   
   tabcontent = document.getElementsByClassName("tab-content");
   for (i = 0; i < tabcontent.length; i++) {
       tabcontent[i].style.display = "none";
   }

   tablinks = document.getElementsByClassName("editor-tab");
   for (i = 0; i < tablinks.length; i++) {
       tablinks[i].className = tablinks[i].className.replace(" active", "");
   }
   document.getElementById("editor-" + editorNumber).style.display = "block";
   event.currentTarget.className += " active";

   _callback(editorNumber);
}

function addNewTab(currentNumberOfEditors){
    var newEditorNumber = currentNumberOfEditors + 1;

    var btn = document.createElement("button");
    btn.className += "editor-tab"; 
    btn.dataset.number = newEditorNumber;
    btn.textContent = "new" + newEditorNumber + ".dgm";

    $("#add-new-tab-button").before(btn);
}

function createNewEditor(editors, editorNumber, _callback) {
    var newEditor = document.createElement("pre");
    newEditor.className += "editor tab-content";
    newEditor.id = "editor-" + editorNumber;

    $("#editor-div").append(newEditor);
    editors.push(newEditor);

    _callback(newEditor);
}