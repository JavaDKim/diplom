import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

//Стили//
import './style.css';

//Контексты//
import AppCtx from "../context"


function CurrentPost() {

	const { postId } = useParams();

	const {
		token,
		api
	} = useContext(AppCtx);

	const [currentPost, setCurrentPost] = useState({});
	const [currentPostComments, setCurrentPostComments] = useState([]);
	const [currentPostLikes, setCurrentPostLikes] = useState([]);
	const [currentPostTags, setCurrentPostTags] = useState([]);




	//Заглушка//
	// let postId = ("6478d8aee0bf2c519bd0ffdd"); // 
	//const { postId } = useParams()//



	useEffect(() => {
		api.getSinglePost(postId)
			.then(data => {
				if (!data.err) {
					console.log(data);
					setCurrentPost(data);
					setCurrentPostComments(data.comments)
					setCurrentPostLikes(data.likes)
					setCurrentPostTags(data.tags)
				}
			})
	}, [token]);

	console.log(currentPost.author?.name)
	console.log(currentPost.author?.about)
	console.log(currentPost.author?.avatar)
	console.log(currentPost.author?.group)
	console.log(currentPost.author?._id)

	console.log(currentPost.comments)
	console.log(currentPost.likes)
	console.log(currentPost.tags)

	console.log(currentPost.isPublished)
	console.log(currentPost.created_at)
	console.log(currentPost.updated_at)
	console.log(currentPost.image)
	console.log(currentPost.title)
	console.log(currentPost.text)
	console.log(currentPost._id)

	return <>

		<h1>Отдельный пост в блоге</h1>
		<h2>Информация об авторе</h2>
		<div>
			<div>
				Имя автора: <span>{currentPost.author?.name}</span>
			</div>
			<div>
				Id автора: <span>{currentPost.author?._id}</span>
			</div>
			<div>
				Роль автора: <span>{currentPost.author?.about}</span>
			</div>
			<div>
				Группа: <span>{currentPost.author?.group}</span>
			</div>
			<div>
				<img src={currentPost.author?.avatar} alt={currentPost.author?.name} />
			</div>
		</div>

		<h2>Лайки, теги, комментарии</h2>
		<div>
			<div>
				Количество лайков: <span>{currentPostLikes.length}</span>
			</div>
			<div>
				Количество тегов: <span>{currentPostTags.length}</span>

			</div>
			<div>
				Количество тегов: <span>{currentPostComments.length}</span>
			</div>
		</div>

		<h2>Информация о посте</h2>
		<div>
			<div>
				Дата публикации: <span>{currentPost.created_at}</span>
			</div>
			<div>
				Дата обновления публикации: <span>{currentPost.updated_at}</span>
			</div>
			<div>
				Id поста: <span>{currentPost._id}</span>
			</div>
			<div>
				Заголовок поста: <span>{currentPost.title}</span>
			</div>
			<div>
				Текст поста: <span>{currentPost.text}</span>
			</div>
			<div>
				<img src={currentPost.image} alt={currentPost.title} />
			</div>
		</div>

	</>
}

export default CurrentPost;

{/* <Container>
<div className="spacer" style={{ height: "100px" }}></div>

<Row className="justify-content-beetwen m-0 p-0 mt-3">
	<Col xs={12} md={6} className="justify-content-center mt-2">
		<h2>Черногория</h2>
	</Col>

	<Col xs={12} md={6} className="justify-content-center mt-2 text-end">
		<img
			src={userInfo.avatar}
			alt="Montenegro"
			className="w-100"
			style={{ borderRadius: "5px" }}
		/>
	</Col>
</Row>

<Row className=" mt-5">
	<Col xs={12}>
		<div>
			<h4 className="mt-5" style={paragraphStyle}>
				Котор, Будва, Тиват и другие города невероятно красивой страны,
				окруженной высокими горами и чистейшим морем
			</h4>
		</div>
	</Col>
	<Col xs={12}>
		<div className="mt-5">
			<p style={paragraphStyle}>
				Отдых в Черногории выбирают туристы, которые хотят не только
				познакомиться с культурой страны и посмотреть на исторические
				достопримечательности, но и насладиться великолепной природой.
				Самолет летит из Москвы в Черногорию 3 часа. Время в Черногории
				отстает от московского на два часа. Климат Черногории идеально
				подходит для круглогодичного отдыха. Летом здесь не очень жарко
				(максимум +29°C), зимой тепло (на побережье не меньше +11°C, в
				горах около −6°C), проводить время на свежем воздухе очень
				комфортно. Резких перепадов температуры не бывает. Лучшее время
				для отдыха в Черногории — с мая по октябрь. Купальный сезон
				стартует уже в апреле. Зимой в Черногории начинается горнолыжный
				сезон. В декабре на побережье Адриатического моря тепло,
				температура воздуха не опускается ниже +11°C, а в горах уже
				стабильный «минус» (до −9°C) и устойчивый снежный покров.
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
		<p>Иван Иванов</p>
	</Col>
	<Col xs={6} md={6} className="justify-content-center mt-3 p-0 text-end">
		<p>12.01.2023</p>
	</Col>
</Row>

<Row className="justify-content-center">
	<Col xs={12} className="d-flex justify-content-start">
		<button className="btn btn-primary btn-hover-cursor me-3">
			Тег 1
		</button>
		<button className="btn btn-primary btn-hover-cursor me-3">
			Тег 2
		</button>
		<button className="btn btn-primary btn-hover-cursor">Тег 3</button>
	</Col>
</Row>

<Row className="justify-content-center mt-5 mb-5">
	<Col xs={12} className="d-flex justify-content-center">
		<button className="btn btn-outline-secondary btn-lg">
			На главную
		</button>
	</Col>
</Row>

<Row className="justify-content-center m-0 p-0 mt-3">
	<Footer />
</Row>
</Container> */}