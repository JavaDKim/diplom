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

 	useEffect(() => {
		console.log(`token ${token}`);
    setApi(new Api(token))
  }, [token]) 

  // Получение массива со всеми постами//
   useEffect(() => {
    if (api.token) {
      api.getAllPosts()
        .then(data => {
          console.log(data);
          setPostsSrv(data);
        })
    }
  }, [api.token]) 
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
			setPostsSrv
		}}>
			<Row className="justify-content-center"><NavbarMenu/></Row>
			<Row><RoutesBlog/></Row>

		</AppCtx.Provider>
	</Container>
  );
}

export default App;
