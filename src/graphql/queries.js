const { GraphQLList, GraphQLID, GraphQLString } = require('graphql');
const { 
    UserType, 
    PostType, 
    CommentType, 
    LikeType, 
    SubmissionType
} = require('./types');
const { Quiz, Post, Comment, Like, Submission, User } = require('../models')


const postBySlug = {
    type: PostType,
    description: 'Query post by slug value',
    args: {
        slug: { type: GraphQLString }
    },
    async resolve(parent, args) {
        return Post.findOne({ slug: args.slug })
    }
}

const submissionById = {
    type: SubmissionType,
    description: 'Query post submission by id',
    args: {
        id: { type: GraphQLString }
    },
    async resolve(parent, args) {
        return Submission.findById(args.id)
    }
}