"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsHttpClientV1 = void 0;
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class CommentsHttpClientV1 extends pip_services3_rpc_node_1.CommandableHttpClient {
    constructor() {
        super('v1/comments');
    }
    getComments(correlationId, filter, paging, callback) {
        this.callCommand('get_comments', correlationId, {
            filter: filter,
            paging: paging
        }, callback);
    }
    getCommentById(correlationId, commentId, callback) {
        this.callCommand('get_comment_by_id', correlationId, {
            comment_id: commentId
        }, callback);
    }
    createComment(correlationId, comment, callback) {
        let timing = this.instrument(correlationId, 'comments.create_comment');
        this.callCommand('create_comment', correlationId, {
            comment: comment
        }, callback);
    }
    updateComment(correlationId, comment, callback) {
        this.callCommand('update_comment', correlationId, {
            comment: comment
        }, callback);
    }
    deleteCommentById(correlationId, commentId, callback) {
        let timing = this.instrument(correlationId, 'comments.delete_comment_by_id');
        this.callCommand('delete_comment_by_id', correlationId, {
            comment_id: commentId
        }, callback);
    }
    addMemeToComment(correlationId, id, creator_id, meme_type, callback) {
        this.callCommand('add_comment_meme', correlationId, {
            id: id,
            creator_id: creator_id,
            meme_type: meme_type
        }, callback);
    }
    removeMemeFromComment(correlationId, id, creator_id, meme_type, callback) {
        this.callCommand('remove_comment_meme', correlationId, {
            id: id,
            creator_id: creator_id,
            meme_type: meme_type
        }, callback);
    }
    updateCommentState(correlationId, id, state, callback) {
        this.callCommand('update_comment_state', correlationId, {
            id: id,
            state: state
        }, callback);
    }
}
exports.CommentsHttpClientV1 = CommentsHttpClientV1;
//# sourceMappingURL=CommentsHttpClientV1.js.map