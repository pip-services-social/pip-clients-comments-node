import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';

import { CommentV1 } from './CommentV1';

export interface ICommentsClientV1 {
    getComments(correlationId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<CommentV1>) => void): void;

    getCommentById(correlationId: string, commentId: string,
        callback: (err: any, comment: CommentV1) => void): void;

    createComment(correlationId: string, comment: CommentV1,
        callback: (err: any, comment: CommentV1) => void): void;

    updateComment(correlationId: string, comment: CommentV1,
        callback: (err: any, comment: CommentV1) => void): void;

    deleteCommentById(correlationId: string, commentId: string,
        callback: (err: any, comment: CommentV1) => void): void;     
}