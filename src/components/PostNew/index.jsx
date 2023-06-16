import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function PostNew({ img, element }) {
	const navigate = useNavigate()

	const go = (e) => {
		e.preventDefault()
		console.log(element);
		if (element === 1) {
			navigate(`/post/648cb35be0bf2c519befb097`)
		}
		if (element === 3) {
			navigate(`/post/648b1f00e0bf2c519bee6cb5`)
		}

	}
	return (
		<>
			<Card>
				<Card.Img onClick={go} variant="top" src={require(`../../assets/images/${img}`)} />
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