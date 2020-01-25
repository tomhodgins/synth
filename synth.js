// State
let state = {
  theme: 'blue',
  playing: false,
  waveform: 'sine',
  gain: .25,
  distortion: 0,
  oversample: '4x'
}

// Themes
const themes = {
  blue: {
    'white-key': 'darkblue',
    'white-down': 'blue',
    'black-key': 'white',
    'black-down': 'cyan',
    'indicator': 'cyan'
  },
  red: {
    'white-key': 'darkred',
    'white-down': 'red',
    'black-key': 'white',
    'black-down': 'darkorange',
    'indicator': 'darkorange'
  },
  green: {
    'white-key': 'green',
    'white-down': 'darkgreen',
    'black-key': 'white',
    'black-down': 'chartreuse',
    'indicator': 'chartreuse'
  },
  purple: {
    'white-key': 'indigo',
    'white-down': 'mediumvioletred',
    'black-key': 'white',
    'black-down': 'hotpink',
    'indicator': 'deeppink'
  },
  classic: {
    'white-key': 'white',
    'white-down': 'gold',
    'black-key': '#111',
    'black-down': 'yellow',
    'indicator': 'yellow'
  },
  inverse: {
    'white-key': '#222',
    'white-down': 'gold',
    'black-key': 'white',
    'black-down': 'yellow',
    'indicator': 'yellow'
  },
  pink: {
    'white-key': 'magenta',
    'white-down': 'purple',
    'black-key': 'lime',
    'black-down': 'yellow',
    'indicator': 'cyan'
  },
  aqua: {
    'white-key': 'aqua',
    'white-down': 'darkcyan',
    'black-key': 'white',
    'black-down': 'aquamarine',
    'indicator': 'hotpink'
  },
}

// Tonal Scale
const scale = {
  'c-0': 16.35,
  'c-s-0': 17.32,
  'd-0': 18.35,
  'd-s-0': 19.45,
  'e-0': 20.6,
  'f-0': 21.83,
  'f-s-0': 23.12,
  'g-0': 24.5,
  'g-s-0': 25.96,
  'a-0': 27.5,
  'a-s-0': 29.14,
  'b-0': 30.87,
  'c-1': 32.7,
  'c-s-1': 34.65,
  'd-1': 36.71,
  'd-s-1': 38.89,
  'e-1': 41.2,
  'f-1': 43.65,
  'f-s-1': 46.25,
  'g-1': 49,
  'g-s-1': 51.91,
  'a-1': 55,
  'a-s-1': 58.27,
  'b-1': 61.74,
  'c-2': 65.41,
  'c-s-2': 69.3,
  'd-2': 73.42,
  'd-s-2': 77.78,
  'e-2': 82.41,
  'f-2': 87.31,
  'f-s-2': 92.5,
  'g-2': 98,
  'g-s-2': 103.83,
  'a-2': 110,
  'a-s-2': 116.54,
  'b-2': 123.47,
  'c-3': 130.81,
  'c-s-3': 138.59,
  'd-3': 146.83,
  'd-s-3': 155.56,
  'e-3': 164.81,
  'f-3': 174.61,
  'f-s-3': 185,
  'g-3': 196,
  'g-s-3': 207.65,
  'a-3': 220,
  'a-s-3': 233.08,
  'b-3': 246.94,
  'c-4': 261.63,
  'c-s-4': 277.18,
  'd-4': 293.66,
  'd-s-4': 311.13,
  'e-4': 329.63,
  'f-4': 349.23,
  'f-s-4': 369.99,
  'g-4': 392,
  'g-s-4': 415.3,
  'a-4': 440,
  'a-s-4': 466.16,
  'b-4': 493.88,
  'c-5': 523.25,
  'c-s-5': 554.37,
  'd-5': 587.33,
  'd-s-5': 622.25,
  'e-5': 659.25,
  'f-5': 698.46,
  'f-s-5': 739.99,
  'g-5': 783.99,
  'g-s-5': 830.61,
  'a-5': 880,
  'a-s-5': 932.33,
  'b-5': 987.77,
  'c-6': 1046.5,
  'c-s-6': 1108.73,
  'd-6': 1174.66,
  'd-s-6': 1244.51,
  'e-6': 1318.51,
  'f-6': 1396.91,
  'f-s-6': 1479.98,
  'g-6': 1567.98,
  'g-s-6': 1661.22,
  'a-6': 1760,
  'a-s-6': 1864.66,
  'b-6': 1975.53,
  'c-7': 2093,
  'c-s-7': 2217.46,
  'd-7': 2349.32,
  'd-s-7': 2489.02,
  'e-7': 2637.02,
  'f-7': 2793.83,
  'f-s-7': 2959.96,
  'g-7': 3135.96,
  'g-s-7': 3322.44,
  'a-7': 3520,
  'a-s-7': 3729.31,
  'b-7': 3951.07,
  'c-8': 4186.01,
  'c-s-8': 4434.92,
  'd-8': 4698.63,
  'd-s-8': 4978.03,
  'e-8': 5274.04,
  'f-8': 5587.65,
  'f-s-8': 5919.91,
  'g-8': 6271.93,
  'g-s-8': 6644.88,
  'a-8': 7040,
  'a-s-8': 7458.62,
  'b-8': 7902.13
}

// Build <piano-keyboard data-base-note data-size>
document.querySelectorAll('piano-keyboard').forEach(tag => {
  Object.entries(scale)
    .filter((entry, index, list) => {
      const firstIndex = list.indexOf(
        list.find(([key, value]) => key === tag.dataset.baseNote)
      )
      const lastIndex = firstIndex + Number(tag.dataset.size)
      return firstIndex <= index && index < lastIndex
    })
    .map(([key, value]) => {
      const el = document.createElement('keyboard-key')
      el.dataset.note = key
      el.dataset.freq = value
      return el
    })
    .forEach(el => tag.appendChild(el))
})

// Events
let synth
let oscillator
let gain
let distortion

function initializeSynth() {
  if (synth === undefined) {
    synth = new (
      window.AudioContext
      || window.webkitAudioContext
      || window.mozAudioContext
      || window.oAudioContext
      || window.msAudioContext
    )()
    oscillator = synth.createOscillator()
    distortion = synth.createWaveShaper()
    gain = synth.createGain()
    oscillator.type = state.waveform
    //oscillator.connect(gain)
    oscillator.connect(distortion)
    distortion.curve = makeDistortionCurve(state.distortion)
    distortion.oversample = state.oversample
    distortion.connect(gain)
    gain.gain.value = 0
    gain.connect(synth.destination)
    oscillator.start()
  }
}

const strike = event => {
  initializeSynth()

  if (event.target.dataset.note) {
    event.target.dataset.down = true
    oscillator.frequency.value = scale[event.target.dataset.note]
    gain.gain.value = state.gain
    state.playing = true
  }
}

const slide = event => {
  const current = document.elementFromPoint(
    event.clientX || event.touches[0].clientX,
    event.clientY || event.touches[0].clientY
  )
  if (state.playing && current.dataset.note) {
    current.dataset.down = true
    return oscillator.frequency.value = scale[current.dataset.note]
  }
}

const release = event => {
  if (event.target.tagName === 'KEYBOARD-KEY') {
    document.querySelectorAll('keyboard-key[data-down="true"]').forEach(tag =>
      tag.dataset.down = false
    )
    gain.gain.value = 0
    state.playing = false
  }
}

const activateWaveform = event => {
  if (document.querySelector('.active-waveform')) {
    document.querySelector('.active-waveform').classList.remove('active-waveform')
  }
  event.target.classList.add('active-waveform')
  state.waveform = oscillator.type = event.target.dataset.waveform
}

const makeDistortionCurve = amount => {
  let k = typeof amount === 'number'
    ? amount
    : 50
  let n_samples = 44100
  let curve = new Float32Array(n_samples)
  let deg = Math.PI / 180
  let x
  for (let i = 0; i < n_samples; ++i) {
    x = i * 2 / n_samples - 1
    curve[i] = (3 + k) * x * 20 * deg / (Math.PI + k * Math.abs(x))
  }
  return curve
}

function updateSize() {
  ['innerWidth', 'innerHeight'].forEach(dimension =>
    document.documentElement.style.setProperty(
      `--${dimension}`,
      window[dimension] / 100
    )
  )
}

const events = [
  // Click and touch events play notes
  [window, 'touchstart', strike],
  [window, 'mousedown', strike],
  [window, 'touchmove', slide],
  [window, 'mousemove', slide],
  [window, 'touchend', release],
  [window, 'mouseup', release],

  // #gain changes volume
  [
    document.querySelector('#gain'),
    'input',
    event => {
      state.gain = Number(event.target.value)

      if (state.playing) {
        gain.gain.value = state.gain
      }
    }
  ],

  // #distortion changes distortion level
  [
    document.querySelector('#distortion'),
    'input',
    event => {
      state.distortion = Number(event.target.value)
      distortion.curve = makeDistortionCurve(state.distortion)
    }
  ],

  // buttons change waveform
  [
    document.querySelector('[data-waveform="sine"]'),
    'click',
    activateWaveform
  ],
  [
    document.querySelector('[data-waveform="sawtooth"]'),
    'click',
    activateWaveform
  ],
  [
    document.querySelector('[data-waveform="square"]'),
    'click',
    activateWaveform
  ],
  [
    document.querySelector('[data-waveform="triangle"]'),
    'click',
    activateWaveform
  ],

  // load, resize, and orientation change update screen size variables
  [window, 'load', updateSize],
  [window, 'resize', updateSize],
  [window, 'orientationchange', updateSize]

]

events.forEach(
  ([target, action, handler]) => target.addEventListener(action, handler)
)

// Set theme
setTheme(state.theme)

function wrappedNext(item, arr) {
  const index = arr.indexOf(item)
  return index + 1 < arr.length
    ? arr[index + 1]
    : arr[0]
}

function setTheme(string) {
  const [name, vars = theme] = Object.entries(themes).find(
    ([key, value]) => key === string
  )
  document.documentElement.style.setProperty(`--active-theme`, name)
  return Object.entries(vars).forEach(([key, value]) =>
    document.documentElement.style.setProperty(`--${key}`, value)
  )
}

document.querySelector('nav h1').addEventListener(
  'click',
  event => {
    let list = Object.entries(themes)
    let active = list.find(
      ([key, value]) => key === document.documentElement.style.getPropertyValue(
        '--active-theme'
      )
    )
    setTheme(
      wrappedNext(active, list)[0]
    )
    drawFavicon()
  }
)

// Set active waveform
document.querySelector(`[data-waveform="${state.waveform}"]`).classList.add('active-waveform')

// Set default gain
document.querySelector('#gain').value = state.gain

// Set default distortion
document.querySelector('#distortion').value = state.distortion

// Draw app icon
const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')
const small = document.querySelector('link[type="image/x-icon"]')
const large = document.querySelector('link[rel="apple-touch-icon"]')

function drawFavicon() {
  canvas.width = canvas.height = 200
  ctx.fillStyle = 'black'
  ctx.beginPath()
  ctx.moveTo(10, 0)
  ctx.lineTo(190, 0)
  ctx.quadraticCurveTo(200, 0, 200, 10)
  ctx.lineTo(200, 190)
  ctx.quadraticCurveTo(200, 200, 190, 200)
  ctx.lineTo(10, 200)
  ctx.quadraticCurveTo(0, 200, 0, 190)
  ctx.lineTo(0, 10)
  ctx.quadraticCurveTo(0, 0, 10, 0)
  ctx.closePath()
  ctx.fill()
  ctx.lineWidth = 40
  ctx.strokeStyle = window.getComputedStyle(document.documentElement).getPropertyValue('--white-key')
  ctx.beginPath()
  ctx.moveTo(50, 30)
  ctx.lineTo(50, 170)
  ctx.closePath()
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(100, 30)
  ctx.lineTo(100, 170)
  ctx.closePath()
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(150, 30)
  ctx.lineTo(150, 170)
  ctx.closePath()
  ctx.stroke()
  ctx.lineWidth = 30
  ctx.strokeStyle = window.getComputedStyle(document.documentElement).getPropertyValue('--black-key')

  ctx.beginPath()
  ctx.moveTo(75, 30)
  ctx.lineTo(75, 110)
  ctx.closePath()
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(125, 30)
  ctx.lineTo(125, 110)
  ctx.closePath()
  ctx.stroke()
  
  // Attach icon to document as images
  small.href
    = large.href
    = canvas.toDataURL('image/png')
}

drawFavicon()