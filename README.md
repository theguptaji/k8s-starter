# k8s-starter

## UI Ideas
* create a single page app 
* has a animation area on the top 
* has a editor area on the bottom
* has a navigation area on the right which is hidable

## animation area
* we want people to join different elements via arrows and direction of arrrows

## Data
* A js array of objects, where object is of format:
```
{
    elements: [
        {element: app-user(client),
         id: 1,
         color: blue,
         position: 1,
         image: x},
        {element: node-app,
         id: 2,
         color: green,
         position: 3,
         image: y},
        {element: auth-app,
         id: 3,
         color: green,
         position: 4,
         image: z},
    ],
    explaination: {
        content : "lorem ipsum ....",
        reveal : false
        <!-- here we define the explaination the current scenario -->
    }

    problem: {
        statement : "fix the relation of given scenario"
    }

    correctPositions: [
        {id: 1, position: 2}
        {id: 2, position: 3}
        {id: 3, position: 4}
    ]

}
```

## chapters

follow CKAD curriculum
* How web works 1 : browser --> server 
* How web works 2 : browser --> server --> db
* How web works 3 : browser --> auth --> server --> db 
* How web works 4 : millions of browser --> distributed auth --> distributed server --> distributed db 
* How developer works 1 : github --> deploy in distributed auth --> deploy in distributed server --> deploy in distributed db 
* problems in last : github --> deploy in distributed auth --> deploy in distributed server --> deploy in distributed db 
* kubernetes deployment : github --> deployment auth --> deployment server --> deployment db
* How k8s work 1 : front end developer --> write code --> Containerize it --> edit deployment



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
