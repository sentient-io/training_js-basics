console.log('script.js loaded')

const users = []

const submitUser = () => {
  console.log('Submit user')

  /**
   * Prevent the default submission event refreshing the page.
   */
  document
    .getElementById('userInputs')
    .addEventListener('submit', function (event) {
      event.preventDefault()
    })

  /**
   * Get user info, from user input
   */
  const userInput = document.getElementById('userInputs')

  const userInfo = {
    name: userInput.name.value,
    age: userInput.age.value,
    id: users.length, // auto generated id based on the users list
  }

  /**
   * Store user, add the user in to users array
   */
  users.push(userInfo)

  /**
   * Make sure the user been added to the users array
   */
  // console.log(users)

  /**
   * Adding the table row
   */
  // Select the table element
  const tableElement = document.getElementById('userTable')

  // Create the table row
  /**
   * we want to re-build this chunk of html code
   *    <tr>
   *       <td>user name</td>
   *       <td>user age</td>
   *       <td>user id</td>
   *     </tr>
   */
  const tableRow = document.createElement('tr')

  // Build the td elements
  const nameTd = document.createElement('td')
  const ageTd = document.createElement('td')
  const idTd = document.createElement('td')

  /**
   * Fill in the value to Td elements
   * with userInfo data
   */
  nameTd.innerText = userInfo.name
  ageTd.innerText = userInfo.age
  idTd.innerText = userInfo.id

  // Add the tds in to the tr
  tableRow.append(nameTd, ageTd, idTd)

  // Add the table row
  tableElement.append(tableRow)

  // Clean the user input fields
  userInput.name.value = ''
  userInput.age.value = ''
}

const switchCardView = () => {
  // console.log('switch view')

  // Select the userCards element
  const userCardsElem = document.getElementById('userCards')

  // Clean the userCards Element
  userCardsElem.innerHTML = ''

  /**
   * Clear the table
   */
  document.getElementById('userTable').innerHTML = ''

  /**
   * Build the card with this structure
   *   <div> // card container
   * 
        <div> // row container
          <b>Name: </b> // title
          User name  // variable
        </div>

        <div>
          <b>Age: </b>
          User age
        </div>

        <div>
          <b>Id: </b>
          User id
        </div>
      </div>
   */

  users.forEach((userInfo) => {
    // Create card container
    const cardContainer = document.createElement('div')

    // Advanced way
    /**
     * const userInfo = {
        name: userInput.name.value,
        age: userInput.age.value,
        id: users.length, // auto generated id based on the users list
  }
     */
    // Object.keys(userInfo).forEach((key) => {
    //   const rowContainer = document.createElement('div')
    //   rowContainer.innerHTML = `<b>${key.charAt(0).toUpperCase() + key.slice(1)}: </b>` + userInfo[key]
    //   cardContainer.append(rowContainer)
    // })

    // Create row container
    const nameRowContainer = document.createElement('div')
    nameRowContainer.innerHTML = '<b>Name: </b>' + userInfo.name
    cardContainer.append(nameRowContainer)

    const ageRowContainer = document.createElement('div')
    ageRowContainer.innerHTML = '<b>Age: </b>' + userInfo.age
    cardContainer.append(ageRowContainer)

    const idRowContainer = document.createElement('div')
    idRowContainer.innerHTML = '<b>Id: </b>' + userInfo.id
    cardContainer.append(idRowContainer)

    // Attach (append) row to card
 

    // Append the cardContainer
    // Display the card by attach the card to userCards element
    userCardsElem.append(cardContainer)
  })
}
