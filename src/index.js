import generateJoke from "./generateJoke";
import './styles/main.scss'
import tomcat from './assets/tomcat.png'

const tomcatImg = document.getElementById('tomcatImg')
tomcatImg.src = tomcat

const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJoke)

console.log(generateJoke())