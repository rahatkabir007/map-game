import React, { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { RootState } from '../../../app/store'
import { ApiStatus } from '../../../interfaces/models'
import { SvgPaths } from '../../../utils/SvgPaths'
import { ToastMessage } from '../../../utils/ToastMessage'
import EditModal from './Modals/EditModal'
import ModalLoader from '../../helpers/ModalLoader/ModalLoader'
import RemoveModal from './Modals/RemoveModal'
import SvgIconRenderer from '../../helpers/SvgIconRenderer'
import { getPostsAction } from './PostSlice'


interface Props {
}

const Homepage: React.FC<Props> = (props) => {
    const [showEdit, setShowEdit] = useState(false);
    const [showRemove, setShowRemove] = useState(0)

    const { posts, postsStatus } = useAppSelector((state: RootState) => state.post)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getPostsAction())
    }, [dispatch])


    const handleUpdate = (id: number) => {
        // setShowEdit(true)
    }

    const handleRemove = (id: number) => {
        setShowRemove(id)
    }
    return (
        <>
            {
                showEdit && <EditModal
                    handleUpdate={handleUpdate}
                    setShowEdit={setShowEdit}
                />
            }
            {
                showRemove && <RemoveModal
                    setShowRemove={setShowRemove}
                    showRemove={showRemove}
                />
            }
            <div className='container-x'>
                <div className='my-6 flex flex-col justify-center items-center'>
                    <div>
                        <p className='text-xl'> Right Now We Have <span className='text-2xl text-orange-600 mx-2'>{posts.length}</span> Posts</p>
                    </div>
                    <div className='my-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 p-3'>
                        {
                            postsStatus === ApiStatus.ideal &&

                            posts.map((data, ind) => {
                                return (
                                    <div key={data.id} className='flex justify-between items-center bg-slate-200 py-3 px-6 rounded-lg gap-20'>
                                        <div>
                                            <p className='text-lg capitalize'><span className='font-semibold text-orange-600'>TITLE</span>: {data.title}</p>
                                            <p className='text-lg capitalize'><span className='font-semibold text-orange-600 capitalize'>BODY</span>: {data.body}</p>
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <div

                                                onClick={() => { handleUpdate(data.id) }}
                                                className='rounded bg-[#1A1A40] p-1 inline-block cursor-pointer'>
                                                <SvgIconRenderer
                                                    width="24px"
                                                    height="24px"
                                                    viewBox="0 0 24 24"
                                                    path={SvgPaths.edit}
                                                    pathFill={"#fff"}
                                                />
                                            </div>
                                            <div
                                                onClick={() => { handleRemove(data.id) }}
                                                className='rounded bg-[#A13333] p-1 inline-block cursor-pointer'>
                                                <SvgIconRenderer
                                                    width="24px"
                                                    height="24px"
                                                    viewBox="0 0 24 24"
                                                    path={SvgPaths.delete}
                                                    pathFill={"#fff"}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })

                        }

                    </div>
                </div>
            </div>
            {postsStatus === ApiStatus.loading && <ModalLoader />}
            {postsStatus === ApiStatus.error && ToastMessage.notifyError("Server Error")}
        </>
    )
}

export default Homepage