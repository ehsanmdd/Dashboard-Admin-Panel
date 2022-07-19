const sideMune = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-item");
const closeBtn = document.querySelector("#close-btn");
const themeToggke = document.querySelector(".theme-toggle");

menuBtn.addEventListener("click", () => {
    sideMune.style.display = "block";
})

closeBtn.addEventListener("click", () => {
    sideMune.style.display = "none";
})

// change theme 

themeToggke.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme-variable")
    themeToggke.querySelector("span:nth-child(1)").classList.toggle("active")
    themeToggke.querySelector("span:nth-child(2)").classList.toggle("active")
})

// Fill orders in table

Orders.forEach(order => {

    const tr = document.createElement("tr");
    const trContent = 
    `
    <td>${order.productName}</td>
    <td>${order.productNumber}</td>
    <td>${order.paymentStatus}</td>
    <td class="${order.shopping === 'Declined' ? 'danger':
     order.shopping === 'pending' ? "warning" :
    'primary'}">${order.shopping}</td>
    <td class="primary">Details</td>
    `
    tr.innerHTML = trContent;
    document.querySelector("table tbody").appendChild(tr);
    console.log(order);
})