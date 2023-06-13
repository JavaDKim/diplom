import { Routes, Route } from "react-router-dom"

// Страницы //

import Main from "./pages/Main"
import Posts from "./pages/Posts"
import CurrentPost from "./pages/CurrentPost"
import Profile from "./pages/Profile"
import AddPost from "./pages/AddPost"
import Auth from "./pages/Auth"
import EditPost from "./pages/EditPost"
import Setting from "./pages/Setting"
import Favorites from "./pages/Favorites"


const RoutesBlog = () => {
	return (
		<main>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/posts" element={<Posts />} />
				<Route path="/post/:postId" element={<CurrentPost />} />
				<Route path="/post/add" element={<AddPost />} />
				<Route path="/post/edit" element={<EditPost />} />
				<Route path="/profile/:id" element={<Profile />} />
				<Route path="/setting" element={<Setting />} />
				<Route path="/auth" element={<Auth />} />
				<Route path="/favorites" element={<Favorites />} />
			</Routes>
		</main >
	);
}

export default RoutesBlog;
