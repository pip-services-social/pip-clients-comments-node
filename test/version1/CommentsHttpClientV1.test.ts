let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { CommentsMemoryPersistence, CommentsHttpServiceV1 } from 'pip-services-comments-node';
import { CommentsController } from 'pip-services-comments-node';
import { CommentsClientFixtureV1 } from './CommentsClientFixtureV1';
import { CommentsHttpClientV1 } from '../../src/version1/CommentsHttpClientV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('CommentsHttpClientV1', ()=> {
    let service: CommentsHttpServiceV1;
    let client: CommentsHttpClientV1;
    let fixture: CommentsClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new CommentsMemoryPersistence();
        let controller = new CommentsController();

        service = new CommentsHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-comments', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-comments', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('pip-services-comments', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new CommentsHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new CommentsClientFixtureV1(client);

        service.open(null, (err) => {
            client.open(null, done);
        });
        
    });
    
    suiteTeardown((done) => {
        client.close(null);
        service.close(null, done);
    });

    test('Create comments', (done) => {
        fixture.testCreateComments(done);
    });

    test('Get comments with filters', (done) => {
        fixture.testGetWithFilter(done);
    });

    test('Comments crud operations', (done) => {
        fixture.testCrudOperations(done);
    });



});