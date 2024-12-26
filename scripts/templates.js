
function getInputTemplate() {
    document.getElementById('addNotes').innerHTML =
        `<input id="noteTitle_input"  type="text">
    <input id="note_input"  type="text">
    <button  onclick="addNoteandNoteTitle()">Notiz speichern</button>`
}



function getNoteTemplate(indexNote) {
    return `<p>${notesTitles[indexNote]}: ${notes[indexNote]}<div class="btn2">
    <button class="btn" onclick="moveNoteToTrash(${indexNote})">X</button>
    <button class="btn" onclick="moveNoteToArchive(${indexNote})">A</button></div></p>`
}



function getTrashNoteTemplate(indexTrashNote) {
    return `<p><button class="btn" onclick="deleteNote(${indexTrashNote})">X</button><br> 
    ${trashNotesTitles[indexTrashNote]}: ${trashNotes[indexTrashNote]}
   </p>`;
}



function getArchiveNoteTemplate(indexArchiveNote) {
    return `<p>${archiveNotesTitles[indexArchiveNote]}: ${archiveNotes[indexArchiveNote]}
    <button class="btn" onclick="deleteNoteFromArchive(${indexArchiveNote})">X</button></p>`
}



