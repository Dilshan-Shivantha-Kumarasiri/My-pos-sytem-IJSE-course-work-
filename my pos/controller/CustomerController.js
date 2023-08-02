//get customer name
let customerName = document.getElementById("fName").value;
//get customer phone number
let customerPhoneNumber = document.getElementById("phoneNumber").value;
//get customer email
let customerEmail = document.getElementById("email").value;
//get customer address
let customerAddress = document.getElementById("address").value;


document.getElementById("customerSave").addEventListener("click", ev => {
    createCustomerId();
    checkNullValues();

    console.log(customerName);

});

//implementation of the generate customer id and set that
//value to the text field
function createCustomerId() {


    let customerId = document.getElementById("customerId").value;

    let getId = String(customerId);
    let digit = parseInt(getId.charAt(6));

    let id = ++digit;
    console.log("new id " + id);


    document.getElementById("customerId").value = "C00-00" + id;
}

function checkNullValues() {

    if (customerName === "") {
        console.log("customerName not validate");
    }

    if (customerEmail === "") {
        console.log(" email not validate");
    }

    if (customerPhoneNumber === "") {
        console.log(" phone not validate");
    }
    
    if(customerAddress === ""){
        console.log(" address not validate");
    }

}