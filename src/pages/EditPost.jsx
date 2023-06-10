import { Container } from "react-bootstrap";
import AddEditPostCopy from "../components/AddEditPost/AddEditPostCopy";

function EditPost() {
	return <Container>
		<AddEditPostCopy postObj={{ title: "мой пост", image: "https://kulturologia.ru/files/u18214/russia1.jpg", text: "описание поста", tags: [] }} />
	</Container>
}

export default EditPost;