import React from 'react';

const Blog = () => {
    return (
        <section id="blog" className="my-10 max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Latest Blog Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="border p-4 rounded-lg">
                    <h3 className="text-lg font-semibold">Blog Post 1</h3>
                    <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                    <button className="link text-blue-500 mt-2">Read More</button>
                </div>
                <div className="border p-4 rounded-lg">
                    <h3 className="text-lg font-semibold">Blog Post 2</h3>
                    <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                    <button className="link text-blue-500 mt-2">Read More</button>
                </div>
                <div className="border p-4 rounded-lg">
                    <h3 className="text-lg font-semibold">Blog Post 3</h3>
                    <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                    <button className="link text-blue-500 mt-2">Read More</button>
                </div>
            </div>
        </section>
    );
};

export default Blog;