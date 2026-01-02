function handleSubmit(event) {
    event.preventDefault();
    
    console.log("form submitted");
}

export default function Form () {
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Enter your name" />
            <button type="submit">Submit</button>
        </form>
    )
}