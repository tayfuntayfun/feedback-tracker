import React, { useState } from "react";
import "./styles.css";
import PropTypes from "prop-types";

const HighlightsForm = ({ addHighlight }) => {
	const [highlight, setHighlight] = useState({
		message: "",
		level: "",
	});
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!highlight.message) {
			return alert("Please add an area");
		} else if (!highlight.level) {
			return alert("Please select a level");
		}
		addHighlight(highlight);
		e.target.reset();
		setHighlight({ message: "", level: "" });
	};

	const handleChange = (e) => {
		setHighlight({
			...highlight,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="highlights-form"
			id="add-are-us"
		>
			<div className="add-feedback-heading-container">
				<h3 className="highlights-title">Highlights</h3>
			</div>
			<div className="highlights-form-lights-text-section">
				<div>
					<h6 className="highlights-form-input-heading">
            Write a topic:
					</h6>
					<input
						className="highlights-form-input"
						type="text"
						name="message"
						maxLength={12}
						onChange={handleChange}
					/>
					<div className="highlights-form-description-display">
						<p className="highlights-form-display">
							{highlight.level}
						</p>
					</div>
					<div className="highlights-add-display-section">
						<div className="">
							<button className="btn-primary highlights-form-add-button">
                Add
							</button>
						</div>
					</div>
				</div>
				<div className="lights-section">
					<label
						className="radio-circle-section"
						htmlFor="red-radio-button"
					>
						<input
							type="radio"
							id="red-radio-button"
							name="level"
							value="To work on"
							onChange={handleChange}
							checked=""
						></input>
						<span
							className={
								highlight.level === "To work on"
									? "circle-red-border"
									: "circle-red"
							}
						></span>
					</label>
					<label
						className="radio-circle-section"
						htmlFor="yellow-radio-button"
					>
						<input
							type="radio"
							id="yellow-radio-button"
							name="level"
							value="Okay at"
							onChange={handleChange}
							checked=""
						></input>
						<span
							className={
								highlight.level === "Okay at"
									? "circle-yellow-border"
									: "circle-yellow"
							}
						></span>
					</label>
					<label
						className="radio-circle-section"
						htmlFor="green-radio-button"
					>
						<input
							type="radio"
							id="green-radio-button"
							name="level"
							value="Good at"
							onChange={handleChange}
							checked=""
						></input>
						<span
							className={
								highlight.level === "Good at"
									? "circle-green-border"
									: "circle-green"
							}
						></span>
					</label>
				</div>
			</div>
		</form>
	);
};

HighlightsForm.propTypes = {
	addHighlight: PropTypes.func.isRequired,
};

export default HighlightsForm;
