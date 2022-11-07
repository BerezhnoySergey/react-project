import React, { useState } from "react";
import "./FuncStarRating.scss";
import Stars from "./Star";

const FuncStarRating = (props) => {
	const [rating, setRating] = useState(null);
	const [hover, setHover] = useState(null);

	function onMouseLeave() {
		setHover(null);
	}

	return (
		<div className="star__container">
			{[...Array(5)].map((star, item) => {
				const ratingValue = item + 1;
				function onMouseEnter() {
					setHover(ratingValue);
				}
				return (
					<Stars
						ratingValue={ratingValue}
						setRating={setRating}
						hover={hover}
						rating={rating}
						onMouseEnter={onMouseEnter}
						onMouseLeave={onMouseLeave}
						key={ratingValue}
					></Stars>
				);
			})}
			<p className="text">Твой рейтинг {rating}. </p>
		</div>
	);
};

export default FuncStarRating;
