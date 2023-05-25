const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const ai = require('./server/utils/airesponse');
const db = require('./server/config/connection');
const { authMiddleware } = require('./server/utils/auth');
const { typeDefs, resolvers } = require('./server/schemas');
const cors = require('cors');

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true, 
    context: authMiddleware
});

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(ai)

// if we're in production, serve client/build as static assets
//if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, './')));
//}

// app.use(routes);
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './', 'index.html'));
  });
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './', 'index.html'));
  });

const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({ app })
    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`graphQL at http://localhost:${PORT}${server.graphqlPath}`)
        });
    });
};


startApolloServer(typeDefs, resolvers)