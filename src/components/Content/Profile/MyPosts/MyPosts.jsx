import s from './MyPosts.module.css'

const Posts = (props) => {
    return (
        <div className="PostsMy">
            <div className={s.like}>
                <span>{props.comment}</span>
            </div>
            <img src={props.img} alt="like" />
        </div>
    );
}

export default Posts;
