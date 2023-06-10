import React, { useState, useEffect, useContext } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import AppCtx from "../../context"


const AddEditPost = ({ postObj }) => {
	// если пришел пустой объект то добавление и константе AoE присваиваем true//
	const AorE = Object.keys(postObj).length === 0
	// Стайты для полей
	const [title, setTitle] = useState("")
	const [image, setImage] = useState("")
	const [text, setText] = useState("")
	const [testImg, setTestImg] = useState({}) // проверяет правильность заполнения изображения
	const [textColorImg, setTextColorImg] = useState(false) //окрашивает наш подтекст под вводом изображения
	const [tag, setTag] = useState("");
	const [tags, setTags] = useState(["DiplomLk12"]);
	//Навигация//
	const navigate = useNavigate()
	//Контекст//
	const {
		api,
		user,
		setPostsSrv
	} = useContext(AppCtx);

	//	Обновляем теги //
	const updTag = (val) => {
		// Привести к общему регистру
		const textTag = val.toLocaleLowerCase();
		// получить строку без последнего символа (вдруг там пробел или запятая)
		let cut = textTag.slice(0, text.length - 1);
		// Проверить строку на последний символ
		if (/[\s.,;!?]$/.test(textTag)) {
			// Если пробел или знак препинания - обрубить этот символ и записать в массив с тегами
			// Надо проверять насколько такого тега еще не существует
			setTags(prev => prev.includes(cut) ? prev : [...prev, cut]);
			// очистить инпут
			setTag("");
		} else {
			// идем дальше
			setTag(textTag);
		}
	}

	// удаляем теги
	const delTag = (tag) => {
		if (tag !== "DiplomLk12") {
			setTags(prev => prev.filter(tg => tg !== tag))
		}
	}
	// при нажатии на сохранение
	const savePost = (e) => {
		e.preventDefault()
		let body = {
			title,
			image,
			text,
			tags,
		}

		if (AorE) {
			console.log("Добавляем");
			console.log(body);
			api.addPost(body)
				.then(data => {
					console.log(data)
					if (!data.err && !data.error) {
						setPostsSrv(prev => [data, ...prev]);
						clearForm();
						navigate(`/posts`)
					}
				})
		} else {
			console.log("Редактируем");
		}

	}
	const clearForm = () => {
		setTitle("")
		setImage("")
		setText("")
		setTags([])
	}
	//в зависимости от изменния пропса мы исполняем проверку, если это редактирование то заполняем поля из объекта
	useEffect(() => {
		if (!AorE) {
			setTitle(postObj.title)
			setImage(postObj.image)
			setText(postObj.text)
			setTags(postObj.tags)
		}
	}, [postObj]);

	useEffect(() => {
		if (testImg.proportion) {
			setTextColorImg(true)
		}
		else {
			setTextColorImg(false)
		}
	}, [testImg]);


	return (
		<>
			{AorE ? "Добавление поста" : "Редактирование поста"}
			<Form className="mt-3 m-0 p-0" onSubmit={savePost}>
				<Row className="d-md-flex mt-3 m-0" style={{ width: "100%" }}>
					<Col sm={12} md={4}>
						<Form.Label >Заголовок поста	</Form.Label>
					</Col>
					<Col sm={12} md={8}>
						<Form.Control type='text' value={title || ""} onChange={(e) => setTitle(e.currentTarget.value)} required={true} placeholder='введите заголовок поста' />
					</Col>
				</Row>
				<Row className="d-md-flex mt-3 m-0" style={{ width: "100%" }}>
					<Col sm={12} md={4}>
						<Form.Label> Текст поста	</Form.Label>
					</Col>
					<Col sm={12} md={8}>
						<Form.Control as='textarea' row={3} value={text || ""} onChange={(e) => setText(e.currentTarget.value)} required={true} placeholder='введите текст' />
					</Col>
				</Row>
				<Row className="d-md-flex mt-3 m-0" style={{ width: "100%" }}>
					<Col sm={12} md={4}>
						<Form.Label> Основное изображение поста	</Form.Label>
					</Col>
					<Col sm={12} md={8}>
						<Form.Control type='url' value={image || ""} onChange={(e) => setImage(e.currentTarget.value)} required={true} placeholder='введите ссылку на изображение' />
						<span style={{ fontSize: "12px", color: textColorImg ? "forestgreen" : "crimson" }}>
							{!testImg.width
								? "Изображение не доступно, проверьте правильность пути"
								: `ширина: ${testImg.width}px высота: ${testImg.height}px, пропорция (ш/в)=${(testImg.width / testImg.height).toFixed(2)}, правильное соотношение сторон (пропорция) между 1.5 и 1.6`}
						</span>

					</Col>
				</Row>
				{/* строка с 2мя столбцами в правом отображение результата а в левом дополнительные поля для заполнения */}
				<Row className="d-md-flex mt-3 m-0">
					<Col sm={6} className="d-flex mt-3 justify-content-start">
						{/* Работа стегами */}
						<Form.Group className="my-3">
							<Form.Label htmlFor="tags">Добавляем теги, после написания тега нажмите пробел</Form.Label>
							<Form.Control
								type="text"
								id="tags"
								value={tag}
								onChange={(e) => updTag(e.target.value)}
							/>
							{tags.length > 0 && <Form.Text>
								{tags.map(t => <span
									className={`d-inline-block lh-1 ${t !== "DipomLk12" ? "bg-info" : "bg-secondary"} text-light p-2 mt-2 me-2 rounded-1 `}
									key={t}
									onClick={() => delTag(t)}
									style={{
										cursor: "pointer",
									}}
								>{t}</span>)}
							</Form.Text>}
						</Form.Group>
					</Col>
					<Col sm={6} className="d-flex mt-3 justify-content-end">
						<Card style={{ width: '350px' }}>
							<Card.Img variant="top" className='mt-3' src={image}
								onError={() => setTestImg({})} // если ошибка и картинка не прогрузилась то устанавливаем в state  пустой объект
								onLoad={(e) => setTestImg( // если прогрузилась картинка то устанавливаем в state объект с ключами ширины, высоты и соответствия пропорции
									{
										"width": e.currentTarget.width,
										"height": e.currentTarget.height,
										//записываем в объект теста картинки true или false в зависимости от правильности пропорции
										"proportion": (e.currentTarget.width / e.currentTarget.height).toFixed(2) >= 1.5 && (e.currentTarget.width / e.currentTarget.height).toFixed(2) <= 1.6
									}
								)} />
							<Card.Body>
								<Card.Title>{title}</Card.Title>
								<Card.Text >
									{text.slice(0, 30)} <Link style={{ textDecoration: "none", color: "grey" }} to=""><ReadMoreIcon /></Link>
								</Card.Text>
								{text.trim().length > 0 && // если есть текст то появляется кнопка перейти
									<Button size='sm' variant="outline-warning">перейти</Button>}
							</Card.Body>
						</Card>
					</Col>
				</Row>
				<Row className="d-md-flex mt-3 m-0" style={{ width: "100%" }}>
					<Col xs={6} className="d-flex mt-3 justify-content-start">
					</Col>
					<Col xs={6} className="d-flex mt-3 justify-content-end">
						<Button size="sm" variant='outline-danger' style={{ marginRight: "10px" }}>Отмена</Button>
						<Button type='submit' size="sm" disabled={testImg.proportion ? false : true} variant='outline-success'  >Сохранить</Button>
					</Col>
				</Row>
			</Form >

		</>
	);
}

export default AddEditPost;
