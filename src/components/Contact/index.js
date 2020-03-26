import React from "react";

function Contact() {
    return (
<div class="container">
            <h2>Contact</h2>
            <div class="row wrapper">
                <div class="col-md-12 col-lg-9 mt-2 mb-2">
                    <form>
                        <div class="form-group">
                            <label for="exampleInputName1">Name</label>
                            <input type="name" class="form-control" id="exampleInputName1" aria-describedby="nameHelp">

                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email</label>
                            <input type="email" class="form-control" id="exampleInputEmail1">
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Message</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="9"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
);
        };

        export default Contact;