import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableHttpClient } from 'pip-services3-rpc-node';
import { ICommentsClientV1 } from './ICommentsClientV1';
import { CommentV1 } from './CommentV1';
export declare class CommentsHttpClientV1 extends CommandableHttpClient implements ICommentsClientV1 {
    constructor();
    getComments(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<CommentV1>) => void): void;
    getCommentById(correlationId: string, commentId: string, callback: (err: any, comment: CommentV1) => void): void;
    createComment(correlationId: string, comment: CommentV1, callback: (err: any, comment: CommentV1) => void): void;
    updateComment(correlationId: string, comment: CommentV1, callback: (err: any, comment: CommentV1) => void): void;
    deleteCommentById(correlationId: string, commentId: string, callback: (err: any, comment: CommentV1) => void): void;
    addMemeToComment(correlationId: string, id: string, creator_id: string, meme_type: string, callback: (err: any, review: CommentV1) => void): void;
    removeMemeFromComment(correlationId: string, id: string, creator_id: string, meme_type: string, callback: (err: any, review: CommentV1) => void): void;
    updateCommentState(correlationId: string, id: string, state: String, callback: (err: any, review: CommentV1) => void): void;
}
