var Bar, Baz, Foo, Text, a, append, b,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

append = function(ele, txt) {
  var div;
  div = document.createElement('div');
  div.innerHTML = txt;
  return ele.appendChild(div);
};

Text = (function() {
  function Text(name) {
    this.name = name;
  }

  Text.prototype.write = function(label) {
    var str;
    str = ("Scripted lorem ipsum text - " + label + " - ") + this.name;
    return append(document.body, str);
  };

  return Text;

})();

Foo = (function(superClass) {
  extend(Foo, superClass);

  function Foo() {
    return Foo.__super__.constructor.apply(this, arguments);
  }

  Foo.prototype.write = function() {
    return Foo.__super__.write.call(this, "foo");
  };

  return Foo;

})(Text);

Bar = (function(superClass) {
  extend(Bar, superClass);

  function Bar() {
    return Bar.__super__.constructor.apply(this, arguments);
  }

  Bar.prototype.write = function() {
    return Bar.__super__.write.call(this, "bar");
  };

  return Bar;

})(Text);

Baz = (function() {
  var bar, foo;

  function Baz() {}

  foo = new Foo("3");

  bar = new Bar("4");

  Baz.prototype.write = function() {
    foo.write();
    return bar.write();
  };

  return Baz;

})();

a = new Foo("1");

b = new Bar("2");

a.write();

b.write();

document.onreadystatechange = function() {
  var c;
  if (document.readyState === "complete") {
    c = new Baz;
    return c.write();
  }
};
