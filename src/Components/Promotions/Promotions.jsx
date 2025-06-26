import React from 'react';

const Promotions = () => {
    return (
        <section id="promotions" className="my-10 bg-gray-100 p-6 rounded-lg max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Promotions & Offers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="border p-4 rounded-lg bg-white shadow-md">
                    <h3 className="text-lg font-semibold">Offer 1</h3>
                    <p className="text-gray-500">Get 20% off on all plants!</p>
                </div>
                <div className="border p-4 rounded-lg bg-white shadow-md">
                    <h3 className="text-lg font-semibold">Offer 2</h3>
                    <p className="text-gray-500">Buy 1 get 1 free on select items!</p>
                </div>
                <div className="border p-4 rounded-lg bg-white shadow-md">
                    <h3 className="text-lg font-semibold">Offer 3</h3>
                    <p className="text-gray-500">Free shipping on orders over $50!</p>
                </div>
            </div>
        </section>
    );
};

export default Promotions;