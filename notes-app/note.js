var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/notesapp');

var NoteSchema = mongoose.Schema({
	title: {
		type: String,
		index: true
	},
	body: {
		type: String
	}
});



var Note = module.exports = mongoose.model('Note', NoteSchema);

module.exports.getNoteByTitle = function(title, callback){
	var query = {title: title};
	Note.findOne(query, callback);
}


module.exports.createNote = function(newNote, callback){
   			newNote.save(callback);
}