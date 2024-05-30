import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { RootState } from '../../../../app/store'
import { ApiStatus } from '../../../../interfaces/models'
import { ToastMessage } from '../../../../utils/ToastMessage'
import { deletePostAction } from '../PostSlice'

interface Props {
    setShowRemove: any,
    showRemove: number
}


const RemoveModal: React.FC<Props> = ({
    setShowRemove,
    showRemove
}) => {

    const { deletePostStatus } = useAppSelector((state: RootState) => state.post)
    const dispatch = useAppDispatch()


    useEffect(() => {
        if (deletePostStatus === ApiStatus.success) {
            setShowRemove(0);
            ToastMessage.notifySuccess("Post Deleted Successfully")
        }
        else {
            setShowRemove(showRemove)
        }
    }, [deletePostStatus])

    return (
        <div className="fixed z-50 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
                <div className="fixed inset-0 transition-opacity">
                    <div onClick={() => {
                        setShowRemove(false)
                    }} className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <div className="rounded-lg py-8 px-24 shadow-lg bg-white z-10" >
                    <div className="flex flex-col gap-y-10 items-center justify-center">
                        <div>
                            <p className='text-xl'> Are You Sure You Want To Delete This Post?</p>
                        </div>
                        <div className='flex justify-center gap-8'>
                            <div
                                onClick={() => {
                                    setShowRemove(false)
                                }}
                                className='px-3 py-2 bg-[#1A1A40] text-white rounded cursor-pointer'>
                                Cancel
                            </div>
                            <div
                                onClick={() => { dispatch(deletePostAction(showRemove)) }}
                                className='px-3 py-2 bg-[#A13333] text-white rounded cursor-pointer'>
                                Delete
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default RemoveModal