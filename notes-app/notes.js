const fs=require('fs');
const chalk = require('chalk')
const Note = require('./note.js')

const getNotes=()=>{
    try{
    return "Your notes are here..."
    }catch(err){
       return [];
   }
}

const addNote=(title,body)=>{

    var newNote = new Note({
        title : title,
        body : body
    })
    Note.createNote(newNote, (err, note) => {
        if(err) throw err;
        console.log(note);
    })
};

const readNote=(title)=>{

    Note.getNoteByTitle(title, (err, note) => {
        if(err) throw err;
        if(!note){
            console.log(chalk`{red Node not found}`);
        }
        else{
            console.log(chalk`{blue ${note.title} } \n{yellow ${note.body}}`)
        }
    })
};

const removeNote= function(title){
    Note.getNoteByTitle(title, (err, note) => {
        if(err) throw err;
        if(!note){
            console.log(chalk`{red.bold.inverse Node not found}`);
        }
        else{
            Note.remove({_id : note._id}, (err) => {
                if(err) throw err;
                console.log(chalk`{green.bold.inverse Node removed}`);
            })
        }
    })
}

const listNotes=()=>{
    Note.find({},{}, (err, notes) => {
        console.log(chalk`{cyan  Your Notes}`)
        if(err){
          console.log(err);
        }
        notes.forEach(note => {
            console.log(note.title);
        });
      })
  
    const notes=loadNotes();

}

module.exports= {
    getNotes: getNotes,
    addNote: addNote,
    removeNote:removeNote,
    listNotes: listNotes,
    readNote: readNote
};
