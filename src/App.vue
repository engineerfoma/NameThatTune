<template>
  <router-view />
</template>
<script setup>
import { client } from '@/plugins/ws'

function connect() {
  client.activate()
  console.log('Connected')
}
connect()
const app = '/app/hello'
const greetings = '!Приветики!'
const topic = '/topic/greetings'
client.onConnect = (frame) => {
  console.log('Connected: ' + frame)
  client.subscribe(topic, (greeting) => {
    console.log(JSON.parse(greeting.body))
  })
}

function showGreeting(message) {
  console.log(message);
}

function sendName() {
  client.publish({
    destination: app,
    body: JSON.stringify({ name: greetings }),
  })
}
setInterval(() => {
  sendName()

}, 1000)
</script>
