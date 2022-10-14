import main from './common/main'
import aside from './common/aside'
import code from './common/code'
import Prism from 'prismjs'

//Redirect to error.html if the browser does not understand our code...
// window.addEventListener('error', e => {
//   const nameModule = window.location.origin + '/js/index.js',
//     nameNoModule = window.location.origin + '/js/noModule/index.js'
//   if (e.filename == nameModule || e.filename == nameNoModule) window.location.href = './error.html'
// })

//Set all the used variables names as custom keywords for Prism
//This has to be done before DOM load
  const myVars = ['emitter', 'EventEmitter']
  Prism.languages.insertBefore('javascript', 'constant', {
    'my-vars': {
      pattern: new RegExp("\\b(?:" + myVars.join("|") + ")\\b(?=}?)(?!:)"),
    }
  });


const
  w = window,
  d = document



w.addEventListener("load", function () {
  main()
  aside()
  code()
  init()
}, false)

function init() {

}