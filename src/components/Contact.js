import React from "react";

function Contact() {
    return (
        <div class="container">
            <form class="contact form">
                <div class="form-group">
                    <label for="exampleInputName1">Name</label>
                    <input type="name" class="form-control" id="exampleInputName1" aria-describedby="nameHelp" />

                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="9"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Contact;