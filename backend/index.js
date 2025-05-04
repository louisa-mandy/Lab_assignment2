// const express = require('express');
// const mongoose = require('mongoose');
// const todoRoutes = require('./routes/todoRoutes');
// const swaggerUi = require('swagger-ui-express');
// const swaggerJsdoc = require('swagger-jsdoc');
// // console.log(swaggerDocs);

// const app = express();
// const PORT = process.env.PORT || 3000;

// // MongoDB connection
// mongoose.connect('mongodb://127.0.0.1:27017/myDatabase', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log('MongoDB connected'))
// .catch(err => console.error(err));

// // Middleware
// app.use(express.json());

// // Swagger setup
// const swaggerOptions = {
//   definition: {
//     openapi: '3.0.0',
//     info: {
//       title: 'ToDo API',
//       version: '1.0.0',
//       description: 'A simple Express ToDo API',
//     },
//     servers: [
//       {
//         url: 'http://localhost:3000',
//       },
//     ],
//   },
//   apis: ['./routes/*.js'], // Location of API definitions
// };

// const swaggerDocs = swaggerJsdoc(swaggerOptions);
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// // Routes
// app.use('/api/todos', todoRoutes);

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


const express = require('express');
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todoRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/myDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(express.json());

// Swagger setup
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'ToDo API',
      version: '1.0.0',
      description: 'A simple Express ToDo API',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
    components: {
      schemas: {
        Todo: {
          type: 'object',
          required: ['title'],
          properties: {
            _id: {
              type: 'string',
              description: 'Auto-generated ID of the todo',
              example: '60d0fe4f5311236168a109ca'
            },
            title: {
              type: 'string',
              description: 'Title of the todo',
              example: 'Buy groceries',
            },
            completed: {
              type: 'boolean',
              description: 'Todo completion status',
              example: false,
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              example: '2025-05-04T10:20:30Z'
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              example: '2025-05-04T10:22:00Z'
            }
          },
        },
      },
    },
  },
  apis: ['./routes/*.js'], // Ensure this path matches your folder structure
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
app.use('/api/todos', todoRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the ToDo API');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});
