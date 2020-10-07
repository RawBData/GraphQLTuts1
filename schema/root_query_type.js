const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList, GraphQLNonNull, GraphQLID } = graphql;
const mongoose = require("mongoose");
const User = mongoose.model("user");
const Post = mongoose.model("post");
const UserType = require("./user_type");
const PostType = require("./post_type");

//The object below will be passed into schema
//Each object in the field can be queried
//Be Specific on the query with the different field you want returned
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        users: {
            type: new GraphQLList(UserType),
            resolve() {
            return User.find({});
            }
        },
        user: {
            // We are now querying for a single User, so we don't need to wrap the type in GraphQLList
            type: UserType,
            // We must define a type for the arguments which will be passed in to the query.
            // GraphQLNonNull specifies that the argument must be included
            args: { id: { type: new GraphQLNonNull(GraphQLID) } },
            // The args argument represents the *actual* arguments passed into the query
            resolve(parentValue, args) {
                return User.findById(args.id)
            }
        },
        posts: {
            // we want all our returned posts in an Array so we use the GraphQLList type
            type: new GraphQLList(PostType),
            resolve() {
              return Post.find({});
            }
        },
        post: {
            // here we just want to return a single post
              type: PostType,
              // we need an id for this query so we'll use GraphQLNonNull
              args: { id: { type: new GraphQLNonNull(GraphQLID) } },
              resolve(parentValue, args) {
                  return Post.findById(args.id)
              }
        }
    }
  });
  
  module.exports = RootQuery;