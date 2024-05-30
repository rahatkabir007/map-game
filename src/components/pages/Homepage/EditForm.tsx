import React from 'react'

interface Props {
    handleUpdate: Function
}

const EditForm: React.FC<Props> = ({ handleUpdate }) => {

    return (
        // <div className="py-8">
        //     <div className="max-w-xl mx-auto rounded-lg overflow-hidden shadow-lg">
        <form onSubmit={() => { handleUpdate() }} className="p-10 w-full">
            <div className="mb-4">
                <label className="block text-orange-600 text-lg font-bold mb-2" htmlFor="username">
                    Title
                </label>
                <input
                    className="appearance-none bg-gray-200 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
                    id="title"
                    type="text"
                    placeholder="Title"
                />
            </div>
            <div className="mb-4">
                <label className="block text-orange-600 text-lg font-bold mb-2" htmlFor="password">
                    Body
                </label>
                <textarea
                    rows={10}
                    style={{ resize: 'none' }}
                    className="appearance-none bg-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none  focus:border-gray-700"
                    id="body"
                    placeholder="Body"
                />
            </div>
            <div className="flex justify-center">
                <button
                    className="bg-orange-600 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                    type="button"
                >
                    Update
                </button>
            </div>
        </form>


    )
}

export default EditForm