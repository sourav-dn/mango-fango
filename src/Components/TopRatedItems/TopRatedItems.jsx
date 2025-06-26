

const TopRatedItems = () => {
    return (
        <section id="top-rated" className="my-10 max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Top Rated Items</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="border p-4 rounded-lg">
                    <img src="https://i.ibb.co/PzJPf8pn/m9.png" alt="Top Rated Item" className="w-full h-40 object-cover rounded-md" />
                    <h3 className="text-lg font-semibold mt-2">Item 1</h3>
                    <p className="text-gray-500">$25.00</p>
                </div>
                <div className="border p-4 rounded-lg">
                    <img src="https://i.ibb.co/tMLBpHnF/m8.png" alt="Top Rated Item" className="w-full h-40 object-cover rounded-md" />
                    <h3 className="text-lg font-semibold mt-2">Item 2</h3>
                    <p className="text-gray-500">$30.00</p>
                </div>
                <div className="border p-4 rounded-lg">
                    <img src="https://i.ibb.co/xt4fkvFc/mango-8283268-1280-2024-05-c315c45ce335f21a607af326eb04e6fd.jpg" alt="Top Rated Item" className="w-full h-40 object-cover rounded-md" />
                    <h3 className="text-lg font-semibold mt-2">Item 3</h3>
                    <p className="text-gray-500">$45.00</p>
                </div>
                <div className="border p-4 rounded-lg">
                    <img src="https://i.ibb.co/KxSY2QF3/mango4.jpg" alt="Top Rated Item" className="w-full h-40 object-cover rounded-md" />
                    <h3 className="text-lg font-semibold mt-2">Item 4</h3>
                    <p className="text-gray-500">$50.00</p>
                </div>
            </div>
        </section>
    );
};

export default TopRatedItems;