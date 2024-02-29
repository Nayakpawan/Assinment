// eslint-disable-next-line no-unused-vars
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CiCircleCheck, CiCircleQuestion } from "react-icons/ci";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { IoStarSharp, IoStarHalf } from "react-icons/io5";
import { GiTrophyCup } from "react-icons/gi";
import img1 from '../assets/download.png';
import vector from '../assets/Vector.png';
import { IoIosStarOutline } from "react-icons/io";
import { IoDiamondOutline } from "react-icons/io5";
import ProductCard from "./ProductCard";
const Home = () => {

    const Data = [
        {
            id: "1",
            title: "WixPro 72-Inch Responsive Website Builder-",
            offer: "Best Choice",
            icon: <GiTrophyCup />,
            subtitle: "Main highlights",
            titleparagraph: "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue).",
            subtitleparagraph: "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
            img: img1,
            rating: "9.8",
            ratingcontent: "Exceptional",
            star: <IoStarSharp />
        },
        {
            id: "2",
            title: "SiteCraft 68-Inch Ultimate Web Design Studio-",
            offer: "Best Value",
            icon: <IoDiamondOutline />,
            subtitle: "Main highlights",
            titleparagraph: "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
            subtitleparagraph: "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
            img: img1,
            rating: "9.8",
            ratingcontent: "Excellent",
            star: <IoStarHalf />
        },
        {
            id: "3",
            title: "WixPro 72-Inch Responsive Website Builder-",
            subtitle: "Main highlights",
            titleparagraph: "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue).",
            subtitleparagraph: "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
            img: img1,
            rating: "9.3",
            ratingcontent: "Exceptional",
            star: <IoIosStarOutline />
        }
    ];

    return (
        <>
            <Container>
                <Row>
                    <h1 className="text-color">Best Website builders in the US</h1>
                </Row>
                <hr className="border-sm-start border-start" />
                <Row>
                    <Col xs={6}>
                        <div className="homeline">
                            <CiCircleCheck className="me-1 mb-1" /> <span className="me-3">Last Updated - February 22, 2020 </span>
                            <CiCircleQuestion className=" me-1 mb-1" /> <span className="">Advertising Disclosure</span>
                        </div>
                    </Col>
                    <Col xs={6} className="d-flex justify-content-end cursor-pointer">
                        <div className="homeline">
                            <span>Top Relevant</span>
                            <MdKeyboardArrowDown className="arrow" />
                        </div>
                    </Col>
                </Row>
                <hr className="border-sm-start border-start" />
            </Container>
            <Container>
                <Row xs="12"  className="homeline1">
                    {['Tools', 'AWS Builder', 'Start Build', 'Build Supplies', 'Tooling', 'BlueHosting'].map((item, index) => (
                        <Col key={index} className="text-center py-1 rounded-pill bg-white mx-2 ">{item}</Col>
                    ))}
                </Row>
                <Row xs="auto" className="homeline py-4">
                    {['Home', 'Hosting for all', 'Hosting', 'Hosting6', 'Hosting5'].map((item, index) => (
                        <Col key={index} className="d-flex align-items-center">
                            <span className="me-2"><MdKeyboardArrowRight /></span>{item}
                        </Col>
                    ))}
                </Row>
            </Container>
            <Container>
                <Row className="justify-content-center mt-5">
                    <div className="col-md-12 col-xl-10">
                        {
                            Data.map((data) => (
                                <ProductCard key={data.id} data={data} />

                            ))}
                    </div>
                </Row>
            </Container>
            <Container>
                <Row className="justify-content-center mb-5">
                    <div className="col-md-12 col-xl-10">
                        <div className="card border-0 shadow-0  rounded-3 mt-4">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-12 col-lg-3 col-xl-3  mb-lg-0">
                                        <div className="rounded-circle shadow-1-strong circule">
                                            <p className="text-muted mb-0 small number mt-1">4</p>
                                        </div>
                                        <div className="bg-image zoom-on-hover ripple rounded ripple-surface">
                                            <img src={img1} alt="SiteCraft" className="w-100" />
                                            <p className="text-muted text-center mt-3 ">Bilder 1</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-xl-6">
                                        <p className="text-muted mb-4 mb-md-0">
                                            <span className="fs-6 fw-bold">SiteCraft 68-Inch Ultimate Web Design Studio-</span>[What You Get]: Gain access to the SiteCraft design studio,
                                        </p>
                                        <div className="mask">
                                            <div className="d-flex justify-content-start align-items-start h-100 mt-3 ">
                                                <h6><span className="border rounded text-primary p-1">26% Off</span></h6>
                                            </div>
                                        </div>
                                        <div className="">
                                            <p className="fw-bold mt-3">Main highlights</p>
                                            <div className="highlight border rounded">
                                                <ul className="list-unstyled mb-2">
                                                    <li className="mb-2"><span className="score border rounded px-1 bg-white">9.9</span> Building Responsive</li>
                                                    <li className="mb-2"><span className="score border rounded px-1 bg-white">8.9</span> Cool</li>
                                                    <li ><span className="score border rounded px-1 bg-white">8.9</span> Docs</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="fw-bolld">
                                            <p>Why we love it</p>
                                            <ul className="list-unstyled mb-2">
                                                <li className="mb-2">
                                                    <img src={vector} className="rounded-pill border p-2 bg-info-subtle" alt="Documentation" /><span className="px-2 Outtext">Documentation</span>
                                                </li>
                                                <li className="mb-2">
                                                    <img src={vector} className="rounded-pill border p-2 bg-info-subtle" alt="Easy Use" /><span className="px-2 Outtext">Easy Use</span>
                                                </li>
                                                <li className="mb-2">
                                                    <img src={vector} className="rounded-pill border p-2 bg-info-subtle" alt="Out of Box" /><span className="px-2 Outtext">Out of box</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="text-primary">
                                            <p>Show More <MdKeyboardArrowDown className="" /></p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-xl-3">
                                        <div className="d-flex justify-content-center flex-row mb-5  Exceptionalbox">
                                            <div className="">
                                                <p className="fs-3 fw-semibold text-center text-primary">9.1</p>
                                                <p className="text-primary">Very Good</p>
                                                <div className="d-flex star">
                                                    <IoStarSharp />
                                                    <IoStarSharp />
                                                    <IoStarSharp />
                                                    <IoStarSharp />
                                                    <IoStarHalf />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column mt-4">
                                            <button className="btn btn-primary newbtn" type="button">View</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default Home;
