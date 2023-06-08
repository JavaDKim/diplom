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