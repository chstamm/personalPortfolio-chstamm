const duplicateMenu = () => {
    let topMenu = document.querySelectorAll('ul#primaryNavigation li a')

    //create the new list items for the button of the page 
    
    let newMenu = document.querySelector('#smallNavArea')


    //use forEach
    topMenu.forEach(menuItem => {
        let newList = document.createElement('ul')
        let newItem = document.createElement('li')
        let newLink = document.createElement('a')
        newLink.setAttribute('href',menuItem.getAttribute('href'))
        newLink.innerText = menuItem.innerText
        newList.appendChild(newItem)
        newItem.appendChild(newLink)
        newMenu.appendChild(newList)


        //Copy the text content from upper menu to new menu
        //append children to make them appear in the DOM. 
    })
}
duplicateMenu()