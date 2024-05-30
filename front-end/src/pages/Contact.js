import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";

const Contact = () => {
    return(
    <>
        <Meta title="Liên hệ"></Meta>
        <BreadCrumb title="Liên hệ"></BreadCrumb>
        <div className="contact-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.214595068014!2d106.78689077822631!3d10.871276361651045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175276398969f7b%3A0x9672b7efd0893fc4!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBOw7RuZyBMw6JtIFRQLiBI4buTIENow60gTWluaA!5e0!3m2!1svi!2s!4v1717063502465!5m2!1svi!2s" width="600" height="450" className="border-0 w-100" allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="col-12 mt-5">
                        <div className="contact-wrapper-bottom d-flex justify-content-between">
                            <div className="w-50">
                                <h3 className="contact-title">Liên hệ</h3>
                                <form>
                                    <div className="">
                                        <input type="text" name="name" placeholder="Tên"
                                               className="form-control border-0"
                                               required={true}/>
                                    </div>
                                    <div className="mt-3">
                                        <input type="email" name="email" placeholder="Email"
                                               className="form-control border-0"
                                               required={true}/>
                                    </div>
                                    <div className="mt-3">
                                        <input type="tel" name="phoneNumber" placeholder="Số điện thoại"
                                               className="form-control border-0"
                                               required={true}/>
                                    </div>
                                    <div className="mt-3">
                                        <textarea name="message" placeholder="Nội dung"
                                                  className="form-control border-0"
                                                  required={true}/>
                                    </div>
                                    <button className="button btn btn-primary border-0 mt-3">Gửi</button>
                                </form>
                            </div>
                            <div>
                            <h3 className="contact-title"></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}
export default Contact;