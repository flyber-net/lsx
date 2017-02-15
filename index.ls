React = require \react

build = (tagname, dom)->
     (input)->
         items = 
              | typeof! arguments.1 is \Array => arguments.1
              | _ => Array.prototype.slice.call(arguments)
         if input?$$typeof?
           return dom.apply(@, [null] ++ items)
         if [\Object, \Undefined, \Null].index-of(typeof! input) > -1
           obj = ->
              items = 
                | typeof! arguments.0 is \Array => arguments.0
                | _ => Array.prototype.slice.call(arguments)
              dom.apply(@, [input ? null] ++ items)
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
           obj   
         dom.apply(@, [null] ++ items)

create = (component) ->
    if typeof component is \object
        component = React.create-class component
    build("component", React.create-factory component)

exports.React = React
exports.Component = React.Component
exports.create = create
exports.type = do ->
    types = {}
    props = [
        'array', 'bool', 'func', 'number', 'object', 'string',
        'node',  'element',
        'instanceOf', 'oneOf', 'oneOfType', 'arrayOf', 'objectOf', 'shape',
    ].map (prop) ->
        types[prop] = React.PropTypes[prop]
    types


    
install = (name)->
    exports[name] = build name, React.DOM[name]

html = [
    'a' 'abbr' 'address' 'area' 'article' 'aside' 'audio' 'b' 'base' 'bdi' 'bdo' 'big' 'blockquote' 'body' 'br'
    'button' 'canvas' 'caption' 'cite' 'code' 'col' 'colgroup' 'data' 'datalist' 'dd' 'del' 'details' 'dfn'
    'dialog' 'div' 'dl' 'dt' 'em' 'embed' 'fieldset' 'figcaption' 'figure' 'footer' 'form' 'h1' 'h2' 'h3' 'h4' 'h5'
    'h6' 'head' 'header' 'hgroup' 'hr' 'html' 'i' 'iframe' 'img' 'input' 'ins' 'kbd' 'keygen' 'label' 'legend' 'li'
    'link' 'main' 'map' 'mark' 'menu' 'menuitem' 'meta' 'meter' 'nav' 'noscript' 'object' 'ol' 'optgroup'
    'option' 'output' 'p' 'param' 'picture' 'pre' 'progress' 'q' 'rp' 'rt' 'ruby' 's' 'samp' 'script' 'section'
    'select' 'small' 'source' 'span' 'strong' 'style' 'sub' 'summary' 'sup' 'table' 'tbody' 'td' 'textarea'
    'tfoot' 'th' 'thead' 'time' 'title' 'tr' 'track' 'u' 'ul' 'var$' 'video' 'wbr'
].map install

svg = [
    'circle' 'clipPath' 'defs' 'ellipse' 'g' 'image' 'line' 'linearGradient' 'mask' 'path' 'pattern'
    'polygon' 'polyline' 'radialGradient' 'rect' 'stop' 'svg' 'text' 'tspan'
].map install
