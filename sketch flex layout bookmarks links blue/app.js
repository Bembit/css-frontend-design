// 
general_links.forEach(link);
    function link(item) {
        document.getElementById("container")
            .innerHTML  
                +="<div class=\"content\">"
                + "<i class=\"fab fa-react\"></i>"
                + "<a href=\"#\" target=\"_blank\">"
                + "<img src=\"\" alt=\"\" style=\"width:100%\">"
                + "<div class=\"link-heading\">" + item.title + "</div>"
                + "</a>"
                + "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, labore possimus aliquam ea iste optio, sed, aperiam rem aliquid doloribus at accusantium quibusdam. Ullam, iure.</p>"
                + "</div>"
                // + "<a class=\"url\" href='"+ item.url + "' target=\"_blank\">" + item.url + "</a>"
    }
// stackoverflow copypaste js search
function startSearch() {
    var input, filter, container, link, links, i, txtValue;
        input = document.getElementById('input');
        filter = input.value.toUpperCase();
        container = document.getElementById('container');
        link = container.getElementsByClassName('content');

    for (i=0; i < link.length; i++) {
        links = link[i].getElementsByClassName('link-heading')[0];
    if (links) {
        txtValue = links.textContent || links.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
        link[i].style.display = "";
    } else {
        link[i].style.display = "none";
            }
        }
    }
}