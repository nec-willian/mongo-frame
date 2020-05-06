var pluralize = require('pluralize')
String.prototype.capitalize = function() {
    var str = this;
    return str.charAt(0).toUpperCase() + str.slice(1)
};
String.prototype.camel = function() {
    var str = this;
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      }).replace(/\s+/g, '');
};
String.prototype.singularize = function() {
    var str = this;    
    return pluralize.singular(str);
};
String.prototype.classify = function() {
    return this.camel().capitalize().split('.')[0].singularize();
}
module.exports = String;