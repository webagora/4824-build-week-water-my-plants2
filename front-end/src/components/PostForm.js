
const PostForm = (props) => {
    return (
        <div>
            <form onSubmit={props.submit}>
                <input
                    type="text"
                    name="title"
                    value={props.posts.title}
                    placeholder="Enter a title ya chump!"
                    onChange={props.change}
                />
                <input
                    type="text"
                    name="content"
                    value={props.posts.content}
                    placeholder="Enter some content ya chump!"
                    onChange={props.change}
                />
                <input type="submit" value="Submit your post!" />
            </form>
            {props.posts.map((post, idx) => (
                <div key={idx}>
                    <p>{post.title}</p>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    
    )
}

export default PostForm;
