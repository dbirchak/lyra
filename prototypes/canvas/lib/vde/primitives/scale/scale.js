vde.primitives.scale = function(name, panel) {
    this.name = name;

    return vde.primitive.call(this, panel, false);
};

vde.primitives.scale.prototype = new vde.primitive();

vde.primitives.scale.prototype.spec = function() {
    return this.panel.spec.scale({'name': this.name}, {});
};
