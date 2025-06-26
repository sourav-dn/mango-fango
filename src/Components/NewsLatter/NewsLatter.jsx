import React from 'react';

const NewsLatter = () => {
    return (
        <div className="flex justify-center items-center">
            <section id="newsletter" className="my-10">
                <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
                <p className="mb-4">Stay updated with the latest news, offers, and promotions!</p>
                <div className="flex gap-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="p-3 w-64 border rounded-md"
                    />
                    <button className="btn bg-green-600 text-white p-3 rounded-md">Subscribe</button>
                </div>
            </section>
        </div>
    );
};

export default NewsLatter;