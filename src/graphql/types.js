const { GraphQLObjectType, GraphQLInputObjectType, 
	GraphQLID, GraphQLString, GraphQLList, GraphQLInt, 
	GraphQLBoolean, GraphQLFloat } = require('graphql');
const { User, Post, Submission, Like, Comment, Text } = require('../models');


const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'User type',
    fields: () => ({
        id: { type: GraphQLID },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        posts: {
            type: new GraphQLList(PostType),
            resolve(parent, args) {
                return Post.find({ userID: parent.id})
            }
        },
        likes: {
            type: new GraphQLList(LikeType),
            resolve(parent, args) {
                const likeObject = Like.find({ userID: parent.id })
                return Post.find({ postID: likeObject.postID })
            }
        },
        comments: {
            type: new GraphQLList(CommentType),
            resolve(parent, args) {
                return Comment.find({ userID: parent.id})
            }
        }
    })
})

const PostType = new GraphQLObjectType({
    name: 'Post',
    description: 'Post type',
    fields: () => ({
        id: { type: GraphQLID },
        slug: { type: GraphQLString },
        title: { type: GraphQLString },
        description: { type: GraphQLString},
        userID: { type: GraphQLString },
        likes: { 
            type: new GraphQLList(LikeType),
            resolve(parent, args) {
                return Like.find({ postID: parent.id})
            }
        },
        comments: { 
            type: new GraphQLList(CommentType),
            resolve(parent, args) {
                return Comment.find({ postID: parent.id})
            }
        },
    })
})

const PostInputType = new GraphQLInputObjectType({
    name: 'PostInput',
    description: 'Post input type',
    fields: () => ({
        postID: { type: GraphQLString},
        description: { type: GraphQLString}
    })
})

const LikeType = new GraphQLObjectType({
    name: 'Like',
    description: 'Like type',
    fields: () => ({
        userID: { type: GraphQLString },
        postID: { type: GraphQLString}
    })
})

const CommentType = new GraphQLObjectType({
    name: 'Comment',
    description: 'Comment type',
    fields: () => ({
        id: { type: GraphQLID },
        slug: { type: GraphQLString },
        description: { type: GraphQLString },
        userID: { type: GraphQLString },
        postID: { type: GraphQLString },
        likes: { 
            type: new GraphQLList(LikeType),
            resolve(parent, args) {
                return Like.find({ postID: parent.id})
            }
        },
        comments: { 
            type: new GraphQLList(CommentType),
            resolve(parent, args) {
                return Comment.find({ postID: parent.id})
            }
        },
    })
})

const SubmissionType = new GraphQLObjectType({
    name: 'Submission',
    description: 'Submission type',
    fields: () => ({
        id: { type: GraphQLID },
        postID: { type: GraphQLString },
        userID: { type: GraphQLString },
        user: { 
            type: UserType,
            resolve(parent, args) {
                return User.findById(parent.userID)
            }
        },
        post: { 
            type: PostType,
            resolve(parent, args) {
                return Post.findById( parent.postID )
            }
        }
    })
})

module.exports = {
    UserType,
    PostType,
    PostInputType,
    CommentType,
    LikeType,
    SubmissionType
}