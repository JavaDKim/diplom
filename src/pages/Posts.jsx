import { useContext } from "react";
import AppCtx from "../context";
import { Container } from "react-bootstrap";
import "./style.css"
import VertCard from "../components/CardPost/VertCard";


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
			{postsSrv.map((e) => <VertCard key={e._id} elPost={e} />)}
		</Container>
	)
}

export default Posts;