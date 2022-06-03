export const Subtopic = () =>{
    function clickbutton(e)
    {
        e.preventDefault()
        console.log("click123")
    }
    return(
        <>
        <button id='b1' onClick={clickbutton}>Click</button>
        <div id='d1'>

        </div>
        </>
    )
} 