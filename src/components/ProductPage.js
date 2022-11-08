import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

import productImg1 from '../assets/img/j1.webp';
import productImg2 from '../assets/img/j2.webp';
import productImg3 from '../assets/img/j3.webp';

export const Product = () => {
    return (
        <section id="product">
            <Container>
                <h2>Shop All Products</h2>
                <p>Shop from all our dazzling and sparkling collections!</p>
            
                <div class="pro-container">
                    <div class="pro">
                        <img src={productImg1}></img>
                        <div class="des">
                            <span>Product 1</span>
                            <h5>Product Description</h5>
                            <div class="star">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <h4>$57</h4>
                        </div>
                        <section id="btn">
                            <a href=""><span>Shop Now</span></a>
                        </section>
                    </div>

                    <div class="pro">
                        <img src={productImg2}></img>
                        <div class="des">
                            <span>Product 2</span>
                            <h5>Product Description</h5>
                            <div class="star">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <h4>$77</h4>
                        </div>
                        <section id="btn">
                            <a href=""><span>Shop Now</span></a>
                        </section>
                    </div>

                    <div class="pro">
                        <img src={productImg3}></img>
                        <div class="des">
                            <span>Product 3</span>
                            <h5>Product Description</h5>
                            <div class="star">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <h4>$47</h4>
                        </div>
                        <section id="btn">
                            <a href=""><i><span>Shop Now</span></i></a>
                        </section>
                    </div>
                    
                    <div class="pro">
                        <img src={productImg1}></img>
                        <div class="des">
                            <span>Product 1</span>
                            <h5>Product Description</h5>
                            <div class="star">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <h4>$57</h4>
                        </div>
                        <section id="btn">
                            <a href=""><span>Shop Now</span></a>
                        </section>
                    </div>

                    <div class="pro">
                        <img src={productImg2}></img>
                        <div class="des">
                            <span>Product 2</span>
                            <h5>Product Description</h5>
                            <div class="star">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <h4>$77</h4>
                        </div>
                        <section id="btn">
                            <a href=""><span>Shop Now</span></a>
                        </section>
                    </div>

                    <div class="pro">
                        <img src={productImg3}></img>
                        <div class="des">
                            <span>Product 3</span>
                            <h5>Product Description</h5>
                            <div class="star">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <h4>$47</h4>
                        </div>
                        <section id="btn">
                            <a href=""><i><span>Shop Now</span></i></a>
                        </section>
                    </div>
                </div>
            </Container>
        </section>
    )
}