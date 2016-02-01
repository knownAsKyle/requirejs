define(function() {
    return {
        header: header,
        list: list,
        addButton: addButton,
        removeButton: removeButton,
        input: input,
    };

    function header() {
        return document.getElementById("header");
    }

    function list() {
        return document.getElementById("list");
    }

    function addButton() {
        return document.getElementById("addButton");
    }

    function removeButton() {
        return document.getElementById("removeButton");
    }

    function input() {
        return document.getElementById("itemInput");
    }
});