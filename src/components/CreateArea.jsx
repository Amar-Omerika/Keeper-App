import React, { useState } from "react";
function CreateArea() {
	const [note, setNote] = useState({
		title: "",
		content: "",
	});
	function handleChange(event) {
		const { name, value } = event.target;
		setNote((prevNote) => {
			return {
				...prevNote,
				[name]: value,
			};
		});
	}
	return (
		<div>
			<form>
				<input
					onChange={handleChange}
					value={note.title}
					placeholder="Title"
					name="title"
				/>
				<textarea
					onChange={handleChange}
					value={note.content}
					name="content"
					placeholder="Take a note..."
					cols="30"
					rows="10"
				></textarea>
				<button>Add</button>
			</form>
		</div>
	);
}
export default CreateArea;
