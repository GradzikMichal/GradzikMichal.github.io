function showContent(itemId) {
    const div = document.getElementById((itemId + "_container"));
    const upper_div = document.getElementById((itemId));
    if (div.style.height === '0px' || div.style.height === ""){
        div.style.height = "auto";
        upper_div.getElementsByTagName("h3").item(0).innerText = itemId + " " + ("\u2BC5".toWellFormed())
    } else {
        div.style.height = "0";
        upper_div.getElementsByTagName("h3").item(0).innerText = itemId + " " + ("\u2BC6".toWellFormed())
    }
}

