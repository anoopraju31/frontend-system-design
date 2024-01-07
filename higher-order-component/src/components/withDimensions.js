import React, { useEffect, useRef, useState } from 'react'

const withDimensions = (Element) => {
	const WithDimension = (props) => {
		const [width, setWidth] = useState(0)
		const [height, setHeight] = useState(0)
		const componentRef = useRef(null)

		useEffect(() => {
			const ref = componentRef.current

			if (!ref) return

			setWidth(ref.offsetWidth)
			setHeight(ref.offsetHeight)
		}, [componentRef])

		return (
			<Element ref={componentRef} width={width} height={height} {...props} />
		)
	}

	return WithDimension
}

export default withDimensions
