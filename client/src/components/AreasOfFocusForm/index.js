/* eslint-disable react/prop-types */
import React, { useState } from "react";

import "./styles.css";

const AreasOfFocusForm = ({ addNewArea }) => {
	const [area, setArea] = useState({
		message: "",
		level: "",
	}); // { message: "" level: "" id: "" }

	const handleSubmit = (e) => {
		if (!area.message) {
			return alert("Please add an area");
		} else if (!area.level) {
			return alert("Please select a level");
		}
		e.preventDefault();
		addNewArea(area);
		e.target.reset();
		setArea({});
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<p className="areas-input-label">
          Add area of focus:
				</p>
			</div>
			<div className="input-lights-add-button-container">
				<div className="area-input-section">
					<input
						className="areas-input"
						type="text"
						name="area"
						placeholder="eg. CSS, useEffect Hook..."
						maxLength={15}
						onChange={(e) =>
							setArea({
								...area,
								message: e.target.value,
							})
						}
					/>
				</div>
				<div className="lights-section">
					<input
						className="send-input-red"
						type="radio"
						id="male"
						name="area"
						value="To work on"
						onChange={(e) =>
							setArea({
								...area,
								level: e.target.value,
							})
						}
					></input>
					<input
						className="send-input-red"
						type="radio"
						id="male"
						name="area"
						value="Okay at"
						onChange={(e) =>
							setArea({
								...area,
								level: e.target.value,
							})
						}
					></input>
					<input
						className="send-input-red"
						type="radio"
						id="male"
						name="area"
						value="Good at"
						onChange={(e) =>
							setArea({
								...area,
								level: e.target.value,
							})
						}
					></input>
				</div>
				<div className="add-area-button-section">
					<div className="area-display">{area.level}</div>
					<div className="buton-wrapper">
						<button className="add-area-button">Add</button>
					</div>
				</div>
			</div>
		</form>
	);
};

export default AreasOfFocusForm;
