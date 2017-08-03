import React from 'react'
import { render } from 'react-dom'
import { SkiDayCount } from './components/SkiDayCount'

window.React = React

render(
	<SkiDayCount day={
		[
			{
				resort: "Montreal",
				date: new Date("01/02/2017"),
				powder: true,
				backcountry: false
			},
			{
				resort: "Ottawa",
				date: new Date("01/04/2017"),
				powder: true,
				backcountry: true
			},
			{
				resort: "Montreal",
				date: new Date("03/07/2017"),
				powder: false,
				backcountry: true
			},
		]
	} />,
	document.getElementById('react-container')
)