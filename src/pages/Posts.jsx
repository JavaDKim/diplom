import { useContext } from "react";
import AppCtx from "../context";
import { Container } from "react-bootstrap";
import "./style.css"
import CardPost from "../components/CardPost";


function Posts() {

	const {
		postsSrv,
		setPostsSrv,
		token,
		setToken,
		api,
		setApi,
		user,
		setUserId
	} = useContext(AppCtx);

	return (
		<Container className="contain_Page_Posts">
			{postsSrv.map((e) => <CardPost key={e._id} elPost={e} />)}
		</Container>
	)
}

export default Posts;