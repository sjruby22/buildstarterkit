import './index.css'
import numeral from 'numeral'
import {getUsers, deleteUser} from './api/userApi'
import { html, render } from 'lit-html';
import {helloWorld} from './components/helloWorld'
import {usersTable} from './components/usersTable'


const litHtmlAnchor = document.querySelector('#litHtmlAnchor');
const combineHtml = () => html`
    ${usersTable()}
    ${helloWorld('Mr.', 'Robot')}`
    
render(combineHtml() , litHtmlAnchor)

const testValue = numeral(1000).format('$0,0.00')
console.log(`I would pay ${testValue} for this course...NOT `)// eslint-disable-line no-console
console.log(window.location.hostname)// eslint-disable-line no-console

getUsers().then(result => {
    let usersBody = ""
    
    result.forEach(user => {
    usersBody+= `<tr> 
        <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
        <td>${user.id}</td>
        <td>${user.firstName}</td>npm r
        <td>${user.lastName}</td>
        <td>${user.email}</td>
    </tr>`
    })
    
    global.document.getElementById('users').innerHTML = usersBody
    
    const deleteLinks = global.document.getElementsByClassName('deleteUser')
    
    Array.from(deleteLinks, link=> {
        link.onclick = function(event){
            const element = event.target
            event.preventDefault()
            deleteUser(element.attributes["data-id"].value)
            const row = element.parentNode.parentNode
            row.parentNode.removeChild(row)
        }
    })
})