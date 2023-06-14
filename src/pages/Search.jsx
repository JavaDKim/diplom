import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AppCtx from "../context"
import VertCard from '../components/CardPost/VertCard';

const Search = () => {
	const {
		postsSrv,
		textSearch,
	} = useContext(AppCtx);
	return (
		<Container className="contain_Page_Posts">
			{postsSrv?.filter(el => el.text.toLowerCase().includes(textSearch.toLowerCase())).map((e, i) => <VertCard key={e._id} elPost={e} />)}
			{postsSrv?.filter(el => el.text.toLowerCase().includes(textSearch.toLowerCase())).length === 0 ?
				<h5>Ничего не найдено</h5>
				: <></>}
		</Container>
	)
}

export default Search;
