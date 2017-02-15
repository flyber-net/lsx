### [lsx-pug - LiveScript Extension](https://github.com/flyber-net/lsx-pug)

![Logo](https://content.screencast.com/users/a.stegno/folders/Jing/media/1ddfab27-6d01-41c9-965d-30cef10675b6/00000147.png)
This is Pug/Jade like syntax library for React DOM written on LiveScript

### Example

```Livescript
{ render } = require \react-dom
{ create, div, a, p } = require \lsx-pug

main = create do
    render : ->
        div do
          a(href: \http://google.com 
            target: \blank) \hello
          p \world

window.onload = ->
    'app' |> document.create-element |> document.body.append-child
    render do
        main ""
        'app' |> document.query-selector
```



---------

### Installation

Have Node.js installed.

```Bash
npm i lsx-pug
```

### Usage

1 Import plugin 'lsx-pug'.

```Livescript
{ create, div, a, p } = require \lsx-pug
```

2 Create class and bind. (example:Main)

```Livescript
main = create do
    render : ->
        div do
            p \hello
            a(href: \http://google.com ) \world
```

3 Render.

```Livescript
{ render } = require \react-dom
render do
    main ""
    'app' |> document.query-selector
```

---------
---------
---------



### More Examples

Object Oriented Programming

```Livescript
{ create, Component, div, a, p } = require \lsx-pug

main = create class Main extends Component
    render : ->
        div do
            a 'hello'
            p 'world'
```

Component

```Livescript


div 'hello,world'

# <div>hello,world</div>
```

Null Contents Component

```Livescript

div ""

# <div />
```

Nested Component

```Livescript
div do 
    p
    p 'hello,world'

# <div>
#     <p />
#     <p>hello,world</p>
# </div>
```

Set Properties and Style, etc..

```Livescript
div(test-prop : 'test',
    on-click : @test-func ,
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
Use Component and Set Prop-Types

```Livescript
{ create, type, div} = require 'lsx-pug'

test-component = create do

    prop-types =
        test-class : type.string

    get-default-props = ->
        test-class : 'default'

    render : ->
        div(class-name: @props.test-class) @props.children

main = create do

    render: ->
        div do
          test-component(test-class: 'test') 'hello,world'
```

Use If Condition

```Livescript

main = create do
    render : ->
        div(title: "Title") do 
            div [div 1, div 2]
            div do
              if 5 is 5  
                 div "Conditional Div"
              else 
                 div "Never Happended"
              div "Next Div"

```

Use Loops 

```Livescript 

main = create do

    render: ->
        div do
          for i in [1 to 5]
            div i

```

Limitations 

```Livescript 

#This syntax is not supported
 
div() 

#

div

#At least You need to add empty string 

div() "" 

#or 

div ""

#
#Perphaps, in next version, we are going to adjust React validations rules in order to make possible to write 
#

div 

div()


```

