import whatInput from 'what-input'

const MOUSE_INTENT_CLASS = 'mouse-intent'

function patchAccessibilityStyles () {
  // Add style block to head that disables outline on mouse intent/input
  setupStyling()

  whatInput.registerOnChange(handleIntents, 'intent')
  whatInput.registerOnChange(handleInputs, 'input')
}

const css = `
  body.${MOUSE_INTENT_CLASS} [role="button"]:focus,
  body.${MOUSE_INTENT_CLASS} [tabindex]:focus,
  body.${MOUSE_INTENT_CLASS} a:focus,
  body.${MOUSE_INTENT_CLASS} button:focus,
  body.${MOUSE_INTENT_CLASS} summary:focus {
    outline: none;
  }
`

function setupStyling () {
  const style = document.createElement('style')
  style.type = 'text/css'
  style.appendChild(document.createTextNode(css))

  document.querySelector('head').appendChild(style)
}

function handleIntents () {
  const intent = whatInput.ask('intent')
  toggleMouseClass(intent)
}

function handleInputs () {
  const input = whatInput.ask()
  toggleMouseClass(input)
}

function toggleMouseClass (type) {
  const body = document.querySelector('body')
  type === 'mouse'
    ? body.classList.add(MOUSE_INTENT_CLASS)
    : body.classList.remove(MOUSE_INTENT_CLASS)
}

export default patchAccessibilityStyles
