### [lsx-pug - LiveScript Extension](https://github.com/flyber-net/lsx-pug)

![Logo](https://content.screencast.com/users/a.stegno/folders/Jing/media/1ddfab27-6d01-41c9-965d-30cef10675b6/00000147.png)
This is Pug/Jade like syntax library for React DOM written on LiveScript

### Please support this project (Goal $ 6k)

Wallet

1. BTC 19Uf4EjwXb2j2FvNvmgY3u7NtM7BYLmrR7
2. ETH 0x8d23C40C1703b99D0295b3277E4164cE3DAaF7b6
3. LTC LZFqabuJnk7VavgyTyKe8S9qqGVodbDkRe

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
    \app |> document.create-element |> document.body.append-child
    render do
        main ""
        \app |> document.query-selector
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

3 Custom Element. (example:Main)

```Livescript
{ create, div, a, p, button } = require \lsx-pug

CustomElement = (on-click: on-click)->
    button(on-click: on-click)

main = create do
    render : ->
        div do
            CustomElement
            a(href: \http://google.com ) \world
```


4 Render.

```Livescript
{ render } = require \react-dom
render do
    main ""
    \app |> document.query-selector
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
            a \hello
            p \world
```

Component

```Livescript


div \hello

# <div>hello</div>
```

Null Contents Component

```Livescript

div ""

# <div />
```

Nested Component

```Livescript
div do 
    p ""
    p \hello

# <div>
#     <p />
#     <p>hello</p>
# </div>
```

Set Properties and Style, etc..

```Livescript
div(test-prop : \test ,
    on-click : @test-func ,
    style : {height : 200  width : 200} ) \hello

# <div test-prop = "test"
#      onClick = {this.testFunc}
#      style = {
#          height:200
#          width:200
#      }>
#     hello
# <div>
```
Use Component and Set Prop-Types

```Livescript
{ create, type, div} = require \lsx-pug

test-component = create do

    prop-types =
        test-class : type.string

    get-default-props = ->
        test-class : \default

    render : ->
        div(class-name: @props.test-class) @props.children

main = create do

    render: ->
        div do
          test-component(test-class: \test ) \hello
```

Use If Condition

```Livescript

main = create do
    render : ->
        div(title: \title ) do 
            div [div 1, div 2]
            div do
              if 5 is 5  
                 div "conditional div"
              else 
                 div "never happended"
              div "next div"

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

