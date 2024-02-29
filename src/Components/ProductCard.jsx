// eslint-disable-next-line no-unused-vars
import React from "react";
import { Col } from "react-bootstrap";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoStarSharp } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
const ProductCard = ({ data }) => {
    // eslint-disable-next-line react/prop-types
    const { id, icon, offer, img, title, subtitle, titleparagraph, subtitleparagraph, rating, ratingcontent, star } = data;

    return (
        <Col key={id} className="border-0 card shadow-0 rounded-3 mt-4">
            <div className="card-body">
                <div className="row">
                    <div className="mask" style={{ display: icon && offer ? "block" : "none" }}>
                        <div className={`d-flex justify-content-start align-items-start h-100 ${offer === "Best Choice" ? "" : ""}`}>
                            <h5><span className="badge text-white fw-normal">{icon} {offer}</span></h5>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-3 col-xl-3 mb-lg-0">
                        <div className="rounded-circle shadow-1-strong circule">
                            <p className="text-muted mb-0 small number mt-1">{id}</p>
                        </div>
                        <div className="bg-image hover-zoom ripple rounded ripple-surface zoom-on-hover">
                            <img src={img} alt={title} className="w-100" />
                            <p className="text-muted text-center mt-3 ">Bilder 1</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6">
                        <p className="text-muted mb-4 mb-md-0">
                            <span className="fs-6 fw-bold">{title}</span>{titleparagraph}
                        </p>
                        <div className="">
                            <p className="fw-bold mt-3">{subtitle}</p>
                            <p className="text-muted">{subtitleparagraph}</p>
                        </div>
                        <div className="text-primary">
                            <p>Show More <MdKeyboardArrowDown className="" /></p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 col-xl-3">
                        <div className="d-flex justify-content-center flex-row mb-5 Exceptionalbox">
                            <div className="">
                                <p className="fs-3 fw-semibold text-center text-primary">{rating}</p>
                                <p className="text-primary">{ratingcontent}</p>
                                <div className="d-flex star">
                                    <IoStarSharp />
                                    <IoStarSharp />
                                    <IoStarSharp />
                                    <IoStarSharp />
                                    {star}
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-column mt-4 ">
                            <button className="btn btn-primary cardbutton" type="button">View</button>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default ProductCard;
