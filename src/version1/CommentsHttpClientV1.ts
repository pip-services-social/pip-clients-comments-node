import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableHttpClient } from 'pip-services3-rpc-node';
import { ICommentsClientV1 } from './ICommentsClientV1';
import { CommentV1 } from './CommentV1';

export class CommentsHttpClientV1 extends CommandableHttpClient implements ICommentsClientV1 {

    public constructor() {
        super('v1/comments');
    }
    

    public getComments(correlationId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<CommentV1>) => void): void {
        this.callCommand(
            'get_comments',
            correlationId,
            {
                filter: filter,
                 paging: paging 
                },
            callback
        );
    }

    public getCommentById(correlationId: string, commentId: string,
        callback: (err: any, comment: CommentV1) => void): void {
        this.callCommand(
            'get_comment_by_id',
            correlationId,
            {
                comment_id: commentId
            },
            callback
        );
    }

    public createComment(correlationId: string, comment: CommentV1,
        callback: (err: any, comment: CommentV1) => void): void {
        let timing = this.instrument(correlationId, 'comments.create_comment');
        this.callCommand(
            'create_comment',
            correlationId,
            {
                comment: comment
            },
            callback
        );
    }

    public updateComment(correlationId: string, comment: CommentV1,
        callback: (err: any, comment: CommentV1) => void): void {
        this.callCommand(
            'update_comment',
            correlationId,
            {
                comment: comment
            },
            callback
        );
    }

    public deleteCommentById(correlationId: string, commentId: string,
        callback: (err: any, comment: CommentV1) => void): void {
        let timing = this.instrument(correlationId, 'comments.delete_comment_by_id');
        this.callCommand(
            'delete_comment_by_id',
            correlationId,
            {
                comment_id: commentId
            },
            callback
        );
    }
}