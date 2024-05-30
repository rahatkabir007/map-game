import React from 'react'
import { SvgPaths } from '../../../../utils/SvgPaths'
import SvgIconRenderer from '../../../helpers/SvgIconRenderer'
import EditForm from '../EditForm'


interface Props {
    setShowEdit: any,
    handleUpdate: Function
}

const EditModal: React.FC<Props> = ({
    setShowEdit,
    handleUpdate,
}) => {


    return (
        <div
            className="fixed z-50 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
                <div className="fixed inset-0 transition-opacity">
                    <div onClick={() => setShowEdit(false)} className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <div className="rounded-lg py-8 px-4 shadow-lg bg-white z-10 w-[50%]" >
                    <div className="flex flex-col">
                        <div className='flex justify-end px-10'>
                            <div
                                onClick={() => setShowEdit(false)}
                                className='rounded bg-[#A13333] p-1 cursor-pointer'>
                                <SvgIconRenderer
                                    width="24px"
                                    height="24px"
                                    viewBox="0 0 24 24"
                                    path={SvgPaths.remove}
                                    pathFill={"#fff"}
                                />
                            </div>
                        </div>
                        <EditForm
                            handleUpdate={handleUpdate}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditModal