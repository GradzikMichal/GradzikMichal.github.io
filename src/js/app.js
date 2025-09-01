function showContent(itemId) {
    const div = document.getElementById((itemId + "_container"));
    const upper_div = document.getElementById((itemId));

    if (div.style.height === '0px' || div.style.height === ""){
        div.style.height = "auto";
        div.style.margin = "auto auto 3px";
        div.style.padding = "0 5px 5px";
        upper_div.style.margin = "auto";
        if (upper_div.getElementsByTagName("h3").length > 0) {
            upper_div.getElementsByTagName("h3").item(0).innerText = itemId + " " + ("\u2BC5".toWellFormed())
        }else if (upper_div.getElementsByTagName("h4").length > 0) {
            upper_div.getElementsByTagName("h4").item(0).innerText = itemId + " " + ("\u2BC5".toWellFormed())
        }
    } else {
        div.style.height = "0";
        div.style.margin = "0";
        upper_div.style.margin = "3px";
        div.style.padding = "0";
        if (upper_div.getElementsByTagName("h3").length > 0) {
            upper_div.getElementsByTagName("h3").item(0).innerText = itemId + " " + ("\u2BC6".toWellFormed());
        }else if (upper_div.getElementsByTagName("h4").length > 0) {
            upper_div.getElementsByTagName("h4").item(0).innerText = itemId + " " + ("\u2BC6".toWellFormed());
        }

    }
}

