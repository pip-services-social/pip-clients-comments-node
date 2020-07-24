import { Descriptor } from 'pip-services3-commons-node';
import { Factory } from 'pip-services3-components-node';

import { CommentsNullClientV1 } from '../version1/CommentsNullClientV1';
import { CommentsDirectClientV1 } from '../version1/CommentsDirectClientV1';
import { CommentsHttpClientV1 } from '../version1/CommentsHttpClientV1';
import { CommentsLambdaClientV1 } from '../version1/CommentsLambdaClientV1';

export class CommentsClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('pip-services-comments', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('pip-services-comments', 'client', 'null', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('pip-services-comments', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('pip-services-comments', 'client', 'http', 'default', '1.0');
	public static LambdaClientV1Descriptor = new Descriptor('pip-services-comments', 'client', 'lambda', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(CommentsClientFactory.NullClientV1Descriptor, CommentsNullClientV1);
		this.registerAsType(CommentsClientFactory.DirectClientV1Descriptor, CommentsDirectClientV1);
		this.registerAsType(CommentsClientFactory.HttpClientV1Descriptor, CommentsHttpClientV1);
		this.registerAsType(CommentsClientFactory.LambdaClientV1Descriptor, CommentsLambdaClientV1);
	}
}