### [lsx-pug - LiveScript Extension](https://github.com/flyber-net/lsx-pug)

!(Logo)[https://content.screencast.com/users/a.stegno/folders/Jing/media/1ddfab27-6d01-41c9-965d-30cef10675b6/00000147.png]
This is Pug/Jade like syntax library for React DOM written on LiveScript

! This plugin is written LiveScript, you need to install LiveScript. LiveScript is a language which compiles to JavaScript.
```Livescript
{ render } = require \react-dom
{ create-class, div, a, p } = require \lsx-pug

main = create-class do
    render : ->
        div(title: "Title Attribute :)") do
            a() 'hello'
            p() 'world'

window.onload = ->
    'app' |> document.create-element |> document.body.append-child
    render do
        main()
        'app' |> document.query-selector
```

Object Oriented Programming

```Livescript
{ create-class, Component, div, a, p } = require \lsx-pug

main = create-class class Main extends Component
    render : ->
        div() do
            a() 'hello'
            p() 'world'
```
### Installation

Have Node.js installed.

```Bash
npm i lsx-pug
```

### Usage

1 import plugin 'lsx-pug'.

```Livescript
{ create-class, div, a, p } = require \lsx-pug
```

2 create class and bind. (example:Main)

```Livescript
Main = create-class do
    render : ->
        div() do
            p() \hello
            a(href:"http://google.com.ua") \world
```

3 render.

```Livescript
{ render } = require \react-dom
render do
    Main()
    'app' |> document.querySelector
```

### Function

```Livescript
component

div() 'hello,world'

# <div>hello,world</div>
```

null contents component

```Livescript
div()

# <div />
```

nest component
```Livescript
div() do 
    p()
    p() 'hello,world'

# <div>
#     <p />
#     <p>hello,world</p>
# </div>
```

set props and style, etc..

```Livescript
div (test-prop : 'test'
     on-click : @test-func 
     style : {height : 200  width : 200} ) 'hello,world'

# <div test-prop = "test"
#      onClick = {this.testFunc}
#      style = {
#          height:200
#          width:200
#      }>
#     hello,world
# <div>
```
use component and set prop-types
```Livescript
{ createClass, type, div} = require 'lsx-pug'

test-component = create-class do

    prop-types =
        test-class : type.string

    get-default-props = ->
        test-class : 'default'

    render : ->
        div(class-name: @props.test-class) @props.children

Main = createClass do

    render: ->
        div() do
          test-component( test-class: 'test') 'hello,world'
```
