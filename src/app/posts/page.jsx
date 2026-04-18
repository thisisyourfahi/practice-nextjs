import PostCard from "./postcard/PostCard";

const Posts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    return (
        <div className='container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 shadow-lg p-4'>
            {
                posts.map(post => <PostCard key={post.id} post={post}></PostCard>)
            }
        </div>
    );
};

export default Posts;