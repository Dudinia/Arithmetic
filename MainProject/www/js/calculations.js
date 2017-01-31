
Require.modules.calculations = function (all) {

    var BaseCalculation = function(calculations) {
        this.calculations = calculations;
    };

    BaseCalculation.prototype.getResult = function() {
        var self = this;
        var map = Array.prototype.map;
        var reduce = Array.prototype.reduce;
        var calcResult = map.call(this.calculations, function(calc){
            return calc.getResult();
        });
        return reduce.call(calcResult, self.operation, 0);
    };

    BaseCalculation.prototype.operation = function(a, c) {
    };

    var IntCalculation = function() {
    }; 

    IntCalculation.prototype.getResult = function() {
        return 12;
    };

    var AddCalculation = function() {
        BaseCalculation.apply(this, arguments);
    };

    inherit(AddCalculation, BaseCalculation);

    AddCalculation.prototype.operation = function(a, b) {
        return a + b;
    };


    var calculations = {
        IntCalculation: IntCalculation,
        AddCalculation: AddCalculation
    };

    all.calculations = calculations;
}
