import React from 'react';
import "./../../assets/css/accordion.css";

export default function BodyPlacements() {

    return (
        <>


            <div className="placement-head">
                Placements

            </div>
            <div className="accordion-head">
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Languages(C++/Java/Python) &  DSA(Data Structure and Algorithms)
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="list-group">
                                    <a href="http://chenweixiang.github.io/docs/The_C++_Programming_Language_4th_Edition_Bjarne_Stroustrup.pdf" className="list-group-item list-group-item-action active" aria-current="true" target="_blank">
                                        C++ Book by Bjarne Stroustrup
                                    </a>
                                    <a href="https://ia801305.us.archive.org/32/items/HeadFirstJava2ndEdition_201511/Head%20First%20Java%202nd%20Edition.pdf" className="list-group-item list-group-item-action" target='_blank'>JAVA Book (Head First O'REILLY)</a>
                                    <a href="http://bedford-computing.co.uk/learning/wp-content/uploads/2015/10/Head-First-Python.pdf" className="list-group-item list-group-item-action" target='_blank'>Python Book (Head First O'REILLY)</a>
                                    <a href='https://www.youtube.com/@CodeHelp' className="list-group-item list-group-item-action" target='_blank'>DSA Lectures</a>
                                    <a href="https://www.geeksforgeeks.org/dsa-sheet-by-love-babbar/" className="list-group-item list-group-item-action" target='_blank'>DSA Sheet by LOVE BABBAR</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Aptitude and Reasoning
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="list-group">
                                    <a href="https://www.campusrecruitment.co.in/CampusRecruitmentBook.pdf" className="list-group-item list-group-item-action active" aria-current="true" target='_blank'>
                                        Aptitude Concepts
                                    </a>
                                    <a href="https://www.indiabix.com/" className="list-group-item list-group-item-action" target="_blank">Practice Aptitude</a>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                CS Fundamentals(OS,DBMS,CN,OOPs)
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="list-group">
                                    <a href="https://www.youtube.com/playlist?list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG" className="list-group-item list-group-item-action active" aria-current="true" target='_blank'>
                                     OS Lectures and notes
                                    </a>
                                    <a href="https://www.youtube.com/playlist?list=PLDzeHZWIZsTpukecmA2p5rhHM14bl2dHU" className="list-group-item list-group-item-action" target='_blank'>DBMS Lectures and notes</a>
                                    <a href="https://www.youtube.com/watch?v=i_5pvt7ag7E" className="list-group-item list-group-item-action" target='_blank'>OOPS Lectures and notes</a>
                                    <a href="https://www.youtube.com/playlist?list=PLIFyRwBY_4bRLmKfP1KnZA6rZbRHtxmXi" className="list-group-item list-group-item-action" target="_blank">CN Lectures and notes</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}