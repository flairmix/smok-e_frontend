import React from "react";
import MyButton from "./button/MyButton";

const PostItem = (props) => {
    return (
        <div className='post'>
            <div className='post_content'>
                <strong> {props.number}. {props.post.title} </strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className='post__btns'>
                <MyButton onClick={() => props.remove(props.post)}> удалить </MyButton>
            </div>
        </div>
    )

}

export default PostItem;