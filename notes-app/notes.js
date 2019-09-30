const fs=require('fs');
const chalk = require('chalk')

const getNotes=()=>{
    return "Your notes are here..."
}

const addNote=(title,body)=>{
    const notes=loadNotes();
    const duplicateNote =notes.find((note)=>
         note.title===title );

    if(!duplicateNote){
    notes.push({
        title:title,
        body:body
    });
    saveNotes(notes);
    console.log(chalk`{blue.bold New note added!}`);
}else{ss
    console.log(chalk`green.bold Note title taken!`);
}
}

const readNote=(title)=>{
    const notes=loadNotes();
    const found_note=notes.find(note=> note.title===title);
    if(found_note)
        console.log(chalk`{blue ${found_note.title} } \n{yellow ${found_note.body}}`)
    else
        console.log(chalk`{red Node not found}`);
}

const removeNote= function(title){
    const notes=loadNotes();
    const upd_notes=notes.filter((note)=>{
        return note.title !== title
    });
    if(notes.length>upd_notes.length)
        console.log(chalk`{green.bold.inverse Node removed}`);
    else
        console.log(chalk`{red.bold.inverse Node not found}`);
    saveNotes(upd_notes);
}

const listNotes=()=>{
    console.log(chalk`{cyan  Your Notes}`)
    const notes=loadNotes();
    notes.forEach(note => {
        console.log(note.title);
    });
}

const saveNotes=(notes)=>{
    const dataJSON=JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
}

const loadNotes=()=>{
   try{
    const dataBuffer= fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON)
   }
   catch(e){
       return [];
   }_
}

module.exports= {
    getNotes: getNotes,
    addNote: addNote,
    removeNote:removeNote,
    listNotes: listNotes,
    readNote: readNote
};
