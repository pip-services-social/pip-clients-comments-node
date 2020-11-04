"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsDirectClientV1 = void 0;
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
class CommentsDirectClientV1 extends pip_services3_rpc_node_1.DirectClient {
    constructor(config) {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_node_1.Descriptor("pip-services-comments", "controller", "*", "*", "*"));
        let thisConfig = pip_services3_commons_node_2.ConfigParams.fromValue(config);
        if (config != null)
            this.configure(thisConfig);
    }
    getComments(correlationId, filter, paging, callback) {
        let timing = this.instrument(correlationId, 'comments.get_comments');
        this._controller.getComments(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }
    getCommentById(correlationId, commentId, callback) {
        let timing = this.instrument(correlationId, 'comments.get_comment_by_id');
        this._controller.getCommentById(correlationId, commentId, (err, comment) => {
            timing.endTiming();
            callback(err, comment);
        });
    }
    createComment(correlationId, comment, callback) {
        let timing = this.instrument(correlationId, 'comments.create_comment');
        this._controller.createComment(correlationId, comment, (err, comment) => {
            timing.endTiming();
            callback(err, comment);
        });
    }
    updateComment(correlationId, comment, callback) {
        let timing = this.instrument(correlationId, 'comments.update_comment');
        this._controller.updateComment(correlationId, comment, (err, comment) => {
            timing.endTiming();
            callback(err, comment);
        });
    }
    deleteCommentById(correlationId, commentId, callback) {
        let timing = this.instrument(correlationId, 'comments.delete_comment_by_id');
        this._controller.deleteCommentById(correlationId, commentId, (err, comment) => {
            timing.endTiming();
            callback(err, comment);
        });
    }
    addMemeToComment(correlationId, id, creator_id, meme_type, callback) {
        let timing = this.instrument(correlationId, 'comments.add_comment_meme');
        this._controller.addMemeToComment(correlationId, id, creator_id, meme_type, (err, comment) => {
            timing.endTiming();
            callback(err, comment);
        });
    }
    removeMemeFromComment(correlationId, id, creator_id, meme_type, callback) {
        let timing = this.instrument(correlationId, 'comments.remove_comment_meme');
        this._controller.removeMemeFromComment(correlationId, id, creator_id, meme_type, (err, comment) => {
            timing.endTiming();
            callback(err, comment);
        });
    }
    updateCommentState(correlationId, id, state, callback) {
        let timing = this.instrument(correlationId, 'comments.update_comment_state');
        this._controller.updateCommentState(correlationId, id, state, (err, comment) => {
            timing.endTiming();
            callback(err, comment);
        });
    }
    markCommentAsDeleted(correlationId, id, callback) {
        let timing = this.instrument(correlationId, 'comments.mark_comment_deleted');
        this._controller.markCommentAsDeleted(correlationId, id, (err, comment) => {
            timing.endTiming();
            callback(err, comment);
        });
    }
}
exports.CommentsDirectClientV1 = CommentsDirectClientV1;
//# sourceMappingURL=CommentsDirectClientV1.js.map