import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
	const [offset, setOffset] = useState(0);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			setOffset(window.scrollY * -0.4);
		});
		let titles = document.querySelectorAll(".anim");
		let observer = new IntersectionObserver(entries => {
			console.log(entries);
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add("animate");
				} else {
					entry.target.classList.remove("animate");
				}
			});
		});
		titles.forEach(title => {
			observer.observe(title);
		});
	}, []);

	return (
		<div className="App">
			<section>
				<h1 className="anim">You have no idea how cool SVG is</h1>
			</section>
			<section>
				<h1 className="anim">Animating SVG is so fucking fun</h1>
			</section>
			<section>
				<h1 className="anim">
					Seriously You <i>NEED</i> to try playing with SVG
				</h1>
			</section>
			<svg viewBox="50 0 400 350">
				<path
					id="our-text"
					fill="#fff"
					d="M.756 295.488s104.737-30.504 70.618-124.363C37.255 77.265 208.643 2.179 208.643 2.179"
				/>
				<text y="40" fontSize="30" fontFamily="san-serif">
					<textPath
						id="text-path"
						className="text"
						href="#our-text"
						startOffset={offset}
					>
						this is the new trick i learned today and it looks so goddamn cool
					</textPath>
				</text>
			</svg>
		</div>
	);
}

export default App;
