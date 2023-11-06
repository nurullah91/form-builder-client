
const CreateForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const banner = form.firstQuestion.value;

        console.log(banner);
    }


    return (
        <div className="createPage min-h-screen">
            <div className="w-11/12 lg:w-9/12 mx-auto">
                <form onSubmit={handleSubmit}>
                    <div className="pt-12 flex justify-between items-center pb-3 px-6 border-b-2 mb-6">
                        <input
                            type="text"
                            className="bg-purple-200 px-3 py-2 rounded" defaultValue="Name of Form" />
                        <input
                            type="submit"
                            value="Save"
                            className="bg-purple-800 font-bold text-white px-3 py-1 rounded"
                        />

                    </div>
                    <div>
                        <label className="font-semibold block">Banner image</label>
                        <input
                            type="file"
                            name="banner"
                        />

                        <div className="border my-4 rounded-md px-3 py-5">
                            <h4 className="text-2xl font-semibold text-slate-600 border-b-2 pb-2">Category 1</h4>
                            <input
                                type="text"
                                placeholder="Your question"
                                name="firstQuestion"
                                className=" my-2 px-2 py-1 rounded w-full" />
                        </div>
                    </div>

                </form>

            </div>

        </div>
    );
};

export default CreateForm;