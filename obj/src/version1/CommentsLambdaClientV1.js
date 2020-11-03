"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsLambdaClientV1 = void 0;
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_aws_node_1 = require("pip-services3-aws-node");
class CommentsLambdaClientV1 extends pip_services3_aws_node_1.CommandableLambdaClient {
    constructor(config) {
        super('comments');
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    configure(config) {
        super.configure(config);
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
        let timing = this.instrument(correlationId, 'comments.add_comment_meme');
        this.callCommand('add_comment_meme', correlationId, {
            id: id,
            creator_id: creator_id,
            meme_type: meme_type
        }, callback);
    }
    removeMemeFromComment(correlationId, id, creator_id, meme_type, callback) {
        let timing = this.instrument(correlationId, 'comments.remove_comment_meme');
        this.callCommand('remove_comment_meme', correlationId, {
            id: id,
            creator_id: creator_id,
            meme_type: meme_type
        }, callback);
    }
    updateCommentState(correlationId, id, state, callback) {
        let timing = this.instrument(correlationId, 'comments.update_comment_state');
        this.callCommand('update_comment_state', correlationId, {
            id: id,
            state: state
        }, callback);
    }
}
exports.CommentsLambdaClientV1 = CommentsLambdaClientV1;
//# sourceMappingURL=CommentsLambdaClientV1.js.map