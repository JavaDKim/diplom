import React from 'react';
import { Button, Card } from 'react-bootstrap';
import "./style.css"
const CardPost = ({ elPost }) => {
	return (
		<>
			<Card className="bg-dark text-white">
				<Card.Img className='card_img' variant="top" src={elPost.image} />
				<Card.ImgOverlay>
					<Card.Title>{elPost.title}</Card.Title>
					<Card.Text>
						{elPost.text}
					</Card.Text>
					<Card.Text>Last updated 3 mins ago</Card.Text>
				</Card.ImgOverlay>

			</Card>
		</>
	);
}

export default CardPost;
