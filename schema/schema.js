const graphql = require("graphql");
const { GraphQLSchema } = graphql;

const RootQueryType = require("./root_query_type");
const mutations = require("./mutations")

//Below is passed in index.js via express.use and rootquerytype is built to create different root queries
module.exports = new GraphQLSchema({
    // this is the root query object you just created!
    query: RootQueryType,
    mutation: mutations
  });