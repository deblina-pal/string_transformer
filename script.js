const input = document.querySelector('input')

const lowerCase = document.querySelector('#lower span')
const upperCase = document.querySelector('#upper span')
const camelCase = document.querySelector('#camel span')
const pascalCase = document.querySelector('#pascal span')
const snakeCase = document.querySelector('#snake span')
const kebabCase = document.querySelector('#kebab span')
const trimCase = document.querySelector('#trim span')

function capitalStr(str){
    if(!str) return str
    return str[0].toUpperCase() + str.slice(1, str.length)
}

function camel(str){
    const lowStr = str.toLowerCase()
    const words = lowStr.split(' ')
    const final = words.map((word, i) =>{
        if(i === 0) return word
        return capitalStr(word)
    })
    return final.join('')
}

function pascal(str){
    const lowStr = str.toLowerCase()
    const words = lowStr.split(' ')
    const final = words.map((word) => capitalStr(word))
    return final.join('')
}

function snake(str){
    return str.replaceAll(' ', '_')

}

function kebab(str){
    return str.replaceAll(' ', '-')

}

function trim(str){
    return str.replaceAll(' ', '')

}

function updateScreen(){
    lowerCase.innerText = input.value.trim().toLowerCase()
    upperCase.innerText = input.value.trim().toUpperCase()
    camelCase.innerText = camel(input.value.trim())
    pascalCase.innerText = pascal(input.value.trim())
    snakeCase.innerText = snake(input.value.trim())
    kebabCase.innerText = kebab(input.value.trim())
    trimCase.innerText = trim(input.value.trim())
}

updateScreen()

input.addEventListener('input', updateScreen)
