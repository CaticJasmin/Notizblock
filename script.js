
let notesTitles = ['Ba', 'Aufgabe'];
let notes = ['banana', 'rasen mähen'];

let trashNotesTitles = [];
let trashNotes = [];

let archiveNotesTitles = [];
let archiveNotes = [];


function init() {
    getInputTemplate();
    getFromLocalStorage();
    renderNotes();
}

function getFromLocalStorage() {
    let myArr = JSON.parse(localStorage.getItem("notesTitles"));
    let myArr2 = JSON.parse(localStorage.getItem("notes"));

    if (myArr, myArr2 = []) {
        notes, notesTitles != myArr;
    }
}

function saveToLocalStorage() {
    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.setItem("notesTitles", JSON.stringify(notesTitles));
}



// How to show the notes?
function renderNotes() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}



// How to remove note from existing notes array to trash or archive?
function moveNoteToTrash(indexNote) {
    let trashNote = notes.splice(indexNote, 1);
    trashNotes.push(trashNote);
    let trashNoteTitle = notesTitles.splice(indexNote, 1);
    trashNotesTitles.push(trashNoteTitle);

    renderNotes();
    renderTrashNotes();
}

function renderTrashNotes() {
    let trashContentRef = document.getElementById('trash_content');
    trashContentRef.innerHTML = "";

    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
        trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
    }
}



function moveNoteToArchive(indexNote) {
    let archiveNote = notes.splice(indexNote, 1);
    archiveNotes.push(archiveNote);
    let archiveNoteTitle = notesTitles.splice(indexNote, 1);
    archiveNotesTitles.push(archiveNoteTitle);

    renderNotes();
    renderArchiveNotes();
}

function renderArchiveNotes() {
    // Archive is shown in new window
    let archiveContentRef = document.getElementById('archive_content');
    archiveContentRef.innerHTML = `<h2>Archive</h2><button class="btn" onclick="hideWindow()">X</button>`;

    for (let indexArchiveNote = 0; indexArchiveNote < archiveNotes.length; indexArchiveNote++) {
        archiveContentRef.innerHTML += getArchiveNoteTemplate(indexArchiveNote);
    }
}

function hideWindow() {
    let archiveContentRef = document.getElementById('archive_content');
    archiveContentRef.innerHTML = "";
}



// How to delete the note from trash/archive?
function deleteNote(indexTrashNote) {
    trashNotes.splice(indexTrashNote, 1);
    renderTrashNotes();
}

function deleteNoteFromArchive(indexArchiveNote) {
    archiveNotes.splice(indexArchiveNote, 1);
    renderArchiveNotes();
}



// How to add note/noteTitle to existing notes/notesTitles array and save it to local storage?
function addNoteandNoteTitle() {
    let noteTitleInputRef = document.getElementById('noteTitle_input');
    let noteInputRef = document.getElementById('note_input');

    if (noteTitleInputRef.value, noteInputRef.value != "") {
        notesTitles.push(noteTitleInputRef.value);
        notes.push(noteInputRef.value);
    }
    saveToLocalStorage();
    renderNotes();

    noteTitleInputRef.value = "";
    noteInputRef.value = "";
}



