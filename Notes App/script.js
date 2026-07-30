let notesTextarea = document.getElementById('notesTextarea')
let addNoteButton = document.getElementById('addNotes')
let noteList = document.getElementById('Notes')


let savedNotes = JSON.parse(localStorage.getItem("allNotes"))
let AllNotes = savedNotes || [];
let notesId = Math.max(AllNotes.length);
let editingNoteId = null;



function savedToLocalStorage() {
    localStorage.setItem("allNotes", JSON.stringify(AllNotes))
}

function AddNotes() {
    const date = new Date()
    if (editingNoteId === null) {
        let note = {
            id: notesId,
            title: title.value,
            text: notesTextarea.value,
            date: date
        }
        AllNotes.push(note)
        console.log(AllNotes)
        savedToLocalStorage()
        showNotes()
    } else {

        let selectEditNote = AllNotes.filter((note) => note.id === editingNoteId)
        console.log(selectEditNote)
        selectEditNote.title = title.value;
        selectEditNote.text = notesTextarea.value;
        savedToLocalStorage()
        showNotes()
        editingNoteId = null

    }
    title.value = ""
    notesTextarea.value = ""
}

addNoteButton.addEventListener('click', () => {
    AddNotes();
})

function showNotes() {
    noteList.innerHTML = "";
    AllNotes.forEach((note, index) => {

        let li = document.createElement('li');
        li.textContent = note.text;

        let title = document.createElement('li');
        title.textContent = note.title

        let date = document.createElement('li');
        date.textContent = note.date

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete";

        let editBtn = document.createElement('button');
        editBtn.textContent = "Edit";

        deleteBtn.addEventListener('click', () => {
            AllNotes.splice(index, 1);
            savedToLocalStorage()
            showNotes();
        })

        editBtn.addEventListener('click', () => {
            editingNoteId = note.id
            title.value = note.title
            notesTextarea.value = note.text;

        })


        li.appendChild(title);
        li.appendChild(date);
        li.appendChild(deleteBtn);
        li.appendChild(editBtn);
        noteList.appendChild(li);
    });
}


showNotes();