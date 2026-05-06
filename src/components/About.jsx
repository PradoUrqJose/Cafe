import gsap from 'gsap';
import { SplitText } from 'gsap/all'
import { useGSAP } from '@gsap/react'

const About = () => {
	useGSAP(() => {
		const titleSplit = SplitText.create('#about h2', {
			type: 'words'
		})

		const scrollTimeline = gsap.timeline({
			scrollTrigger: {
				trigger: '#about',
				start: 'top center'
			}
		})

		scrollTimeline
			.from(titleSplit.words, {
				opacity: 0, duration: 1, yPercent: 100, ease: 'expo.out', stagger: 0.02
			})
			.from('.top-grid div, .bottom-grid div', {
				opacity: 0, duration: 1, ease: 'power1.inOut', stagger: 0.04,
			}, '-=0.5')
	})

	return (
		<div id="about">
			<div className="mb-16 md:px-0 px-5">
				<div className="content">
					<div className="md:col-span-8">
						<p className="badge">Justificacion</p>
						<h2>
							Por qué se escogió Alemania análisis Estratégico
						</h2>
					</div>

					<div className="sub-content">
						<p>
							Alemania es uno de los principales compradores de café peruano, tiene alto consumo per cápita (+5 kg/persona) y sirve como puerta de entrada a la Unión Europea. Se cuenta con la ventaja de arancel 0% por el Acuerdo Comercial vigente.						</p>

					</div>
				</div>
			</div>

			<div className="top-grid">
				<div className="md:col-span-3">
					<div className="noisy" />
					<img src="/images/abt1.png" alt="grid-img-1" />
				</div>

				<div className="md:col-span-6">
					<div className="noisy" />
					<img src="/images/abt2.png" alt="grid-img-2" />
				</div>

				<div className="md:col-span-3">
					<div className="noisy" />
					<img src="/images/abt5.png" alt="grid-img-5" />
				</div>
			</div>

			<div className="bottom-grid">
				<div className="md:col-span-8">
					<div className="noisy" />
					<img src="/images/abt3.png" alt="grid-img-3" />
				</div>

				<div className="md:col-span-4">
					<div className="noisy" />
					<img src="/images/abt4.png" alt="grid-img-4" />
				</div>
			</div>

		</div>
	)
}
export default About
