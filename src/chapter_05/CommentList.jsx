import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "이름1",
        comment: "안녕 1번이야",
    },
    {
        name: "이름2",
        comment: "안녕 2번이야",
    },
    {
        name: "이름3",
        comment: "안녕 3번이야",
    },
]

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;