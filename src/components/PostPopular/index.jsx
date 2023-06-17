import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


function PostPopular({ img, element }) {
	const navigate = useNavigate()

	const go = (e) => {
		e.preventDefault()
		console.log(element);

		if (element === 7) {
			navigate(`/post/648cd555e0bf2c519bf0341a`)
		}
		if (element === 8) {
			navigate(`/post/648cd5dae0bf2c519bf0348a`)
		}
	}
	return (
		<Card className="bg-dark text-white">
			<Card.Img onClick={go} src={require(`../../assets/images/${img}`)} alt="Card image" />
			<Card.ImgOverlay onClick={go}>
				<Card.Title>Card title</Card.Title>
				<Card.Text>
					This is a wider card with supporting text below as a natural lead-in
					to additional content. This content is a little bit longer.
				</Card.Text>
				<Card.Text>Last updated 3 mins ago</Card.Text>
			</Card.ImgOverlay>
		</Card>
	);
}

export default PostPopular;