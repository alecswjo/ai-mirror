import { useEffect, useRef } from 'react'

function Webcam() {
	const videoRef = useRef<HTMLVideoElement | null>(null)

	useEffect(() => {
		if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
			navigator.mediaDevices
				.getUserMedia({ video: true })
				.then((stream) => {
					if (videoRef.current) {
						videoRef.current.srcObject = stream
					}
				})
				.catch((err) => console.error(err))
		}
	}, [])

	return <video ref={videoRef} autoPlay />
}

export default Webcam
