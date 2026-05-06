'use client';

import { coffeeLogistics } from '../../constants/index.js'
import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

const Menu = () => {
	const contentRef = useRef();
	const [currentIndex, setCurrentIndex] = useState(0);

	useGSAP(() => {
		gsap.fromTo('#title', { opacity: 0 }, { opacity: 1, duration: 1 });
		gsap.fromTo('.logistics-item img', { opacity: 0, xPercent: -100 }, {
			xPercent: 0, opacity: 1, duration: 1, ease: 'power1.inOut'
		})
		gsap.fromTo('.details h2', { yPercent: 100, opacity: 0 }, {
			yPercent: 0, opacity: 100, ease: 'power1.inOut'
		})
		gsap.fromTo('.details p', { yPercent: 100, opacity: 0 }, {
			yPercent: 0, opacity: 100, ease: 'power1.inOut'
		})
	}, [currentIndex]);

	const totalItems = coffeeLogistics.length;

	const goToSlide = (index) => {
		const newIndex = (index + totalItems) % totalItems;

		setCurrentIndex(newIndex);
	}

	const getCocktailAt = (indexOffset) => {
		return coffeeLogistics[(currentIndex + indexOffset + totalItems) % totalItems]
	}

	const currentItem = getCocktailAt(0);
	const prevItem = getCocktailAt(-1);
	const nextItem = getCocktailAt(1);

	return (
		<section id="menu" aria-labelledby="menu-heading">
			<img src="/images/slider-left-leaf.png" alt="left-leaf" id="m-left-leaf" />
			<img src="/images/slider-right-leaf.png" alt="right-leaf" id="m-right-leaf" />

			<h2 id="menu-heading" className="sr-only">
				Logística del Café
			</h2>

			<nav className="cocktail-tabs" aria-label="Navegación Logística">
				{coffeeLogistics.map((item, index) => {
					const isActive = index === currentIndex;

					return (
						<button key={item.id} className={`
				${isActive
								? 'text-white border-white'
								: 'text-white/50 border-white/50'}
			 `} onClick={() => goToSlide(index)}
						>
							{item.name}
						</button>
					)
				})}
			</nav>

			<div className="content">
				<div className="arrows">
					<button className="text-left" onClick={() => goToSlide(currentIndex - 1)}>
						<span>{prevItem.name}</span>
						<img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true" />
					</button>

					<button className="text-left" onClick={() => goToSlide(currentIndex + 1)}>
						<span>{nextItem.name}</span>
						<img src="/images/left-arrow.png" alt="left-arrow" aria-hidden="true" />
					</button>
				</div>

				<div className="logistics-item cocktail">
					<img src={currentItem.image} className="xl:object-contain object-cover w-full max-w-xl rounded-lg shadow-xl" />
				</div>

				<div className="recipe">
					<div ref={contentRef} className="info">
						<p>Sección:</p>
						<p id="title">{currentItem.name}</p>
					</div>

					<div className="details">
						<h2>{currentItem.title}</h2>
						<p>{currentItem.description}</p>
					</div>
				</div>
			</div>
		</section>
	)
}
export default Menu
