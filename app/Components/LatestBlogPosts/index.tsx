import Link from 'next/link';
import BlogPostsCard from './BlogPostsCard';

const LatestBlogPosts = () => {
  return (
    <div className="w-full my-5 py-10 px-5 bg-Cream ">
      <div className="flex justify-between px-5 py-5">
        <div className="">
          <h3 className="text-3xl font-bold text-dark_Lapis">
            Latest Blog Posts
          </h3>
          <p className="pt-2 pb-5 text-dark_Lapis/75">
            Stay updated with our latest news and articles
          </p>
        </div>
        <Link href={'/'} className="text-Lapis hover:text-Gold ">
          View All Posts
        </Link>
      </div>
      <div className="flex  px-3">
        <BlogPostsCard
          title="title"
          excerpt="excerpt"
          imageUrl="/test.png"
          postUrl="/blog/post-1"
          writtenBy="Author Name"
          publishedDate="June 10, 2024"
        />
      </div>
    </div>
  );
};

export default LatestBlogPosts;
