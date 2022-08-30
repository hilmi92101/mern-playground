const InlineStyle = () => {
    
    const title = `Inline Style`;
    
    const link = `https://www.google.com/`;
    const color = `blue`;

    return (
        <div
            style={{
                padding: "10px 16px",
            }}
        >
            <h1>{ title }</h1>
            <a href={link}
                style={{
                    color: color,
                    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                    borderRadius: "5px",
                }}
            >
                {link}
            </a>

        </div>
        
    )
}

export default InlineStyle
