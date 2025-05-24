const PlantCareMistakes = () => {
    const mistakes = [
        {
            title: "Overwatering",
            desc: "One of the most common mistakes. Too much water can rot the roots and kill your plant.",
        },
        {
            title: "Too Much Sunlight",
            desc: "Some indoor plants can't tolerate direct sunlight. Always know your plant's needs.",
        },
        {
            title: "Using the Wrong Soil",
            desc: "Using regular garden soil may suffocate roots. Use well-draining soil as required.",
        },
        {
            title: "Small Pots for Big Roots",
            desc: "When plants outgrow their pots, roots get tangled. Repot regularly!",
        },
        {
            title: "Ignoring Humidity",
            desc: "Many tropical plants need humidity. Dry air can cause leaf drop and stress.",
        },
        {
            title: "Skipping Fertilization",
            desc: "Plants need nutrients to thrive. Without occasional feeding, growth may slow down or stop.",
        }
    ];


    return (
        <div className="bg-green-50 py-10 px-4 mt-10 rounded-md shadow-sm max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-green-800 mb-6">
                Top Plant Care Mistakes
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mistakes.map((item, index) => (
                    <div key={index} className="bg-white border rounded-lg p-5 shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-red-600 mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlantCareMistakes;