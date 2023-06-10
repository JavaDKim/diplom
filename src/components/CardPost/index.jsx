import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import "./style.css"
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import AppCtx from "../../context"
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';


const CardPost = ({ elPost }) => {
	const {
		setToken,
		api,
		user,
		setUser,
		setUserId
	} = useContext(AppCtx);
	return (
		<>
			<Card >
				<Card.Header style={{ fontSize: "12px" }} className='d-flex justify-content-between'><span>{user}</span><span>{(elPost.updated_at).slice(0, 10)}</span></Card.Header>
				<Card.Img variant="top" className='mt-3' src={elPost.image} />
				<Card.Body>
					<Card.Title style={{ fontSize: "16px" }}>{elPost.title}</Card.Title>
					<Card.Text style={{ fontSize: "12px" }}>
						{elPost.text.slice(0, 30)} <Link style={{ textDecoration: "none", color: "grey" }} to=""><ReadMoreIcon /></Link>
					</Card.Text>
				</Card.Body>
				<Card.Footer className='d-flex justify-content-between'><FavoriteIcon style={{ color: "crimson" }} /><ShareIcon style={{ color: "grey" }} /></Card.Footer>
			</Card>
			{/* 2й вариант карточки */}
			{/* 		<Card >
				<Card.Img variant="top" className='mt-3' src={elPost.image} />
				<Card.Body>
					<Card.Title style={{ fontSize: "16px" }}>{elPost.title}</Card.Title>
					<Card.Text style={{ fontSize: "12px" }}>
						{elPost.text.slice(0, 30)} <Link style={{ textDecoration: "none", color: "grey" }} to=""><ReadMoreIcon /></Link>
					</Card.Text>
				</Card.Body>
			</Card> */}
			{/* 1й вариант карточки */}
			{/* 			<Card className="bg-dark text-white">
				<Card.Img className='card_img' variant="top" src={elPost.image} />
				<Card.ImgOverlay>
					<Card.Title>{elPost.title}</Card.Title>
					<Card.Text>
						{elPost.text}
					</Card.Text>
					<Card.Text>Last updated 3 mins ago</Card.Text>
				</Card.ImgOverlay>

			</Card>
 */}		</>
	);
}

export default CardPost;
