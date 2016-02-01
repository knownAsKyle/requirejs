define(function() {
    return {
        checkForEnterPress: checkForEnterPress,
        constants: constants()
    };

    function checkForEnterPress(e) {
        if (e.keyCode === 13) {
            return true;
        }
        return false;
    }

    function constants() {
        return {
            sortOptions: {
                animation: 150
            }
        };
    }
});