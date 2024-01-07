import React, { forwardRef } from 'react'
import withDimensions from './withDimensions'

const Component2 = (props, ref) => {
	const { width, height } = props
	return (
		<div ref={ref} className='component2'>
			<h2> Hey, Welcome to component 2 </h2>
			<p> Width: {width}</p>
			<p> Height: {height} </p>
		</div>
	)
}

export default withDimensions(forwardRef(Component2))
