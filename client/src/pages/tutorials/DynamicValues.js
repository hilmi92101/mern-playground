const DynamicValues = () => {

    const title = `Dynamic Values`;
    const link = `https://www.google.com/`;

    return <div>
        <h1>{ title }</h1>

        <p>{ 10 }</p>
        <p>{ "Hello world" }</p>
        <p>{ Math.random() * 9 }</p>
        
        <a href={link}>{link}</a>
    </div>
}

export default DynamicValues
