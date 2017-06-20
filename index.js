// Generated by LiveScript 1.5.0
(function(){
  var React, render, build, create, bootstrap, install, type, buildPug, pug, html, svg, out$ = typeof exports != 'undefined' && exports || this, toString$ = {}.toString;
  out$.React = React = require('react');
  render = require('react-dom').render;
  /*
  make-element = (tagname, props, func)->
     obj.$$typeof = "Symbol(react.element)"
     obj._owner = null
     obj._self = null
     obj._source = null 
     obj._store = 
        validated: no 
     obj.props = 
        children: 0
     if typeof! input is \Object
           obj.props <<< input
     obj.key = null
     obj.ref = null
     obj.type = tagname
     return obj    
  */
  build = function(tagname, dom){
    return function(input){
      var items, obj;
      items = (function(args$){
        switch (false) {
        case toString$.call(args$[1]).slice(8, -1) !== 'Array':
          return args$[1];
        default:
          return Array.prototype.slice.call(args$);
        }
      }(arguments));
      if ((input != null ? input.$$typeof : void 8) != null) {
        return dom.apply(this, [null].concat(items));
      }
      if (['Object', 'Undefined', 'Null'].indexOf(toString$.call(input).slice(8, -1)) > -1) {
        obj = function(){
          var items;
          items = (function(args$){
            switch (false) {
            case toString$.call(args$[0]).slice(8, -1) !== 'Array':
              return args$[0];
            default:
              return Array.prototype.slice.call(args$);
            }
          }(arguments));
          return dom.apply(this, [input != null ? input : null].concat(items));
        };
        return obj;
      }
      return dom.apply(this, [null].concat(items));
    };
  };
  create = function(component){
    if (typeof component === 'object') {
      component = React.createClass(component);
    }
    return build("component", React.createFactory(component));
  };
  out$.bootstrap = bootstrap = function(document, obj){
    var main;
    main = create({
      render: toString$.call(obj).slice(8, -1) === 'Function' ? obj : obj
    });
    document.body.appendChild(
    document.createElement(
    'app'));
    return render(main(""), document.querySelector(
    'app'));
  };
  install = function(name){
    return exports[name] = build(name, React.DOM[name]);
  };
  out$.type = type = function(){
    var types, props;
    types = {};
    props = ['array', 'bool', 'func', 'number', 'object', 'string', 'node', 'element', 'instanceOf', 'oneOf', 'oneOfType', 'arrayOf', 'objectOf', 'shape'].map(function(prop){
      return types[prop] = React.PropTypes[prop];
    });
    return types;
  }();
  buildPug = function(name, v2, v3){
    var children;
    children = (function(){
      switch (false) {
      case toString$.call(v3).slice(8, -1) !== 'Function':
        return v3();
      default:
        return v3;
      }
    }());
    return build(name, React.DOM[name])(v2)(children);
  };
  out$.pug = pug = curry$(function(tag, v2){
    switch (toString$.call(v2).slice(8, -1)) {
    case 'Object':
      return buildPug(tag, v2, arguments[2]);
    default:
      return buildPug(tag, {}, v2);
    }
  });
  html = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var$', 'video', 'wbr'].map(install);
  svg = ['circle', 'clipPath', 'defs', 'ellipse', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'].map(install);
  function curry$(f, bound){
    var context,
    _curry = function(args) {
      return f.length > 1 ? function(){
        var params = args ? args.concat() : [];
        context = bound ? context || this : this;
        return params.push.apply(params, arguments) <
            f.length && arguments.length ?
          _curry.call(context, params) : f.apply(context, params);
      } : f;
    };
    return _curry();
  }
}).call(this);
