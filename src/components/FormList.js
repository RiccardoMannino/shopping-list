import { useState } from "react";
import { Button } from "./Button";
import { useList } from "../context/ListContext";

export function FormList() {
	const { addItems } = useList();

	const [description, setDescription] = useState("");


	function handleSubmit(e) {
		e.preventDefault();

		if (!description) return;

		const id = crypto.randomUUID();

		const newItem = {
			id: id,
			description: description,
		};

		addItems(newItem);

		setDescription("");

	}

	return (
		<div>
			<form className="form" onSubmit={handleSubmit}>
				<label>Inserisci la tua attività da fare</label>

				<input
					type="text"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<Button>Aggiungi</Button>
			</form>
		</div>
	);
}
