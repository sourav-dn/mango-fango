import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, message });
    };
    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-center">Contact Us</h1>
            <form onSubmit={handleSubmit} className="mt-6 max-w-md mx-auto">
                <div className="mb-4">
                    <label className="block text-lg font-semibold">Name</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-md"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-lg font-semibold">Email</label>
                    <input
                        type="email"
                        className="w-full px-4 py-2 border rounded-md"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-lg font-semibold">Message</label>
                    <textarea
                        className="w-full px-4 py-2 border rounded-md"
                        rows="4"
                        placeholder="Your Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-md">
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;