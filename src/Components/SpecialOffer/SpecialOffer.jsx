import React from 'react';

const SpecialOffer = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <section id="offer" className="my-10 bg-blue-600 text-white p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Special Offer</h2>
                <p className="text-lg">Get an additional 10% off on your first purchase! Use code <strong>WELCOME10</strong> at checkout.</p>
            </section>
        </div>
    );
};

export default SpecialOffer;