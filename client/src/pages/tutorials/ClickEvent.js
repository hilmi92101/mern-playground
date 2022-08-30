const ClickEvent = () => {

    const title = `Click Event`;

    const handleClick = () => {
        console.log('Hiiiiiiii')
    }

    return <div>
        <h1>{ title }</h1>
        <button onClick={handleClick}>CLick Me</button>
    </div>
}

export default ClickEvent
