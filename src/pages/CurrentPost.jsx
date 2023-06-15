import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import HomeIcon from '@mui/icons-material/Home';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
//Стили//
import './style.css';

//Контексты//
import AppCtx from "../context"
import { Button, Col, Container, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews/Reviews";


function CurrentPost() {
	const navigate = useNavigate()
	const { postId } = useParams();
	const [titleCountry, setTitleCountry] = useState("");
	const {
		token,
		api,
		country,
		userId,
		elPost,
		setElPost,
		setPostsSrv
	} = useContext(AppCtx);


	const [elPostComments, setElPostComments] = useState([]);
	const [elPostLikes, setElPostLikes] = useState([]);
	const [elPostTags, setElPostTags] = useState([]);

	useEffect(() => {
		api.getSinglePost(postId)
			.then(data => {
				if (!data.err) {
					setElPost(data); //стэйтим элемент поста, который прокинут из App
					setElPostComments(data.comments)
					setElPostLikes(data.likes)
					setElPostTags(data.tags)
				}
				// Проверяем есть ли в тегах Страна или нет (сравнивая теги в массиве со странами)
				setTitleCountry("")
				data.tags?.map(e => country?.map(x => {
					if (x.name?.toLowerCase() === e?.toLowerCase()) {
						setTitleCountry(old => old + " " + x.name)
					}
				}))
			})
	}, [token]);

	useEffect(() => {

	}, [titleCountry]);
	//удаление поста//
	const delPost = (e) => {
		e.preventDefault()
		api.delSinglePost(postId)
		setPostsSrv(prev => prev.filter(e => e._id !== postId))
		navigate("/posts")

	}
	return <>
		<Container>
			{/* 			<div className="spacer" style={{ height: "100px" }}></div> */}

			<Row className="justify-content-beetwen m-0 p-0 mt-3">
				<Col xs={12} md={6} className="justify-content-center mt-2">
					<h2>{titleCountry?.length !== 0 ? titleCountry : "Где то неподалеку ..."}</h2>
					{userId === elPost.author?._id &&
						<Row className="mt-2 mb-2" style={{ width: "200px" }}>
							<Col>
								<Button size="sm" variant="outline-secondary" onClick={(e) => { e.preventDefault(); navigate("/post/edit") }}><EditIcon style={{ fontSize: "16px" }} /> Редактировать</Button>
							</Col>
						</Row>
					}
				</Col>
			</Row>

			<Row xs={12} md={6} className="justify-content-center my-3 text-end">
				<img
					src={elPost?.image}
					alt="Montenegro"
					className="w-100"
					style={{ borderRadius: "5px" }}
				/>
			</Row>


			<Row className=" mt-2">
				<Col xs={12}>
					<div>
						<h4 className="mt-3" style={{}}>
							{elPost?.title}
						</h4>
						{userId === elPost.author?._id &&
							<Button size="sm" variant="outline-danger" onClick={delPost}><DeleteForeverIcon style={{ fontSize: "16px" }} />Удалить пост</Button>
						}
					</div>
				</Col>
				<Col xs={12}>
					<div className="mt-5">
						<p>{elPost?.text}
						</p>
					</div>
				</Col>
			</Row>

			<Row className="justify-content-beetwen m-0 p-0 mt-3">
				<Col
					xs={6}
					md={6}
					className="justify-content-center mt-3 p-0 text-start"
				>
					<p>{elPost.author?.name}</p>
				</Col>
				<Col xs={6} md={6} className="justify-content-center mt-3 p-0 text-end">
					<span> {elPost.updated_at?.slice(0, 10)}</span>
				</Col>
			</Row>

			<Row className="justify-content-center">
				<Col xs={12} className="d-flex justify-content-start">

					{elPost.tags?.length > 0 &&
						elPost.tags.map(t => <span
							className={`me-2 rounded-1 `}
							key={t}
							onClick={() => { }}
							style={{
								cursor: "pointer",
								backgroundColor: t === "DiplomLk12" ? "silver" : "MediumAquamarine",
								padding: "0 8px 0 8px"
							}}
						>{t}</span>)}
				</Col>
			</Row>
			{/* блок ОТЗЫВОВ */}
			<Row className="justify-content-center justify-content-md-start mt-2">
				<Reviews />
			</Row>
			<Row className="justify-content-center mt-5 mb-5">
				<Col xs={12} className="d-flex justify-content-center">
					<Button variant="outline-secondary" onClick={() => navigate("/posts")}>
						<HomeIcon style={{ fontSize: "20", marginBottom: "5px" }} /> На главную
					</Button>
				</Col>
			</Row>
			<Row className="justify-content-center m-0 p-0 mt-3">
				<Footer />
			</Row>
		</Container >
	</>
}

export default CurrentPost;

