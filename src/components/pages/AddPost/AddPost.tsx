import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { RootState } from '../../../app/store';
import { ApiStatus, IPost } from '../../../interfaces/models';
import { SvgPaths } from '../../../utils/SvgPaths';
import { ToastMessage } from '../../../utils/ToastMessage';
import SvgIconRenderer from '../../helpers/SvgIconRenderer';
import { createPostAction } from '../Homepage/PostSlice';
import AddForm from './AddForm';
interface Props {
}

const AddPost: React.FC<Props> = (props) => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const { createPostFormStatus } = useAppSelector((state: RootState) => state.post)
    const dispatch = useAppDispatch()

    const handleAdd = (e: React.FormEvent) => {
        const data: IPost = {
            id: Math.floor(Math.random() * 1000),
            userId: Math.floor(Math.random() * 1000),
            title: title,
            body: body

        }
        dispatch(createPostAction(data))
        ToastMessage.notifySuccess("Post Added")
        e.preventDefault()
    }

    useEffect(() => {
        if (createPostFormStatus === ApiStatus.success) {
            setTitle("");
            setBody("");
        }
    }, [createPostFormStatus])

    return (
        <div className='container-x'>
            <div className='my-8'>
                <div className="flex mb-3">
                    <div className='inline-block p-3 bg-orange-600 text-white font-bold rounded-md cursor-pointer'>
                        <div className='flex gap-1 items-center'>
                            <div>
                                <SvgIconRenderer
                                    width="24px"
                                    height="24px"
                                    viewBox="0 0 24 24"
                                    path={SvgPaths.leftarrow}
                                    pathFill={"#fff"}
                                />
                            </div>
                            <div>
                                <Link to="/">View All Posts</Link>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <AddForm
                        handleAdd={handleAdd}
                        title={title}
                        setTitle={setTitle}
                        body={body}
                        setBody={setBody}
                    />
                </div>
            </div>
        </div>
    )
}

export default AddPost