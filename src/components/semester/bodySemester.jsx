
import React from 'react';
import "../../assets/css/accordion.css";
export default function Semester() {

  return (

    <>
      <div className="placement-head">
        Semester Materials

      </div>
      <div className="accordion-head">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                1st and 2nd Year Material
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <div className="list-group">
                  <a href="http://karadev.net/uroci/filespdf/files/head-first-c-o-reilly-david-grifffiths-dawn-griffiths.pdf" className="list-group-item list-group-item-action"  target="_blank">C Programming</a>
                  <a href="https://ia801305.us.archive.org/32/items/HeadFirstJava2ndEdition_201511/Head%20First%20Java%202nd%20Edition.pdf" className="list-group-item list-group-item-action" target="_blank">JAVA</a>
                  <a href="https://www.sbgstudy.com/documents/books/btech1styear/c/Problem%20Solving%20in%20Data%20Structures%20and%20Algorithms%20Using%20C%20First%20Edition%20by%20Hemant%20Jain.pdf" className="list-group-item list-group-item-action" target="_blank">Data Structures</a>
                  <a href="https://ia800607.us.archive.org/3/items/DigitalLogicAndComputerDesignByM.MorrisMano2ndEdition/Digital%20Logic%20And%20Computer%20Design%20By%20M.%20Morris%20Mano%20%282nd%20Edition%29.pdf" className="list-group-item list-group-item-action" target="_blank">Digital Logic Design</a>
                  <a href="https://faculty.ksu.edu.sa/sites/default/files/rosen_discrete_mathematics_and_its_applications_7th_edition.pdf" className="list-group-item list-group-item-action" target="_blank">Discrete Maths</a>
                  <a href="https://dl.ebooksworld.ir/books/Introduction.to.Algorithms.4th.Leiserson.Stein.Rivest.Cormen.MIT.Press.9780262046305.EBooksWorld.ir.pdf" className="list-group-item list-group-item-action" target="_blank">Design and Analysis of Algorithms</a>
                  <a href="https://www-2.dc.uba.ar/staff/becher/Hopcroft-Motwani-Ullman-2001.pdf" className="list-group-item list-group-item-action" target="_blank">Theory Of Computation/Formal lang. and Automata Theory</a>
                  <a href="https://www.octawian.ro/fisiere/situri/asor/build/html/_downloads/1fcab53a6d916e39c715fc20a9a9c2a8/Silberschatz_A_databases_6th_ed.pdf" className="list-group-item list-group-item-action" target="_blank">DBMS</a>
                  <a href="https://drive.uqu.edu.sa/_/mskhayat/files/MySubjects/2017SS%20Operating%20Systems/Abraham%20Silberschatz-Operating%20System%20Concepts%20(9th,2012_12).pdf" className="list-group-item list-group-item-action" target="_blank">Operating System</a>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                3rd Year Material
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <div className="list-group">
                  <a href="https://handoutset.com/wp-content/uploads/2022/05/Computer-System-Architecture-M.-Morris-Mano.pdf" className="list-group-item list-group-item-action" target='_blank'>Computer Organisation and Architecture</a>
                  <a href="https://ia902203.us.archive.org/22/items/DonaldHearnM.PaulineBakerComputerGraphicsBookFi.org/%5BDonald_Hearn%2C_M._Pauline_Baker%5D_Computer_Graphics%28BookFi.org%29.pdf" className="list-group-item list-group-item-action" target='_blank'>Computer Graphics</a>
                  <a href="#" className="list-group-item list-group-item-action" target='_blank'>3</a>
                  <a href="#" className="list-group-item list-group-item-action" target='_blank'>4</a>
                  <a href="#" className="list-group-item list-group-item-action" target='_blank'>5</a>
                  <a href="#" className="list-group-item list-group-item-action" target='_blank'>6</a>
                  <a href="#" className="list-group-item list-group-item-action" target='_blank'>7</a>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Final Year Material
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <div className="list-group">
                  <a href="#" className="list-group-item list-group-item-action">1 </a>
                  <a href="#" className="list-group-item list-group-item-action">2</a>
                  <a href="#" className="list-group-item list-group-item-action">3</a>
                  <a href="#" className="list-group-item list-group-item-action">4</a>
                  <a href="#" className="list-group-item list-group-item-action">5</a>
                  <a href="#" className="list-group-item list-group-item-action">6</a>
                  <a href="#" className="list-group-item list-group-item-action">7</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>

  )

}