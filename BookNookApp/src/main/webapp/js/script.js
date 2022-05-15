window.addEventListener('load', function(e) {
	init();
});

document.createBookForm.submit.addEventListener('click', createBook);

function init() {
	console.log("in init")
	getBooks();
}



function getBooks() {
	let xhr = new XMLHttpRequest();

	xhr.open('GET', 'api/books/');

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let books = JSON.parse(xhr.responseText);
				
				displayBooks(books);
				let totalBooks = document.createElement('h1');
				totalBooks.textContent = "";
				totalBooks.textContent = 'You have reviewed ' + books.length + ' books!';
				document.body.appendChild(totalBooks);
				

			}
		}
		else {
			console.log("Hello")
		}
	};
	xhr.send();
}




function createBook(e) {
	e.preventDefault();
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/books', true); //true = async

	xhr.setRequestHeader("Content-type", "application/json"); //specifices JSON request body

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 201) { // OK or Created
				let data = JSON.parse(xhr.responseText);
				getBooks(data);
			}
			else {
				console.error("POST request failed!")
				console.error(xhr.status + ": " + xhr.responseText);
			}
		}
	};

	let book = {
		title: createBookForm.title.value,
		authorName: createBookForm.authorName.value,
		description: createBookForm.description.value,
		length: createBookForm.length.value,
		genre: createBookForm.genre.value,
		format: createBookForm.format.value,
		rating: createBookForm.rating.value,
		recommended: createBookForm.recommended.value,
		timeToRead: createBookForm.timeToRead.value,
	};
	xhr.send(JSON.stringify(book));
	console.log(book);
	let inputs = document.getElementsByTagName('input');
	for (let i = 0; i < inputs.length; i++) {
		inputs[i].value = "";
	}
}


function displayBooks(books) {
	let bookList = document.getElementById('bookList');
	bookList.textContent = "";

	let thead = document.createElement('thead');
	thead.id = 'thead';

	for (p in books[0]) {

		if (p === 'title' || p === 'authorName' || p === 'length') {

			let th = document.createElement('th');
			th.textContent = p.toUpperCase();
			thead.appendChild(th);
		}
	}

	bookList.appendChild(thead);

	let tbody = document.createElement('tbody');
	tbody.id = 'tbody';

	books.forEach(function(val, ind, arr) {
		var tr = document.createElement('tr');
		let title = document.createElement('td');
		let authorName = document.createElement('td');

		let length = document.createElement('td');

		title.textContent = val.title;
		authorName.textContent = val.authorName;
		length.textContent = val.length;

		tr.appendChild(title);
		tr.appendChild(authorName);
		tr.appendChild(length);



		title.addEventListener('click', function() {


			var tableDiv = document.getElementById('tableDiv');
			bookInfo = document.createElement('div');
			let bILabel = document.createElement('h1');
			bILabel.textContent = "About the read:"
			tableDiv.appendChild(bILabel);

			bookInfo.textContent = " Title: " + val.title + ", Author Name: " + val.authorName + ", Rating: " + val.rating + ", Description: " + val.description;
			tableDiv.append(bookInfo);



			let buttons = document.createElement('div');
			buttons.textContent = '';
			tr.appendChild(buttons);
			
			let updateButton = document.createElement('button');
			buttons.appendChild(updateButton);
			updateButton.textContent = 'Update';
			updateButton.addEventListener('click', function() {
				populateForm(val);
			});


			let deleteButton = document.createElement('button');
			deleteButton.textContent = 'Delete';
			buttons.appendChild(deleteButton);

			deleteButton.addEventListener('click', function() {

				let xhr = new XMLHttpRequest();
				xhr.open('DELETE', 'api/books/' + val.id, true); //true = async

				xhr.setRequestHeader("Content-type", "application/json"); //specifices JSON request body

				xhr.onreadystatechange = function() {
					if (xhr.readyState === 4) {
						if (xhr.status == 200) { // OK or Created
							getBooks();
						}
						else {
							console.error("DELETE request failed!")
							console.error(xhr.status + ": " + xhr.responseText);
						}
					}
				};
				xhr.send(JSON.stringify(val));

			});


		});

		tbody.appendChild(tr);

	});
	bookList.appendChild(tbody);

};


function populateForm(book) {
	let createFormDiv = document.getElementById('createBookFormDiv');
		createFormDiv.textContent = "";
	console.log(book);

	let updateFormDiv = document.createElement('div');
	updateFormDiv.textContent = "";
	let updateForm = document.createElement('form');
	let uFLabel = document.createElement('h1');
	uFLabel.textContent = "Enter updates you'd like to make:"
	updateFormDiv.appendChild(uFLabel);
	updateForm.id = "updateForm";


	let newTitle = document.createElement('input');
	newTitle.value = book.title;
	newTitle.id = 'nt';
	let titleLabel = document.createElement('label');
	titleLabel.setAttribute('for', newTitle);
	titleLabel.innerHTML = "Title: ";
	updateForm.appendChild(titleLabel);
	updateForm.appendChild(newTitle);

	let newAuthorName = document.createElement('input');
	newAuthorName.id = 'an';
	newAuthorName.value = book.authorName;
	let authorLabel = document.createElement('label');
	authorLabel.setAttribute('for', newAuthorName);
	authorLabel.innerHTML = "Author Name: ";
	updateForm.appendChild(authorLabel);
	updateForm.appendChild(newAuthorName);

	let newDescription = document.createElement('input');
	
	newDescription.value = book.description;
	let descriptionLabel = document.createElement('label');
	descriptionLabel.setAttribute('for', newDescription);
	descriptionLabel.innerHTML = "Description: ";
	updateForm.appendChild(descriptionLabel);
	updateForm.appendChild(newDescription);

	newDescription.id = 'nd';
	let newRating = document.createElement('input');
	newRating.value = book.rating;
	newRating.type = "decimal";
	newRating.id = 'nr';
	let ratingLabel = document.createElement('label');
	ratingLabel.setAttribute('for', newRating);
	ratingLabel.innerHTML = "Rating: ";
	updateForm.appendChild(ratingLabel);
	updateForm.appendChild(newRating);

	let newRecommended = document.createElement('input');
	newRecommended.value = book.recommended;
	newRecommended.id = 'nrec';
	let recLabel = document.createElement('label');
	recLabel.setAttribute('for', newRecommended);
	recLabel.innerHTML = "Do you recommend?: ";
	updateForm.appendChild(recLabel);
	updateForm.appendChild(newRecommended);


	let sendUpdate = document.createElement('button');
	sendUpdate.textContent = "Save"





	updateFormDiv.appendChild(updateForm);
	tableDiv.appendChild(updateFormDiv);
	tableDiv.appendChild(sendUpdate);



	sendUpdate.onclick = function() { updateBook(book); }

}


function updateBook(book) {
	
		let createFormDiv = document.getElementById('createBookFormDiv');
		createFormDiv.textContent = "";
	
	console.log("in update!!" + book)

	let xhr = new XMLHttpRequest();
	xhr.open('PUT', 'api/books/' + book.id, true); //true = async

	xhr.setRequestHeader("Content-type", "application/json"); //specifices JSON request body

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 201) { // OK or Created
				let data = JSON.parse(xhr.responseText);
				getBooks(data);
			}
			else {
				console.error("PUT request failed!")
				console.error(xhr.status + ": " + xhr.responseText);
			}
		}
	};


	book = {
		id: book.id,
		title: updateForm.nt.value,
		authorName: updateForm.an.value,
		description: updateForm.nd.value,
		rating: updateForm.nr.value,
		recommended: updateForm.nrec.value,
		length: book.length
	};
	xhr.send(JSON.stringify(book));
	console.log(book);
	let inputs = document.getElementsByTagName('input');
	for (let i = 0; i < inputs.length; i++) {
		inputs[i].value = "";
	}
}

