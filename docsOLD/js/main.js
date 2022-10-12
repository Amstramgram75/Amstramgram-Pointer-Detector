
import { default as PointerDetector } from '../../src/amstramgramPointerDetector.js'

const
	finalInitCounterValue = 1,
	w = window,
	html = document.querySelector('html')
let initCounter = 0, pointerDetected = false

PointerDetector
	.onChange(function () {
		pointerDetected = true
		updateDetect()
	})
	.addMouseClass(document.body, 'amst__mouse')

function updateDetect(){
		let detect = pointerDetected ? `Current pointer detected : <span>${PointerDetector.currentPointerType}</span><br>` : `Current pointer guessed : <span>${PointerDetector.currentPointerType}</span><br>`
		detect += `
		Pointer Events Interface : <span>${PointerDetector.data.pointerEventsInterface}</span><br>
		Pointer Enter event name : <span>${PointerDetector.data.pointerenter}</span><br>
		Pointer Leave event name : <span>${PointerDetector.data.pointerleave}</span><br>
		Pointer Up event name : <span>${PointerDetector.data.pointerup}</span><br>
		Pointer Down event name : <span>${PointerDetector.data.pointerdown}</span><br>
		Pointer Move event name : <span>${PointerDetector.data.pointermove}</span><br>
		`
		document.querySelector('p.detect').innerHTML = detect
}

w.addEventListener('load', _ => {
	init('Window load event dispatched')
})


function init(str) {
	console.log(str)
	initCounter++
	if (initCounter < finalInitCounterValue) return
	console.log('init function start')
	updateDetect()
	html.addEventListener('transitionend', function clean() {
		html.classList.remove('loading')
		html.classList.remove('loaded')
		html.removeEventListener('transitionend', clean)
	})
	html.classList.add('loaded')
}