import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import Buttons from './buttons'
import Input from './input'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-buttons', Buttons)
Vue.component('g-input', Input)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
    },
    created(){
        setTimeout(() =>{
            let event = new Event('change')
            let inputElement = this.$el.querySelector('input')
            inputElement.dispatchEvent(event)
        },3000)
    },
    methods: {
        inputChange(e){
            console.log(e)
        }
    }
})