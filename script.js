const socket = io('http://localhost:4001')

const messageForm = document.getElementById('send-container'),

 nameInput = document.getElementById('name'),

 messageInput = document.getElementById('message'),

 messageContainer = document.getElementById('output'),
 feedback = document.getElementById('feedback');

messageForm.addEventListener('submit', e =>
{
e.preventDefault();
const name = nameInput.value
const  message = messageInput.value

socket.emit('send-chat-message', `${name} : ${message}`);

messageContainer.innerHTML += '<li class="me"> you ' + `: ${message}` + '</li>'

messageInput.value='';
nameInput.value='';


})

messageInput.addEventListener('keypress' , ()=>{
    socket.emit('typing',nameInput.value)
    feedback.innerHTML = '<p style="float:right ;margin-right:8px;"><em>' + data +  ' is tayping...' + '</em></p>'
})
socket.on('typing', data=>{
   feedback.innerHTML = '<p style="float:left ;margin-left:8px;"><em>' + data +  ' is tayping...' + '</em></p>'
})

 socket.on('send-chat-message', data =>{
    feedback.innerHTML ="";
    messageContainer.innerHTML += '<li class="him">' + data + '</li>'
 })
 
