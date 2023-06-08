import { Routes, Route } from "react-router-dom"

// Страницы //

import Main from "./pages/Main"
import Posts from "./pages/Posts"
import CurrentPost from "./pages/CurrentPost"
import Profile from "./pages/Profile"
import AddPost from "./pages/AddPost"
import Auth from "./pages/Auth"
import Contacts from "./pages/Contacts"


const RoutesBlog = () => {
	return (
		<main>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/posts" element={<Posts />} />
				<Route path="/post/:postId" element={<CurrentPost />} />
				<Route path="/post/add" element={<AddPost />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/auth" element={<Auth />} />
				<Route path="/contacts" element={<Contacts />} />
			</Routes>
		</main >
	);
}

export default RoutesBlog;
