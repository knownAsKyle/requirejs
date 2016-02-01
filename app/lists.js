define(function() {
    return {
        add: add
    };

    function add(list, listItem) {
        if (list && listItem) {
            var span = document.createElement("span");
            span.appendChild(document.createTextNode("[X]"));
            span.addEventListener("click", remove);
            var li = document.createElement("li");
            li.appendChild(span);
            li.appendChild(document.createTextNode(" " + listItem));
            return list.appendChild(li);
        }
        return false;
    }

    function remove(e) {
        var me = e.target.parentNode;
        e.target.parentNode.parentNode.removeChild(me);
    }
});