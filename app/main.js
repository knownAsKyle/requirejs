define(function(require) {
    var lists = require("lists");
    var e = require("elements");
    e.header().innerText = "Require js ";
    e.addButton().addEventListener("click", handleAddClick);
    e.input().addEventListener("keypress", function(e) {
        if (e.keyCode === 13) {
            handleAddClick();
        }
    });

    function handleAddClick() {
        var entered = lists.add(e.list(), e.input().value);
        if (entered) {
            e.input().value = "";
        }
    }

    var sortable = Sortable.create(e.list(),{ animation: 150});
});