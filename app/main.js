define(function(require) {
    var helper = require("helper");
    var e = require("elements");
    var lists = require("lists");
    e.header.innerText = "Require js ";
    e.addButton.addEventListener("click", handleAddClick);
    e.input.addEventListener("keypress", listenForEnter);

    function handleAddClick() {
        if (lists.add(e.list, e.input.value)) {
            e.input.value = "";
        }
    }

    function listenForEnter(e) {
        if (helper.checkForEnterPress(e)) {
            handleAddClick();
        }
    }
    var sortable = Sortable.create(e.list, helper.constants.sortOptions);
});