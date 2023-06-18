import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function PostNew({ img, title, text, data, id }) {
	const navigate = useNavigate()

	const go = (e) => {
		e.preventDefault()
		navigate(`/post/${id}`)
	}
	return (
		<Col xs={12} md={4} className='justify-content-center mt-3'>
			<Card>
				<Card.Img onClick={go} variant="top" src={require(`../../assets/images/${img}`)} />
				<Card.ImgOverlay>
					{/* 					<Card.Title style={{ color: "gray" }}>
						{title}
					</Card.Title> */}
				</Card.ImgOverlay>
				<Card.Body>
					<Card.Text style={{ fontSize: "14px" }}>{title + ". " + text.slice(0, 121) + " ...."}</Card.Text>
				</Card.Body>
			</Card>
		</Col>
	);
}

export default PostNew;