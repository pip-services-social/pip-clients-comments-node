"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_components_node_1 = require("pip-services3-components-node");
const CommentsNullClientV1_1 = require("../version1/CommentsNullClientV1");
const CommentsDirectClientV1_1 = require("../version1/CommentsDirectClientV1");
const CommentsHttpClientV1_1 = require("../version1/CommentsHttpClientV1");
const CommentsLambdaClientV1_1 = require("../version1/CommentsLambdaClientV1");
class CommentsClientFactory extends pip_services3_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(CommentsClientFactory.NullClientV1Descriptor, CommentsNullClientV1_1.CommentsNullClientV1);
        this.registerAsType(CommentsClientFactory.DirectClientV1Descriptor, CommentsDirectClientV1_1.CommentsDirectClientV1);
        this.registerAsType(CommentsClientFactory.HttpClientV1Descriptor, CommentsHttpClientV1_1.CommentsHttpClientV1);
        this.registerAsType(CommentsClientFactory.LambdaClientV1Descriptor, CommentsLambdaClientV1_1.CommentsLambdaClientV1);
    }
}
exports.CommentsClientFactory = CommentsClientFactory;
CommentsClientFactory.Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-comments', 'factory', 'default', 'default', '1.0');
CommentsClientFactory.NullClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-comments', 'client', 'null', 'default', '1.0');
CommentsClientFactory.DirectClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-comments', 'client', 'direct', 'default', '1.0');
CommentsClientFactory.HttpClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-comments', 'client', 'http', 'default', '1.0');
CommentsClientFactory.LambdaClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-comments', 'client', 'lambda', 'default', '1.0');
//# sourceMappingURL=CommentsClientFactory.js.map