# k8s-starter

## Development flow
* Setup a single page app 🚀🏁
* Layout has an animation area on the top 🚀🏁
* Layout has an editor area on the bottom 🚀🏁
* Layout has a navigation area on the right which is hidable 🚀🏁
* Setup third party library for code editor 🚀🏁
* Create basic chapter structure 🚀🏁
* Setup third party library for animation area ⏳👨🏼‍💻💪🏼
* State management via vuex 👨🏼‍💻💪🏼

***

## animation area
* Iterate over `elements` in a chapter.
* Create a card with each element `id` and position them on screen with element `position`.
* All cards are movable.
* Each card has propery to hook it to other card.

***

## State management
* site loads with a welcome screen, which has proceed button.
* after proceed, current state moves to chapter one.
* Chapter navigation is controlled via navbar and also url (site.com/ch/1)
* Data on `main-board` and `editor-board` changes when chapter is changed.
* Chapter class becomes `active` in navbar when it is chosen.

***

## Data
* A js array of objects, where object is of format:
```
{
        title: "How web works 1",
        icon: 'mdi-webhook',
        elements: [
            {
                element: "app-user(client)",
                id: 1,
                color: "blue",
                position: 1,
                image: "x"
            },
            {
                element: "node-app",
                id: 2,
                color: "green",
                position: 3,
                image: "y"
            },
            {
                element: "auth-app",
                id: 3,
                color: "green",
                position: 4,
                image: "z"
            },
        ],

        explaination: {
            content : "lorem ipsum ....",
            reveal : false
        },
    
        problem: {
            statement : "fix the relation of given scenario"
        },
    
        correctPositions: [
            {id: 1,position: 2},
            {id: 2,position: 3},
            {id: 3,position: 4}
        ]
    
    }
```

***

## chapters

follow CKAD curriculum
* How web works 1 : `browser --> server`
* How web works 2 : `browser --> server --> db`
* How web works 3 : `browser --> auth --> server --> db `
* How web works 4 : `millions of browser --> distributed auth --> distributed server --> distributed db` 
* How developer works 1 : `github --> deploy in distributed auth --> deploy in distributed server --> deploy in distributed db` 
* problems in last : `github --> deploy in distributed auth --> deploy in distributed server --> deploy in distributed db` 
* kubernetes deployment : `github --> deployment auth --> deployment server --> deployment db`
* How k8s work 1 : `front end developer --> write code --> Containerize it --> edit deployment`
* How k8s work 2 : `back end developer --> write code --> Containerize it --> edit deployment`
* Pods and deployments : `container --> pod --> vm`
* services and ingress : `pod --> svc --> ingress --> world`
* Rolling updates : `code --> container-tag --> deployment`

***

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
