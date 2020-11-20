const duplicateMenu = () => {
    //get all of the anchor elements from the top menu
    //querySelectorAll
    let topMenu = document.querySelectorAll('ul#primaryNavigation li a')
    console.log(topMenu)

    //create the new list items for the button of the page 
    let newList = document.createElement('ul')

    //use forEach
    topMenu.forEach(menuItem => {
        let newItem = document.createElement('li')
        let newLink = document.createElement('a')
        newLink.setAttribute('href',menuItem.getAttribute('href'))

        //Copy the text content from upper menu to new menu
        //append children to make tem appear in the DOM. 
    })
}
duplicateMenu()