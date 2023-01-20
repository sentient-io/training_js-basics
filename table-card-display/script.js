//console.log('script.js loaded')

// Store userInfo into this array
const users = [];

// Add data to the table
function submitUser() {
	//console.log('Submit user')

	/**
	 * Prevent the default submission event refreshing the page.
	 */
	document.getElementById('userInputs').addEventListener('submit', function (event) {
		event.preventDefault();
		
	});


	/**
	 * Get user info, from user input
	 */
	const userInput = document.getElementById('userInputs');

	const userInfo = {
		fname: userInput.fname.value,
		country: userInput.country.value,
		number: userInput.number.value,
	};

	/**
	 * Store user, add the user in to users array
	 */
	users.push(userInfo);

	/**
	 * Make sure the user been added to the users array
	 */
	// console.log(users)

	// Get the table body
	const tableBody = document.getElementById('tableBody');

	// Select the table element
	const tableElem = document.getElementById('userTable');

	// Create the table row
	/**
	 * we want to re-build this chunk of html code
	 *    <tr>
	 *       <td>user name</td>
	 *       <td>user age</td>
	 *       <td>user id</td>
	 *     </tr>
	 */
	const tableRow = document.createElement('tr');

	// Build the td elements
	const fnameTd = document.createElement('td');
	const countryTd = document.createElement('td');
	const numberTd = document.createElement('td');

	/**
	 * Fill in the value to Td elements
	 * with userInfo data
	 */
	fnameTd.innerText = userInfo.fname;
	countryTd.innerText = userInfo.country;
	numberTd.innerText = userInfo.number;

	// Add the tds in to the tr
	tableRow.append(fnameTd, countryTd, numberTd);

	// Add the table row
	tableElem.append(tableRow);

	// Clean the user input fields
	userInput.fname.value = '';
	userInput.country.value = '';
	userInput.number.value = '';

	/**
	 * Add data to card view
	 */
	const cardContainer = document.getElementById('cardView');

	// Create div for card items
	const cardItem = document.createElement('div');
	cardItem.classList.add('cardItem');
	cardItem.innerHTML = '<b>Full Name:</b> ' + userInfo.fname + '<br>' + '<b>Country:</b> ' + userInfo.country + '<br>' + '<b>Number:</b> ' + userInfo.number;
	cardContainer.append(cardItem);
}

/**
 * Function to switch between table and grid views
 */

function switchView(view) {
	// Get table and card elements
	const tableView = document.getElementById('userTable');
	const cardView = document.getElementById('cardView');

	// Switch for table and card
	if (view === 'table') {
		tableView.style.display = 'table';
		cardView.style.display = 'none';
	} 
	//For some reason, it has to be grid, otherwise it won't work.
	else if (view === 'grid') {
		tableView.style.display = 'none';
		cardView.style.display = 'grid';
	}
}
