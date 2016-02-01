define(function() {
    return {
        add: add
    };

    function add(list, listItem) {
        if (list && listItem) {
            var li = document.createElement("li");
            var span = document.createElement("span");
            span.appendChild(document.createTextNode("[X]"));
            span.addEventListener("click",function(e){
            	remove(e);
            });
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