import { useState } from "react";

export default function CommentsForm () {
    let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 5
    });

    let handleInputChange = (event) => {
        setFormData((currData) => {
            return { ...currData, [event.target.name]: event.target.value };
        })
    };

    let handleSubmit = (event) => {
        console.log(formData);
        event.preventDefault();
        setFormData({
            username: "",
            remarks: "",
            rating: 5
        });
    }

    return (
        <div>
            <h4>Give a comment</h4>
            <form onSubmit={handleSubmit}>
                <input placeholder="username" type="text" name="username" value={formData.username} onChange={handleInputChange} />
                <br /><br /><br /><br />
                <textarea name="remarks" value={formData.remarks } placeholder="add few remarks" onChange={handleInputChange}></textarea>
                <br /><br /><br /><br />
                <input placeholder="rating" name="rating" type="number" min={1} max={5} value={formData.rating} onChange={handleInputChange} />
                <br /><br /><br /><br />
                <button>Add Comment</button>
            </form>
        </div>
    )
}