import React from "react";
function CreateArea() {
	return (
		<div>
			<form>
				<input placeholder="Title" name="title" />
				<textarea
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
