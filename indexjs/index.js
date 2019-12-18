
let placeholder = document.getElementById("placeholder");
let display = document.getElementById('tableDisplay');

let hometemplate = 
`<div style="padding-top:1em;" class="container">
    <h3>Welcome to the eLibrary<sup>&reg;</sup></h3>
    <hr/>
<div style="font-size: 1em">
    <img src="images/banner1.png"/><br/><br/>
      <p>We are a top-flight, fully-digitized library.
        Find out more <a href="about.html">about us</a> and
        and learn how we can serve you with a widest variety of books and lots of other
        digital content, all for your education as well as your entertainment.
        You can also <a href="virtualtour.html">take a virtual tour</a>,
        of our world-class facilities and be amazed at all what we have in stock
        for you, your family and friends.</p>

      <p>Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not
        only five centuries.</p>

      <p>Already have access as a Member, Librarian or System Administrator? Then, simply <a href="#">Sign-In</a>
        to access the full range of services available to you, based on your role and access rights.</p>
</div>
</div>`

let virtualtemplate = 
`<div style="padding-top:1em;" class="container">
   <h3>Virtual Tour of the eLibrary<sup>&reg;</sup></h3>
   <hr/>
<div style="font-size: 1em">
    <p>Panoramic views and knowledge fountains</p>
      <img style="width: 100%; height: 135px;" src="images/panoramic.png"/>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>Already have access as a Member, Librarian or System Administrator? Then, simply <a href="#">Sign-In</a>
        to access the full range of services available to you, based on your role and access rights.
    </p>
</div>
</div>`


let abouttemplate = 
`<div style="padding-top:1em;" class="container">
    <h3>About the eLibrary<sup>&reg;</sup></h3>
    <hr/>
<div style="font-size: 1em">
    <p>We are your premier digital library. Our collection has the widest variety of books and lots of other
        digital content, for your education as well as your entertainment.
        You can <a href="virtualtour.html">take a virtual tour</a>,
        of our world-class facilities and be amazed at all what we have in stock
        for you, your family and friends.</p>

    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not
        only five centuries.</p>
</div>
</div>`

let booktemplate =
  `<div class="container">
     <h3>Books in our Collection</h3>
  </div>&nbsp;&nbsp;&nbsp;
  <div class="col-md-4" style = "margin-left:600px">
        <span id="alertMessageBox" style="display:none;float:none;margin-left:0em;" class="alert alert-dismissible alert-success">
            <button type="button" class="close" data-dismiss="alert">&times;</button>
            <strong>Book successfully deleted!</strong>
        </span>
    </div>
   <div ="container" ><a id = "newbook" style = "margin-left:1200px" class="btn btn-outline-success btn-lg" navbar navbar-expand -g navbar-light " style="float:right;">Add a New Book</a>
     </div> 
      
  <div="container" style="padding-top:1em;" id="tableDisplay"></div>`

let searchTemplate = `
  <form id="searchButton" class="form-inline my-2 my-lg-0">
       <input id="seek" class="form-control mr-sm-2" type="text" placeholder="Search">
       <button id="searcButton"  class="btn btn-primary my-2 my-sm-0" type="button">Search</button>
    <div>
        <button id="advancedSearch1" style="float:right" type="button" class="btn btn-primary">Advanced Search</button>
    </div>
  </form>`

// let welcome = ` 
// <div class="form-inline my-2 my-lg-0">
//     <span style="color:#fff;padding-left: 2em; padding-right: 1em;">Welcome, Guest </span>
      
// </div>`

let addbookTemplate = `
<div style="padding-top:1em;" class="container">
<div style="padding-bottom:1em;">
        <span style="font-size: 2em; color: #32a5e7;">New Book Form</span>
        <span id="alertMessageBox" style="display:none;float:none;margin-left:8em;" class="alert alert-dismissible alert-success">
            <button type="button" class="close" data-dismiss="alert">&times;</button>
            <strong>Book successfully added!</strong>
        </span>
</div>
<div><span><b>Note:</b> Form fields marked with asterisk (*) are required.</span></div>
<br/>
<form id="newBookForm">
    <fieldset>                
        <input type="hidden" name="bookId" value=""/>
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label for="title">*Book Title</label>                            
                    <input id="title" name="title" type="text" class="form-control"
                           value="" required autofocus>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label for="isbn">*ISBN</label>                           
                    <input id="isbn" name="isbn" type="text" class="form-control" value="" required>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label for="overdueFee">*Overdue Fee per day</label>                            
                    <input id="overdueFee" name="overdueFee" type="text" class="form-control"
                           aria-describedby="overdueFeeHelp" placeholder="0.00"
                           pattern="^[+-]?[0-9]{1,3}(?:,?[0-9]{3})*(?:\.[0-9]{2})?$"
                           value="0.00" required>
                    <small id="overdueFeeHelp" class="form-text text-muted">Enter a valid decimal amount; in dollars and cents; no comma (e.g. 1.99)</small>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label for="publisher">*Publisher</label>                            
                    <input id="publisher" name="publisher" type="text" class="form-control"
                           value="" required>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label for="datePublished">*Date Published</label>                            
                    <input id="datePublished" name="datePublished" type="date" class="form-control"
                           value="" required>
                </div>
            </div>
        </div>
        <div style="float:right;">
                <button id="btnReset" type="reset" class="btn btn-outline-warning">Reset</button>&nbsp;&nbsp;&nbsp;
            <button id="btnSubmit" type="submit" class="btn btn-outline-success">Save Book</button>
        </div>
    </fieldset>
</form>
</div>`

let advancedSearchTemplate =
  ` <div class="container" id="containerAdvanced" style="display: inline">
<h3>Advanced Search</h3>

<div class="container">
    <form id="formReset">
        <fieldset>
            <span>* required form fields</span><span id="pop"
                style="display: none; margin-left:220px;"><strong>The book has successfully
                    added!!</strong></strong></span>
            <input type="hidden" name="bookId" value="" />
            <div class="row">
                <div class="col-md-12">
                    <div class="container">
                        <label for="title">*Book Title</label>
                        <input type="text" name="" id="inputBook" class="form-control" value="" autofocus
                            placeholder="Enter Book title">
                    </div>
                </div>
            </div>

            <div class="row">
                <!-- <div class="row"> -->
                <div class="col-md-6">
                    <div class="container">
                        <label for="title">*ISBN</label>
                        <input type="text" name="" id="inputISBN" class="form-control" autofocus>
                    </div>
                </div>
                <!-- </div> -->
                <!-- <div class="row"> -->
                <div class="col-md-6">
                    <div class="container">
                        <label for="title">*Overdue Fee per day</label>
                        <input type="text" name="" id="inputOverFee" class="form-control" autofocus
                            placeholder="0.00">
                    </div>
                </div>
                <!-- </div> -->
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="container">
                        <label for="title">*Publisher</label>
                        <input type="text" name="" id="inputPublisher" class="form-control" autofocus>
                    </div>
                </div>
                <!-- <div class="row"> -->
                <div class="col-md-6">
                    <div class="container">
                        <label for="title">*Date Published</label>
                        <input type="text" name="" id="inputDate" class="form-control" autofocus
                            placeholder="yyyy-mm-dd">
                    </div>
                </div>
                <!-- </div> -->
            </div>

        </fieldset>
</div>
<div class="row" style="margin: 10px">
    <div class="container" style="padding: 10px ;margin: 10px">
        <div class="container" style="padding-block: 10px">
            <button style="float:right " type="reset" class="btn btn-info">Reset</button>
        </div>
        <div>
            <button id="advancedSearchToSave" style="float:right" type="submit" class="btn btn-primary">Advanced
                Search</button>
        </div>
    </div>
</div>
</form>

</div>
`

async function bookList() {
  let display = document.getElementById('tableDisplay');
  //let count = 0;
  const books = await fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/list")
  const myJson = await books.json();

  let content = `
<table class="table table-hover">
  <thead>
      <tr>
          <th scope="col">bookId</th>
          <th scope="col">isbn</th>
          <th scope="col">title</th>
          <th scope="col">overduepay</th>
          <th scope="col">publisher</th>
          <th scope="col">Date Published</th>

      </tr>
  </thead>
  <tbody>
  
  `;
  myJson.forEach(function (book, i) {
    content += `
            <tr>
              <th scope="row">${i + 1}.</th>
              <td>${book.isbn}</td>
              <td>${book.title}</td>
              <td>${new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 }).format(book.overdueFee)}</td>
              <td>${book.publisher}</td>
              <td>${book.datePublished}</td>
              <td><a data-toggle="modal" data-bookid="${book.bookId}" data-bookisbn="${book.isbn}" data-booktitle="${book.title}" href="#Edit">Edit</a></td>

              <td><a data-toggle="modal" data-bookid="${book.bookId}" data-bookisbn="${book.isbn}" data-booktitle="${book.title}" href="#confirmDeleteBookModal">Delete</a></td>
            </tr>
          `;
  });
  display.innerHTML = content;
}



function addNewBook(event) {
event.preventDefault();
  const txtIsbn = document.querySelector("#isbn");
  const txtTitle = document.querySelector("#title");
  const txtOverdueFee = document.querySelector("#overdueFee");
  const txtPublisher = document.querySelector("#publisher");
  const dtpkDatePublished = document.querySelector("#datePublished");
  const alertMessageBox = document.getElementById("alertMessageBox");
  const isbn = txtIsbn.value;
  const title = txtTitle.value;
  const overdueFee = parseFloat(txtOverdueFee.value);
  const publisher = txtPublisher.value;
  const datePublished = dtpkDatePublished.value;
  const newBookData = {
    "isbn": isbn,
    "title": title,
    "overdueFee": overdueFee,
    "publisher": publisher,
    "datePublished": datePublished
  };

  fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/add", {
    method: "post",
    body: JSON.stringify(newBookData),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(function (response) {
    return response.json();
  }).then(function (jsonResponseData) {
    console.log(jsonResponseData);
    txtIsbn.value = "";
    txtTitle.value = "";
    txtOverdueFee.value = "0.00";
    txtPublisher.value = "";
    dtpkDatePublished.value = "";
    txtTitle.focus();
    alertMessageBox.style.display = "inline-block";
  }).catch(function (error) {
    console.error(error);
    alertMessageBox.classList.remove("alert-success");
    alertMessageBox.classList.add("alert-danger");
    alertMessageBox.style.display = "inline-block";
  })

}


function addingNewBook() {
  placeholder.innerHTML = addbookTemplate;
  document.getElementById("newBookForm").addEventListener("submit", addNewBook)



}

function mainbooklist() {
  placeholder.innerHTML = booktemplate;
  document.getElementById("search").innerHTML = searchTemplate;
  
  document.getElementById("searchButton").addEventListener("click", quickSearch)
  document.getElementById("newbook").addEventListener("click", addingNewBook);
  bookList();
  document.getElementById("advancedSearch1").addEventListener("click",advancedSearch);
}

document.getElementById("books").addEventListener("click", mainbooklist)

// let welcomlogo = document.getElementById("search");

function makehome() {

  // welcomlogo.innerHTML = welcome;
  placeholder.innerHTML = hometemplate;
}
makehome();

function makeabout() {

  // welcomlogo.innerHTML = welcome;
  placeholder.innerHTML = abouttemplate;

}
document.getElementById("about").addEventListener("click", makeabout)


function virualTour() {

  // welcomlogo.innerHTML = welcome;
  placeholder.innerHTML = virtualtemplate;
}
document.getElementById("virtual").addEventListener("click", virualTour)


/*history API
*/

let links = Array.from(document.getElementsByClassName("nav-link"));
links.forEach(link => {
  let id = link.id;
  link.addEventListener("click", e => {
    history.pushState({ id }, `selected:${id}`, `./#selectedpage=${id}`)
    stackHistory(id)

  })
})
function stackHistory(id) {
  if (id == "about") {
    placeholder.innerHTML = abouttemplate;
  } else if (id == "books") {
    mainbooklist()
  } else if (id == "virtual") {
    placeholder.innerHTML = virtualtemplate;
  } else if (id == "home") {
    placeholder.innerHTML = hometemplate;
  }
}
window.addEventListener("popstate", e => {
  stackHistory(e.state.id)
})
history.replaceState({ id: null }, "default", "./")






/**quick search function */


/**
 * quick search
 */

async function quickSearch() {

  let display = document.getElementById('tableDisplay');


  const filter = document.getElementById("seek").value.toUpperCase();

  const books = await fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/list")
  const myJson = await books.json();

  let tableContent = `
   <table class="table table-hover">
      <thead>
          <tr>
              <th scope="col">bookId</th>
              <th scope="col">isbn</th>
              <th scope="col">title</th>
              <th scope="col">overduepay</th>
              <th scope="col">publisher</th>
              <th scope="col">Date Published</th>

          </tr>
      </thead>
      <tbody>
      </tbody>
      `;

  myJson.forEach(function (element, i) {


    if (element.title.toUpperCase().indexOf(filter) > -1) {

      //++count;
      tableContent += `
  <tr class= "table-active">
  <th scope= "row">${i + 1}</th>
  <td>${element.isbn}</td>
  <td>${element.title}</td>
  <td>${element.overdueFee}</td>
  <td>${element.publisher}</td>
  <td>${element.datePublished}</td>
  <td><a href = "EditNewBook.html?bookId=${element.bookId}">Edit</a></td>

  <td><a data-toggle="modal"
  data-bookid="${element.bookId}" data-bookisbn="${element.isbn}"
  data-booktitle ="${element.title}"
  href = "#confirmDeleteBookModal">Delete</a></td>
  </tr>`;
    }
  })

   display.innerHTML = tableContent;
}

/**
 * Advanced search
 */

async function advancedSearch() {
  //let display = document.getElementById('tableDisplay');

 let count = 0;
 const books = await fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/list")
 const myJson = await books.json();
 //console.log(myJson)
 
 let tableContent = `
<table class="table table-hover">
 <thead>
     <tr>
         <th scope="col">bookId</th>
         <th scope="col">isbn</th>
         <th scope="col">title</th>
         <th scope="col">overduepay</th>
         <th scope="col">publisher</th>
         <th scope="col">Date Published</th>

     </tr>
 </thead>
 <tbody>
 
 `;

 myJson.forEach(function(element,i) {
   bookIsbn = document.getElementById("inputISBN").value;
   bookTitle = document.getElementById("inputBook").value.toUpperCase();
   overDue = document.getElementById("inputOverFee").value;
   bookPublisher = document.getElementById("inputPublisher").value.toUpperCase();
   datePublished = document.getElementById("inputDate").value;

   if (element.title.toUpperCase() === bookTitle || element.isbn == bookIsbn ||
     element.overdueFee == overDue || element.publisher.toUpperCase() === bookPublisher ||
     element.datePublished === datePublished) {
     // ++count;
     tableContent += `
<tr class= "table-active">
<th scope= "row">${i+1}</th>
<td>${element.isbn}</td>
<td>${element.title}</td>
<td>${element.overdueFee}</td>
<td>${element.publisher}</td>
<td>${element.datePublished}</td>
<td><a href = "EditNewBook.html?bookId=${element.bookId}">Edit</a></td>

<td><a data-toggle="modal"
data-bookid="${element.bookId}" data-bookisbn="${element.isbn}"
data-booktitle ="${element.title}"
href = "#confirmDeleteBookModal">Delete</a></td>
</tr>`;
   }

 })
 placeholder.innerHTML = advancedSearchTemplate;

 document.getElementById("advancedSearchToSave").addEventListener("click", displayadvancedsearch)
 // document.getElementById("containerAdvanced").style.display = "none";
 function displayadvancedsearch(){
  display.innerHTML = tableContent;
 }
 
}







