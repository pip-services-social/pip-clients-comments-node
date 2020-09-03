"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
}
exports.CommentsNullClientV1 = CommentsNullClientV1;
//# sourceMappingURL=CommentsNullClientV1.js.map