
let buttonRemoveTag = document.createElement('button')
let buttonText = document.createTextNode('Remove')
    buttonRemoveTag.append(buttonText)
    document.body.appendChild(buttonRemoveTag)

let mainPlainTag = document.createElement('main')
    document.body.appendChild(mainPlainTag)

let imageBigbyTag = document.createElement("img");
    imageBigbyTag.className = 'images'
    imageBigbyTag.src = 'BigbyXSnowWhite.jpeg'
    mainPlainTag.appendChild(imageBigbyTag)

    console.log(imageBigbyTag)

let anchorFablesTag =document.createElement('a')
let anchorFablesTagText = document.createTextNode('Read More About: Fables ')
    anchorFablesTag.href = 'https://en.wikipedia.org/wiki/Fables_(comics)'
    anchorFablesTag.setAttribute('target', '_balnk')
    anchorFablesTag.className = 'link'
    anchorFablesTag.append(anchorFablesTagText)
    mainPlainTag.appendChild(anchorFablesTag)

buttonRemoveTag.addEventListener('click', ()=>
  mainPlainTag.remove()
)
