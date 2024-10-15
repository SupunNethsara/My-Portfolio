import React from 'react'
import "./Skills.css"
export const Skills = () => {
  return (
    <div>
      <div className='skills-bar'>
            <div className='bar'>
           

              <div className="candidatos">
                <div className="parcial">
                  <div className="info">
                    <div className="nome">Html</div>
                    <div className="percentag-num">99%</div>
                  </div>
                  <div className="presentagebar">
                    <div className="presentagem" style={{ width: '99%' }}></div>
                  </div>
                </div>
              </div>
              <div className="candidatos">
                <div className="parcial">
                  <div className="info">
                    <div className="nome">Css</div>
                    <div className="percentag-num">90%</div>
                  </div>
                  <div className="presentagebar">
                    <div className="presentagem" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
              <div className="candidatos">
                <div className="parcial">
                  <div className="info">
                    <div className="nome">Bootstrap </div>
                    <div className="percentag-num">85%</div>
                  </div>
                  <div className="presentagebar">
                    <div className="presentagem" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
              <div className="candidatos">
                <div className="parcial">
                  <div className="info">
                    <div className="nome">React Vite</div>
                    <div className="percentag-num">70%</div>
                  </div>
                  <div className="presentagebar">
                    <div className="presentagem" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
              <div className="candidatos">
                <div className="parcial">
                  <div className="info">
                    <div className="nome">Angular</div>
                    <div className="percentag-num">65%</div>
                  </div>
                  <div className="presentagebar">
                    <div className="presentagem" style={{ width: '65%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            /</div>
    </div>
  )
}
