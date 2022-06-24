import { useEffect, useState } from "react"

export const ImageUpload = (props) => {
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
        props.handleChange(e)
    }

    return (
        <div className="mb-3">
            <input name="image_user" type='file' onChange={onSelectFile} accept="image/*"/>
            <br />
            <br />
            {selectedFile &&  <img src={preview} style={{width:170,height:170}}/> }
        </div>
    )
}