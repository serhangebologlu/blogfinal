import React, { Component} from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { deletePost } from '../graphql/mutations'

class DeletePost extends Component {


    handleDeletePost = async postId => {
         const input = {
              id: postId,
              _version: 1
         }

         console.log("input-->" + JSON.stringify(input))

         await API.graphql(graphqlOperation(deletePost, { input }))

         //console.log("result-->" + result)
    }
    render() {
        const post = this.props.data

        console.log("post.id" + post.id)
         return (
             <button onClick= { () => this.handleDeletePost(post.id) }>Delete</button>
         )
    }
}
export default DeletePost;