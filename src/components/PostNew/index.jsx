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
		if (element === 2) {
			navigate(`/post/648cc77be0bf2c519befba87`)
		}
		if (element === 3) {
			navigate(`/post/648b1f00e0bf2c519bee6cb5`)
		}
		if (element === 4) {
			navigate(`/post/648cd1f8e0bf2c519bf02b66`)
		}
		if (element === 5) {
			navigate(`/post/648cd38be0bf2c519bf03238`)
		}
		if (element === 6) {
			navigate(`/post/648cd450e0bf2c519bf032c1`)
		}
		if (element === 7) {
			navigate(`/post/648cd555e0bf2c519bf0341a`)
		}
		if (element === 8) {
			navigate(`/post/648cd450e0bf2c519bf032c1`)
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