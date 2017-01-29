
function Require() {
    var args = Array.prototype.slice.call(arguments),
        callback = args.pop(),
        modules = (args[0] && typeof args[0] === "string") ? args : args[0],
        i;

    if (!(this instanceof Require)) {
        return new Require(modules, callback);
    }

    if (!modules || modules === '*') {
        modules = [];
        for (i in Require.modules) {
            if (Require.modules.hasOwnProperty(i)) {
                modules.push(i);
            }
        }
    }

    for (i = 0; i < modules.length; i +=1) {
        Require.modules[modules[i]](this);
    }

    callback(this);
}

Require.modules = {};
