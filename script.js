
let notesTitles = ['Ba', 'Aufgabe'];
let notes = ['banana', 'rasen mähen'];

let trashNotesTitles = [];
let trashNotes = [];

let archiveNotesTitles = [];
let archiveNotes = [];

let allNotes = {
    'notesTitles': ['Ba', 'Aufgabe'],
    'notes': ['banana', 'rasen mähen'],
    'trashNotesTitles': [],
    'trashNotes': [],
    'archiveNotesTitles': [],
    'archiveNotes': [],
}

function init() {
    getInputTemplate();
    getFromLocalStorage();
    renderNotes();
}
function renderAllNotes() {
    renderNotes();
    renderTrashNotes();
    renderArchiveNotes();
}


function moveNote(indexNote, startKey, destinationKey) {
    let note = allNotes[startKey].splice(indexNote, 1);
    allNotes[destinationKey].push(note[0]);

    let notesTitle = allNotes[startKey + "Titles"].splice(indexNote, 1);
    allNotes[destinationKey + "Titles"].push(notesTitle[0]);

    renderAllNotes();
}


function renderNotes() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";


    for (let indexNote = 0; indexNote < allNotes.notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}

function renderTrashNotes() {
    let trashContentRef = document.getElementById('trash_content');
    trashContentRef.innerHTML = "";

    for (let indexTrashNote = 0; indexTrashNote < allNotes.trashNotes.length; indexTrashNote++) {
        trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
    }
}
// Show archive in new window
function renderArchiveNotes() {
    let archiveContentRef = document.getElementById('archive_content');
    archiveContentRef.innerHTML = `<h2>Archive</h2><button class="btn" onclick="hideWindow()">X</button>`;

    for (let indexArchiveNote = 0; indexArchiveNote < allNotes.archiveNotes.length; indexArchiveNote++) {
        archiveContentRef.innerHTML += getArchiveNoteTemplate(indexArchiveNote);
    }
}
// hide archive window
function hideWindow() {
    let archiveContentRef = document.getElementById('archive_content');
    archiveContentRef.innerHTML = "";
}


// Add note/noteTitle and save it to local storage
function addNoteandNoteTitle() {
    let noteTitleInputRef = document.getElementById('noteTitleInput');
    let noteInputRef = document.getElementById('noteInput');

    if (noteTitleInputRef.value, noteInputRef.value != "") {
        allNotes.notesTitles.push(noteTitleInputRef.value);
        allNotes.notes.push(noteInputRef.value);
    }
    saveToLocalStorage();
    renderNotes();

    noteTitleInputRef.value = "";
    noteInputRef.value = "";
}

function deleteNote(indexTrashNote) {
    allNotes.trashNotes.splice(indexTrashNote, 1);
    allNotes.trashNotesTitles.splice(indexTrashNote);
    renderTrashNotes();
}

// Save to/get from local storage
function saveToLocalStorage() {
    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.setItem("notesTitles", JSON.stringify(notesTitles));
}

function getFromLocalStorage() {
    let myArr = JSON.parse(localStorage.getItem("notesTitles"));
    let myArr2 = JSON.parse(localStorage.getItem("notes"));

    if (myArr, myArr2 = []) {
        notes, notesTitles != myArr;
    }
}

