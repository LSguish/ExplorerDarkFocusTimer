import Events from "./events.js";
import Sounds from "./sounds.js";
import { Elements } from "./elements.js";
import { Controls } from "./controls.js";
import { Timer } from "./timer.js";

const {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonAdd,
  buttonDecrease,
  buttonForest,
  buttonRain,
  buttonCoffeeMachine,
  buttonFireplace,
  buttonColorLight,
  buttonColorDark,
} = Elements

const controls = Controls()
const sounds = Sounds()
const timer = Timer()
const events = Events()

buttonPlay.addEventListener('click', () => {
  sounds.pressAudio()
  controls.playTimer()
  timer.countDown()
})

buttonPause.addEventListener('click', () => {
  sounds.pressAudio()
  controls.reset()
  timer.hold()
})

buttonStop.addEventListener('click', () => {
  sounds.pressAudio()
  timer.resetTimer()
  controls.reset()
})

buttonAdd.addEventListener('click', () => {
  sounds.pressAudio()
  timer.addTimer()
})

buttonDecrease.addEventListener('click', () => {
  sounds.pressAudio()
  timer.decreaseTimer()
})


buttonForest.addEventListener('click', () => {
  controls.playForest()
  events.validationVolForest(sounds)
})

buttonRain.addEventListener('click', () => {
  controls.playRain()
  events.validationVolRain(sounds)
})

buttonCoffeeMachine.addEventListener('click', () => {
  controls.playCoffee()
  events.validationVolCoffee(sounds)
})

buttonFireplace.addEventListener('click', () => {
  controls.playFire()
  events.validationVolFire(sounds)
})

buttonColorLight.addEventListener('click', () => {
  controls.bgLight()
})

buttonColorDark.addEventListener('click', () => {
  controls.bgDark()
})