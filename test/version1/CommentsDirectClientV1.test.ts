let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { CommentsMemoryPersistence } from 'pip-services-comments-node';
import { CommentsController } from 'pip-services-comments-node';
import { ICommentsClientV1 } from '../../src/version1/ICommentsClientV1';
import { CommentsDirectClientV1 } from '../../src/version1/CommentsDirectClientV1';
import { CommentsClientFixtureV1 } from './CommentsClientFixtureV1';

suite('CommentsDirectClientV1', ()=> {
    let controller: CommentsController;
    let client: CommentsDirectClientV1;
    let fixture: CommentsClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new CommentsMemoryPersistence();
        controller = new CommentsController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-comments', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-comments', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new CommentsDirectClientV1();
        client.setReferences(references);

        fixture = new CommentsClientFixtureV1(client);

        client.open(null, done);
        
    });
    
    suiteTeardown((done) => {
        client.close(null, done);
    });

    test('Create comments', (done) => {
        fixture.testCreateComments(done);
    });

    // test('Get comments with filters', (done) => {
    //     fixture.testGetWithFilter(done);
    // });

    test('Comments crud operations', (done) => {
        fixture.testCrudOperations(done);
    });



});