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
        problem: {
            statement : "fix the relation of given scenario 2"
        },
    },
    {
        title : "How web works 3",
        icon: 'mdi-webhook',
        problem: {
            statement : "fix the relation of given scenario 3"
        },
    },
    {
        title : "How web works 4",
        icon: 'mdi-webhook',
        problem: {
            statement : "fix the relation of given scenario 4"
        },
    },
    {
        title : "How developer works",
        icon: 'mdi-code-braces',
        problem: {
            statement : "fix the relation of given scenario 5"
        },
    },
    {
        title : "problems in last chapter",
        icon: 'mdi-magnify',
        problem: {
            statement : "fix the relation of given scenario 6"
        },
    },
    {
        title : "Behold : kubernetes deployment",
        icon: 'mdi-rocket',
        problem: {
            statement : "Edit the YAML in the editer on left."
        },
    },
    {
        title : "How k8s work 1",
        icon: 'mdi-kubernetes',
        problem: {
            statement : "Edit the YAML in the editer on left."
        },
    },
    {
        title : "How k8s work 2",
        icon: 'mdi-kubernetes',
        problem: {
            statement : "Edit the YAML in the editer on left."
        },
    },
    {
        title : "Pods and deployments",
        icon: 'mdi-package-variant-closed',
        problem: {
            statement : "Edit the YAML in the editer on left."
        },
    },
    {
        title : "Services and Ingress",
        icon: 'mdi-transfer-up',
        problem: {
            statement : "Edit the YAML in the editer on left."
        },
    },
    {
        title : "Rolling updates",
        icon: 'mdi-update',
        problem: {
            statement : "Edit the YAML in the editer on left."
        },
    },
    
]

