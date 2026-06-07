// ===============================
// EVENTRA VENDOR DIRECTORY
// ===============================

const vendorContainer =
document.getElementById(
"vendorContainer"
);

const searchInput =
document.getElementById(
"searchInput"
);

const categoryFilter =
document.getElementById(
"categoryFilter"
);

let vendors = [];

// ===============================
// LOAD VENDORS
// ===============================

fetch("data/vendors.json")

.then(response => response.json())

.then(data => {

vendors = data;

displayVendors(vendors);

})

.catch(error => {

console.log(error);

});

// ===============================
// DISPLAY VENDORS
// ===============================

function displayVendors(vendorList){

if(!vendorContainer) return;

vendorContainer.innerHTML = "";

if(vendorList.length === 0){

vendorContainer.innerHTML =

`
<div class="no-results">

No Vendors Found

</div>
`;

return;

}

vendorList.forEach(vendor => {

vendorContainer.innerHTML +=

`
<div class="vendor-card">

<img
src="assets/${vendor.image}"
alt="${vendor.name}">

<div class="vendor-content">

<span class="vendor-tag">

${vendor.category}

</span>

<h3>

${vendor.name}

</h3>

<p>

📍 ${vendor.city}

</p>

<p>

⭐ ${vendor.rating}

</p>

<div class="vendor-actions">

<a
href="https://wa.me/${vendor.phone}"
target="_blank"
class="btn-primary">

WhatsApp

</a>

<a
href="${vendor.instagram}"
target="_blank"
class="btn-secondary">

Instagram

</a>

</div>

</div>

</div>
`;

});

}

// ===============================
// FILTER VENDORS
// ===============================

function filterVendors(){

const searchTerm =
searchInput.value.toLowerCase();

const category =
categoryFilter.value;

const filteredVendors =
vendors.filter(vendor => {

const matchesName =

vendor.name
.toLowerCase()
.includes(searchTerm);

const matchesCategory =

category === ""
||

vendor.category === category;

return (
matchesName &&
matchesCategory
);

});

displayVendors(filteredVendors);

}

// ===============================
// EVENTS
// ===============================

if(searchInput){

searchInput.addEventListener(
"input",
filterVendors
);

}

if(categoryFilter){

categoryFilter.addEventListener(
"change",
filterVendors
);

}

// ===============================
// SORT FEATURE
// ===============================

function sortByRating(){

vendors.sort(
(a,b) =>
b.rating - a.rating
);

displayVendors(vendors);

}

// ===============================
// SORT FEATURE
// ===============================

function sortByName(){

vendors.sort(
(a,b) =>
a.name.localeCompare(b.name)
);

displayVendors(vendors);

}

// ===============================
// FEATURED VENDOR
// ===============================

function getFeaturedVendor(){

const featured =
vendors.filter(
vendor => vendor.rating >= 4.8
);

console.log(featured);

}

setTimeout(() => {

getFeaturedVendor();

},2000);