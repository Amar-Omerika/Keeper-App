import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { isPropertySignature } from "typescript";

function App() {
	const [notes, setNotes] = useState([]);
	function addNote(newNote) {
		setNotes((prevNotes) => {
			return [...prevNotes, newNote];
		});
	}
	function deleteNote(id) {}
	return (
		<div>
			<Header />
			<CreateArea onAdd={addNote} />
			{notes.map((noteItem) => {
				return (
					<Note
						title={noteItem.title}
						content={noteItem.content}
						onDelete={deleteNote}
					/>
				);
			})}
			<Footer />
		</div>
	);
}

export default App;
