

import { useState, useEffect } from "react";
import { Container, Row } from 'react-bootstrap';
//Стили//
import './index.css';
//Функции//
import Api from "./api"
import AppCtx from "./context";

// Код от Димы 06.06.2023 //
import './App.css';
//импортируем хеадер и футер
import NavbarMenu from './components/NavbarHeader';
//импортируем routes
import RoutesBlog from "./routes";

function App() {
	const [user, setUser] = useState(localStorage.getItem("travelBlogUser"));
  const [userId, setUserId] = useState(localStorage.getItem("travelBlogId"));
  const [token, setToken] = useState(localStorage.getItem("travelBlogToken"));
  const [api, setApi] = useState(new Api(token)); // создает класс api из конструктора 
  const [userInfo, setUserInfo] = useState({});
  const [postsSrv, setPostsSrv] = useState([]); // хранит масси всех постов
	const [postsSrvAll, setPostsSrvAll] = useState(JSON.parse(localStorage.getItem("travelPostsAll"))); // показывать все посты или только с тегом "DiplomLk12"

 	useEffect(() => {
    setApi(new Api(token))
  }, [token]) 
useEffect(() => {
	if (postsSrvAll) {
		localStorage.setItem("travelPostsAll",JSON.stringify(true))
	}
	else{
		localStorage.setItem("travelPostsAll",JSON.stringify(false))
	}
}, [postsSrvAll]);

  // Получение массива со всеми постами//
   useEffect(() => {
    if (api.token) {
      api.getAllPosts()
        .then(data => {
					if (postsSrvAll) {
						setPostsSrv(data);						
					}else{
						setPostsSrv(data.filter(el=>el.tags.includes("DiplomLk12")));
					}
        })
    }
  }, [api.token, postsSrvAll]) 
	return (

	<Container className="container_body">
		<AppCtx.Provider value={{
			token,
			setToken,
			api,
			setApi,
			user,
			setUser,
			userId,
			setUserId,
			userInfo,
			setUserInfo,
			postsSrv,
			setPostsSrv,
			postsSrvAll,
			setPostsSrvAll
		}}>
			<Row className="justify-content-center"><NavbarMenu/></Row>
			<Row><RoutesBlog/></Row>

		</AppCtx.Provider>
	</Container>
  );
}

export default App;
