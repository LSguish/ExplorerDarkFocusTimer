import { Elements } from "./elements.js";

const {
  buttonPlay,
  buttonPause,
  buttonForest,
  buttonRain,
  buttonCoffeeMachine,
  buttonFireplace,
  buttonColorLight,
  buttonColorDark,
  bgBody
} = Elements

export function Controls() {
  function playForest() {
    buttonForest.classList.toggle('check')
    buttonRain.classList.remove('check')
    buttonCoffeeMachine.classList.remove('check')
    buttonFireplace.classList.remove('check')
  }
  
  function playRain() {
    buttonRain.classList.toggle('check')
    buttonForest.classList.remove('check')
    buttonCoffeeMachine.classList.remove('check')
    buttonFireplace.classList.remove('check')
  }
  
  function playCoffee() {
    buttonCoffeeMachine.classList.toggle('check')
    buttonForest.classList.remove('check')
    buttonRain.classList.remove('check')
    buttonFireplace.classList.remove('check')
  }
  
  function playFire() {
    buttonFireplace.classList.toggle('check')
    buttonForest.classList.remove('check')
    buttonRain.classList.remove('check')
    buttonCoffeeMachine.classList.remove('check')
  }

  function playTimer() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
  }

  function reset() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }

  function bgLight() {
    buttonColorLight.classList.add('hide')
    buttonColorDark.classList.remove('hide')
    bgBody.classList.add('night')
  }

  function bgDark() {
    buttonColorLight.classList.remove('hide')
    buttonColorDark.classList.add('hide')
    bgBody.classList.remove('night')
  }

  return {
    playTimer,
    reset,
    playForest,
    playRain,
    playCoffee,
    playFire,
    bgLight,
    bgDark
  }
}

