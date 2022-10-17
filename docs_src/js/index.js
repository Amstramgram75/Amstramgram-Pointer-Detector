import main from './common/main'
import aside from './common/aside'
import code from './common/code'
import Prism from 'prismjs'
import pointerDetector from '../../src/amstramgramPointerDetector'


//Redirect to error.html if the browser does not understand our code...
window.addEventListener('error', e => {
  const nameModule = window.location.origin + '/js/index.js',
    nameNoModule = window.location.origin + '/js/noModule/index.js'
  if (e.filename == nameModule || e.filename == nameNoModule) window.location.href = './error.html' 
})



//Set all the used variables names as custom keywords for Prism
//This has to be done before DOM load
  const myVars = ['pointerDetector']
  Prism.languages.insertBefore('javascript', 'constant', {
    'my-vars': {
      pattern: new RegExp("\\b(?:" + myVars.join("|") + ")\\b(?=}?)(?!:)"),
    }
  });


const
  w = window,
  d = document,
  p_interface = pointerDetector.interface

//Normalize pointer events
const
  pointerenter = (p_interface == 'touch') ? 'none' : p_interface + 'enter',
  pointerleave = (p_interface == 'touch') ? 'none' : p_interface + 'leave',
  pointerup = (p_interface == 'touch') ? 'touchend' : p_interface + 'up',
  pointerdown = (p_interface == 'touch') ? 'touchstart' : p_interface + 'down',
  pointermove = p_interface + 'move'

document.body.addEventListener(pointerup, e => console.log(e, pointerup))

let pointerDetected = (p_interface != 'pointer')
if (p_interface == 'pointer') {
  pointerDetector.on(_ => {
    if (pointerDetected) {
      console.log("Pointer has changed")
    } else {
      console.log("Pointer has been detected")
    }
    pointerDetected = true
    updateDetect()
  })
}
pointerDetector.class('amst__mouse')

function updateDetect(){
  d.querySelector('table span.orange').innerHTML = pointerDetected ? 'detected' : 'guessed'
  d.querySelector('table .type').innerHTML = pointerDetector.type.toUpperCase()
  d.querySelector('table .interface').innerHTML = p_interface.toUpperCase()
}


w.addEventListener("load", function () {
  main()
  aside()
  code()
  init()
}, false)

function init() {
	updateDetect()
}