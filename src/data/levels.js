export const levels = [
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
            {
                id: 1, 
                position: 2
            },
            {
                id: 2, 
                position: 3
            },
            {
                id: 3, 
                position: 4
            }
        ]
    
    },
    {
        title : "How web works 2",
        icon: 'mdi-webhook',
    },
    {
        title : "How web works 3",
        icon: 'mdi-webhook',
    },
    {
        title : "How web works 4",
        icon: 'mdi-webhook',
    },
    {
        title : "How developer works",
        icon: 'mdi-code-braces',
    },
    {
        title : "problems in last chapter",
        icon: 'mdi-magnify',
    },
    {
        title : "Behold : kubernetes deployment",
        icon: 'mdi-rocket',
    },
    {
        title : "How k8s work 1",
        icon: 'mdi-kubernetes',
    },
    {
        title : "How k8s work 2",
        icon: 'mdi-kubernetes',
    },
    {
        title : "Pods and deployments",
        icon: 'mdi-package-variant-closed',
    },
    {
        title : "Services and Ingress",
        icon: 'mdi-transfer-up',
    },
    {
        title : "Rolling updates",
        icon: 'mdi-update',
    },
]

