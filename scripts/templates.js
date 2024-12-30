
function getInputTemplate() {
    document.getElementById('addNotes').innerHTML =`
    <input id="noteTitleInput"  type="text">
    <input id="noteInput"  type="text">
    <button  onclick="addNoteandNoteTitle()">Notiz speichern</button>`
}



function getNoteTemplate(indexNote) {
    return `<p>${allNotes.notesTitles[indexNote]}: ${allNotes.notes[indexNote]}
    <div class="btn2">
    <button class="btn" onclick="moveNote(${indexNote},'notes','trashNotes')">T</button>
    <button class="btn" onclick="moveNote(${indexNote},'notes','archiveNotes')">A</button>
    </div>
    </p>`
}



function getTrashNoteTemplate(indexTrashNote) {
    return `<div class="trash_content"><p>${allNotes.trashNotesTitles[indexTrashNote]}: ${allNotes.trashNotes[indexTrashNote]}
    <button class="btn" onclick="deleteNote(${indexTrashNote})">X</button>
    <button class="btn" onclick="moveNote(${indexTrashNote},'trashNotes','notes')">N</button>
    </div>
    </p>`
}


function getArchiveNoteTemplate(indexArchiveNote) {
    return `<p>${allNotes.archiveNotesTitles[indexArchiveNote]}: ${allNotes.archiveNotes[indexArchiveNote]}
    <div class="btn2">
    <button class="btn" onclick="moveNote(${indexArchiveNote},'archiveNotes','notes')">N</button>
    <button class="btn" onclick="moveNote(${indexArchiveNote},'archiveNotes','trashNotes')">T</button>
    </div>
    </p>`
}



