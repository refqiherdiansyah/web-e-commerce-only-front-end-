import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta"
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Blog from "../images/blog-1.jpg";
import Container from "../components/Container";

const SingleBlog = () => {
    return (
        <>
            <Meta title={'Dynamic Blog Name'} />
            <BreadCrumb title="Dynamic Blog Name" />
            <Container class1="blog-wrapper home-wrapper2 py-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="single-blog-card">
                                <Link to="/blogs" className="d-flex align-items-center gap-10"> 
                                <FaArrowLeft className="fs-4" />Go Back to Blogs</Link>
                                <h3 className="title" >
                                    A Beutiful Sunday Morning Renaissance
                                </h3>
                                <img 
                                    src={Blog}
                                    className="img-fluid w-100 ny-4" 
                                    alt="blog" 
                                />
                                <p>
                                    webf iwebfibweisfbsdbfibsdbfisbdfibsdigbfidbgaipb
                                    dfgiusdbfgsdaigbdsibgkjiabdkigbgbrin vcnaiomvFEDF
                                    NGRENGAOIRGNIEAhsndgbdrngserngsbnifrgidfgdfgndfdg
                                    gredogherhgkijerasrgafngkinregbrebngoertorgkrnan
                                    gnaerngakjngkijdbkjgrgagnkfbnkjgankoirnajrangfrfn
                                    skjdgnrekjagnjgkriangkiabrgbrganrgbbgakjrib
                                </p>
                            </div>
                        </div>
                    </div>
            </Container>
        </>
    );
};

export default SingleBlog;