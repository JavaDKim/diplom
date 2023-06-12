import { Container } from "react-bootstrap";
import AddEditPost from "../components/AddEditPost/AddEditPost";
import { useContext } from "react";
import AppCtx from "../context"

function EditPost() {
	const {
		elPost,
	} = useContext(AppCtx);

	return <Container>
		<AddEditPost postObj={elPost} />
	</Container>
}

export default EditPost;