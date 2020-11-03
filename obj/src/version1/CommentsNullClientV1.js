"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsNullClientV1 = void 0;
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
class CommentsNullClientV1 {
    getComments(correlationId, filter, paging, callback) {
        callback(null, new pip_services3_commons_node_1.DataPage([], 0));
    }
    getCommentById(correlationId, commentId, callback) {
        callback(null, null);
    }
    createComment(correlationId, comment, callback) {
        callback(null, null);
    }
    updateComment(correlationId, comment, callback) {
        callback(null, null);
    }
    deleteCommentById(correlationId, commentId, callback) {
        callback(null, null);
    }
    addMemeToComment(correlationId, id, creator_id, meme_type, callback) {
        callback(null, null);
    }
    removeMemeFromComment(correlationId, id, creator_id, meme_type, callback) {
        callback(null, null);
    }
    updateCommentState(correlationId, id, state, callback) {
        callback(null, null);
    }
}
exports.CommentsNullClientV1 = CommentsNullClientV1;
//# sourceMappingURL=CommentsNullClientV1.js.map