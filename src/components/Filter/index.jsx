import React, { useContext, useEffect, useState } from 'react';
import "./style.css"
import AppCtx from "../../context"

const Index = () => {
	const { postsSrv, setPostsSrv } = useContext(AppCtx)
	const [sort, setSort] = useState(null)


	const filterSt = {
		gridColumnEnd: "span 4",
		display: "flex",
		gap: "20px"
	}

	let arrSort = []
	const sortHandler = (vector) => {
		if (vector === sort) {
			setSort(null)
			arrSort = postsSrv.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
			setPostsSrv(arrSort);
		} else {
			setSort(vector)
			arrSort = postsSrv.sort((a, b) => {
				return vector === "up" ? (a.price - b.price) : (b.price - a.price)
			})
		}
	}
	return (
		<div style={filterSt}>
			{/* Сортировка по числу price*/}
			<button
				style={{ backgroundColor: sort === "up" ? "orange" : "white" }}
				onClick={() => sortHandler("up")}
			>По возростанию цены</button>
			<button
				style={{ backgroundColor: sort === "down" ? "orange" : "white" }}
				onClick={() => sortHandler("down")}
			>По убыванию цены</button>
			{/* Фильтрация */}
			<button>Новинки</button>
			<button>Скидки</button>
		</div>
	);
}

export default Index;
