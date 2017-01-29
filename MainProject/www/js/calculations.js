
Require.modules.calculations = function (all) {

    var IntCalculation = function() {
    }; 

    IntCalculation.prototype.getResult = function() {
        return 12;
    };

    var calculations = {
        IntCalculation: IntCalculation
    };

    all.calculations = calculations;
}
