import Card from 'react-bootstrap/Card';

function PostNew({ img }) {
	return (
		<>
			<Card>
				<Card.Img variant="top" src={require(`../../assets/images/${img}`)} />
				<Card.Body>
					<Card.Text>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</Card.Text>
				</Card.Body>

			</Card>
		</>
	);
}

export default PostNew;