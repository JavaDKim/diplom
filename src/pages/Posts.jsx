import { useContext, useEffect } from "react";
import AppCtx from "../context";
import { Container } from "react-bootstrap";
import "./style.css"
import VertCard from "../components/CardPost/VertCard";
import Pagination from "../components/Pagination";
import Filter from "../components/Filter";

function Posts() {

	const {
		postsSrv,
		setPostsSrv,
		token,
		setToken,
		api,
		setApi,
		user,
		setUserId,
		paginate
	} = useContext(AppCtx);



	return (
		<Container className="contain_Page_Posts">
			<div style={{ gridColumnEnd: "span 4" }}><Pagination hk={paginate} /></div>
			{/* <Filter /> */}
			{paginate.setDataPerPage().map((e) => <VertCard key={e._id} elPost={e} />)}
			{/* {postsSrv.map((e) => <VertCard key={e._id} elPost={e} />)} */}
		</Container>
	)
}

export default Posts;