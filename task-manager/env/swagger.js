const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const options = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Task Manger API ",
            version: "1.0.0",
            description: "API Documentation",
        },
        servers: [
            {
                url: "http://localhost:3000",
                description: "Development server",
            },
        ],
    },
    apis: ["../Router/*.js"],
};

const swaggerDocs = swaggerJsDoc(options);

module.exports = { swaggerUi, swaggerDocs };
