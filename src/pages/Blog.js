import React, { useState, useEffect } from 'react';
import './Blog.css';

const RSS_TO_JSON_API = "https://api.rss2json.com/v1/api.json?rss_url=";
const BLOG_RSS_URL = "https://rohiniayur.blogspot.com/feeds/posts/default?alt=rss";

// Fallback image URL
const FALLBACK_IMAGE = "https://via.placeholder.com/300x200?text=Ayurveda+Blog";

function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(`${RSS_TO_JSON_API}${encodeURIComponent(BLOG_RSS_URL)}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        if (data.status === 'ok') {
          const parsedPosts = data.items.slice(0, 5).map((item) => ({
            title: item.title,
            link: item.link,
            pubDate: item.pubDate,
            content: item.description,
            image: FALLBACK_IMAGE, // Use fallback image initially
          }));

          setPosts(parsedPosts);

          // Fetch images after setting initial posts
          fetchImages(parsedPosts);
        } else {
          throw new Error('Failed to fetch RSS feed');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        setError(error.message);
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  async function fetchImages(posts) {
    try {
      const updatedPosts = await Promise.all(posts.map(async (post) => {
        const imageUrl = await fetchRandomAyurvedicImage();
        return { ...post, image: imageUrl || FALLBACK_IMAGE };
      }));
      setPosts(updatedPosts);
    } catch (error) {
      console.error('Error fetching images:', error);
      // If there's an error, we'll keep the fallback images
    }
  }

  async function fetchRandomAyurvedicImage() {
    try {
      const response = await fetch('https://api.unsplash.com/photos/random?query=ayurveda,herbs,wellness&orientation=landscape&client_id=YOUR_UNSPLASH_ACCESS_KEY');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data.urls?.regular || FALLBACK_IMAGE;
    } catch (error) {
      console.error('Error fetching image from Unsplash:', error);
      return FALLBACK_IMAGE;
    }
  }

  if (loading) {
    return <div className="blog-loading">Loading blog posts...</div>;
  }

  if (error) {
    return <div className="blog-error">Error loading blog posts: {error}</div>;
  }

  return (
    <div className="blog">
      <h1>Rohini Ayurveda Blog</h1>
      {posts.length === 0 ? (
        <p>No blog posts found.</p>
      ) : (
        <div className="blog-posts">
          {posts.map((post, index) => (
            <div key={index} className="blog-post">
              <div className="blog-post-image" style={{backgroundImage: `url(${post.image})`}}></div>
              <div className="blog-post-content">
                <h2>{post.title}</h2>
                <p className="post-date">{new Date(post.pubDate).toLocaleDateString()}</p>
                <div className="post-excerpt" dangerouslySetInnerHTML={{ __html: post.content.substring(0, 150) + '...' }}></div>
                <a href={post.link} target="_blank" rel="noopener noreferrer" className="read-more">Read More</a>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="view-all">
        <a href="https://rohiniayur.blogspot.com/" target="_blank" rel="noopener noreferrer" className="view-all-button">
          View All Posts
        </a>
      </div>
    </div>
  );
}

export default Blog;