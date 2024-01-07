import React, { forwardRef } from 'react'
import withDimensions from './withDimensions'

const Component1 = (props, ref) => {
	const { width } = props
	return (
		<div ref={ref} className='component1'>
			<h2> Welcome to Component 1 </h2>
			<p> Width: {width} </p>
		</div>
	)
}

export default withDimensions(forwardRef(Component1))
