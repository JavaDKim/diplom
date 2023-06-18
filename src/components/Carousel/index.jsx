import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./carousel.css"


function ControlledCarousel() {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex) => {
		setIndex(selectedIndex);
	};

	return (
		<Carousel activeIndex={index} onSelect={handleSelect} className='carousel'>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src={require('../../assets/images/main2.png')}
					alt="First slide"
				/>
				<Carousel.Caption>
					<h3>"ПАРК ГАЛИЦКОГО". РОССИЯ. Краснодар</h3>
					<p>Известный меценат и предприниматель потратил на парк 4 млрд рублей — и развитие идет до сих пор. В результате пустырь рядом со стадионом превратился в большой современный парк, который теперь называют обязательной к посещению достопримечательностью и произведением искусства.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src={require('../../assets/images/main1.png')}
					alt="Second slide"
				/>

				<Carousel.Caption>
					<h3>ГОРА ЭЛЬБРУС. РОССИЯ. КАБАРДИНО-БАЛКАРСКАЯ РЕСПУБЛИКА</h3>
					<p> Эльбрус протыкает макушкой небо чуть севернее Главного Кавказского хребта. Здесь он появился примерно 2-3 миллиона лет назад. За это время Эльбрус дорос до того, чтобы стать самой высокой горной вершиной Европы и попасть в список высочайших гор шести частей света «Семь вершин».</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src={require('../../assets/images/main3.png')}
					alt="Third slide"
				/>

				<Carousel.Caption>
					<h3>БАРХАН САРЫ-КУМ. РОССИЯ. ДАГЕСТАН</h3>
					<p>
						В 18 километрах от Махачкалы, в предгорьях хребта Нарат-Тюбе расположен удивительный памятник природы – огромный песчаный бархан Сары-Кум.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default ControlledCarousel;