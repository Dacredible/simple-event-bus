var eventBus = {
    objs: [],
    emit: function(source, data) {
        this.objs.forEach(function(obj) {
            if (obj.name != source) {
                obj.onchange(data);
            }
        })
    },
    addListener: function(obj) {
        this.objs.push(obj);
    }
};