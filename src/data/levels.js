export const levels = [
    {
        title: "How web works 1",
        icon: 'mdi-webhook',
        nodes: [
            {id: 1, x: 100, y: 130, name: 'NoSql', type: 'start'},
            {id: 2, x: 360, y: 130, name: 'User', type: 'client'},
            {id: 3, x: 650, y: 130, name: 'Server', type: 'end'},
        ],

        explaination: {
            content : "lorem ipsum ....",
            reveal : false
        },
    
        problem: {
            statement : "fix the relation of given scenario"
        },
    
        connections: [
            {
                source: {id: 1, position: 'right'},
                destination: {id: 2, position: 'left'},
                id: 1,
                type: 'pass',
            },
            {
                source: {id: 2, position: 'right'},
                destination: {id: 3, position: 'left'},
                id: 2,
                type: 'pass',
                },
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

