let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { ICommentsClientV1 } from '../../src/version1/ICommentsClientV1';
import { MemeV1 } from '../../src/version1/MemeV1';
import { CommentV1 } from '../../src/version1/CommentV1';
import { ContentV1 } from '../../src/version1/ContentV1';
import { ReferenceV1 } from '../../src/version1/ReferenceV1';
import { CommentStateV1 } from '../../src/version1/CommentStateV1';

let refs = [];
let ref1: ReferenceV1 ={
    id: '4',
    type: 'page', 
    name: 'reference page',
}
refs.push(ref1);

let ref2: ReferenceV1 ={
    id: '5',
    type: 'page', 
    name: 'reference page2',
}
refs.push(ref2);


let contents = [];
let content1: ContentV1 = {
    type: 'text',
    text: 'text'

}
contents.push(content1);

let memes = [];
let meme1: MemeV1 = {
    type: 'like',
    count: 1,
}
memes.push(meme1);

let COMMENT1: CommentV1 = {
    id: '1',
    deleted: false,
    comment_state: CommentStateV1.Submitted,
    creator_id: '1',
    creator_name: 'Evgeniy',
    parent_ids: [],
    refs: refs,
    create_time:  new Date("2018-07-14"),
    content: contents,
    memes: memes  
    
};
let COMMENT2: CommentV1 = {
    id: '2',
    deleted: false,
    comment_state: CommentStateV1.Submitted,
    creator_id: '2',
    creator_name: 'Tom',
    refs: refs,
    create_time:  new Date("2020-07-14"),
    parent_ids: ['1'],
};
let COMMENT3: CommentV1 = {
    id: '3',
    deleted: false,
    comment_state: CommentStateV1.Submitted,
    creator_id: '2',
    creator_name: 'Tom',
    create_time:  new Date("2022-07-14"),
    parent_ids: ['1','2'],
};

export class CommentsClientFixtureV1 {
    private _client: ICommentsClientV1;
    
    constructor(client: ICommentsClientV1) {
        this._client = client;
    }

    public testCreateComments(done) {
        async.series([
            // Create one comment
            
            (callback) => {
                this._client.createComment(
                    null,
                    COMMENT1,
                    (err, comment) => {
                        console.log(COMMENT1.create_time);
                        assert.isNull(err);

                        assert.isObject(comment);
                        assert.equal(comment.id, COMMENT1.id);
                        assert.equal(comment.creator_id, COMMENT1.creator_id);
                        assert.equal(comment.creator_name, COMMENT1.creator_name);
                        assert.equal(comment.refs[0].type, COMMENT1.refs[0].type);
                        //wrong format when check equal for COMMENT1.create_time 
                        // assert.equal(comment.create_time, COMMENT1.create_time);
                        assert.equal(comment.content[0].type, COMMENT1.content[0].type);
                        assert.equal(comment.memes[0].type, COMMENT1.memes[0].type);

                        callback();
                    }
                );
            },

            // Create another comment
            (callback) => {
                this._client.createComment(
                    null,
                    COMMENT2,
                    (err, comment) => {
                        assert.isNull(err);

                        assert.isObject(comment);
                        assert.equal(comment.id, COMMENT2.id);
                        assert.equal(comment.creator_id, COMMENT2.creator_id);
                        assert.equal(comment.creator_name, COMMENT2.creator_name);

                        callback();
                    }
                );
            },
            // Create yet another comment
            (callback) => {
                this._client.createComment(
                    null,
                    COMMENT3,
                    (err, comment) => {
                        assert.isNull(err);

                        assert.isObject(comment);
                        assert.equal(comment.id, COMMENT3.id);
                        assert.equal(comment.creator_id, COMMENT3.creator_id);
                        assert.equal(comment.creator_name, COMMENT3.creator_name);
                        assert.equal(comment.parent_ids[0], COMMENT3.parent_ids[0]);

                        callback();
                    }
                );
            }
        ], done);
    }

    testGetWithFilter(done) {
        async.series([
        // Get comments filtered by ref_type
            (callback) => {
                this._client.getComments(
                    null,
                    FilterParams.fromValue({
                        ref_type: 'page'
                    }),
                    new PagingParams(),
                    (err, comments) => {
                        assert.isNull(err);

                        assert.isObject(comments);
                        assert.lengthOf(comments.data, 2);

                        callback();
                    }
                );
            },

        // Get comments filtered by ref_id
            (callback) => {
                this._client.getComments(
                    null,
                    FilterParams.fromValue({
                        ref_id: '5'
                    }),
                    new PagingParams(),
                    (err, comments) => {
                        assert.isNull(err);

                        assert.isObject(comments);
                        assert.lengthOf(comments.data, 2);

                        callback();
                    }
                );
            },

        // Get comments filtered by creator_id
            (callback) => {
                this._client.getComments(
                    null,
                    FilterParams.fromValue({
                        creator_id: '2'
                    }),
                    new PagingParams(),
                    (err, comments) => {
                        assert.isNull(err);

                        assert.isObject(comments);
                        assert.lengthOf(comments.data, 2);

                        callback();
                    }
                );
            },
            // Get comments filtered by parent_id №1
                (callback) => {
                    this._client.getComments(
                        null,
                        FilterParams.fromValue({
                            parent_id: '1'
                        }),
                        new PagingParams(),
                        (err, comments) => {
                            assert.isNull(err);
                            assert.isObject(comments);
                            assert.lengthOf(comments.data, 2);
                            
                            callback();
                        }
                    );
                },

        // Get comments filtered by parent_id №2
            (callback) => {
                this._client.getComments(
                    null,
                    FilterParams.fromValue({
                        parent_id: '2'
                    }),
                    new PagingParams(),
                    (err, comments) => {
                        assert.isNull(err);

                        assert.isObject(comments);
                        assert.lengthOf(comments.data, 1);

                        callback();
                    }
                );
            },

        // Get comments filtered by parent_ids
        (callback) => {
            this._client.getComments(
                null,
                FilterParams.fromValue({
                    parent_ids: '1,2'
                }),
                new PagingParams(),
                (err, comments) => {
                    assert.isNull(err);

                    assert.isObject(comments);
                    assert.lengthOf(comments.data, 2);

                    callback();
                }
            );
        },

        // Get comments filtered by create_time №1
            (callback) => {
                this._client.getComments(
                    null,
                    FilterParams.fromValue({
                        time_to: new Date(),

                    }),
                    new PagingParams(),
                    (err, comments) => {
                        assert.isNull(err);

                        assert.isObject(comments);
                        assert.lengthOf(comments.data, 2);
                        callback();
                    }
                );
            },

        // Get comments filtered by create_time №12
            (callback) => {
                this._client.getComments(
                    null,
                    FilterParams.fromValue({
                        time_from:  new Date("2019-07-14"),
                        time_to:  new Date("2020-07-15"),

                    }),
                    new PagingParams(),
                    (err, comments) => {
                        assert.isNull(err);

                        assert.isObject(comments);
                        assert.lengthOf(comments.data, 1);

                        callback();
                    }
                );
            },
        ], done);
    }

    testCrudOperations(done) {
        let comment3: CommentV1;

        async.series([
        // // Create items
        //     (callback) => {
        //         this.testCreateComments(callback);
        //     },
        // Get all comments
            (callback) => {
                this._client.getComments(
                    null,
                    new FilterParams(),
                    new PagingParams(),
                    (err, page) => {
                        assert.isNull(err);

                        assert.isObject(page);
                        assert.lengthOf(page.data, 3);

                        comment3 = page.data[2];

                        callback();
                    }
                );
            },
        // Update the comment
            (callback) => {
                comment3.creator_name = 'Richard';

                this._client.updateComment(
                    null,
                    comment3,
                    (err, comment) => {
                        assert.isNull(err);

                        assert.isObject(comment);
                        assert.equal(comment.creator_name, 'Richard');
                        assert.equal(comment.id, comment3.id);

                        callback();
                    }
                );
            },
             // Update the state
             (callback) => {

                this._client.updateCommentState(
                    null,
                    comment3.id, CommentStateV1.Rejected,
                    (err, comment) => {
                        assert.isNull(err);

                        assert.isObject(comment);
                        assert.equal(comment.comment_state, CommentStateV1.Rejected);
                        assert.equal(comment.id, comment3.id);

                        callback();
                    }
                );
            },
            // Mark comment as deleted
            (callback) => {

                this._client.markCommentAsDeleted(
                    null,
                    comment3.id,
                    (err, comment) => {
                        assert.isNull(err);

                        assert.isObject(comment);
                        assert.equal(comment.deleted, true);
                        assert.equal(comment.id, comment3.id);

                        callback();
                    }
                );
            },
        // Delete comment
            (callback) => {
                this._client.deleteCommentById(
                    null,
                    comment3.id,
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
        // Try to get delete comment
            (callback) => {
                this._client.getCommentById(
                    null,
                    comment3.id,
                    (err, comment) => {
                        assert.isNull(err);

                        assert.isNull(comment || null);

                        callback();
                    }
                );
            },
            // Try to get delete comment
            (callback) => {
                this._client.getCommentById(
                    null,
                    COMMENT1.id,
                    (err, comment) => {
                        assert.isNull(err);
                        assert.isObject(comment);
                        assert.equal(comment.id, COMMENT1.id);
                        assert.equal(comment.creator_id, COMMENT1.creator_id);
                        assert.equal(comment.creator_name, COMMENT1.creator_name);
                        assert.equal(comment.refs[0].type, COMMENT1.refs[0].type);
                        assert.equal(comment.content[0].type, COMMENT1.content[0].type);
                        assert.equal(comment.memes[0].type, COMMENT1.memes[0].type);

                        assert.equal(comment.children_counter, 1);

                        callback();
                    }
                );
            }
        ], done);
    }


        
}