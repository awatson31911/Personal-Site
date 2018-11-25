import React from 'react';

export default SkillsCard = (props) => {
  return (
    <div className="row">
      <div className="col-1-of-3">
        List of Skills
      </div>

      <div className="col-2-of-3"> Skill Card
        <div className="row">
            <div className="col-1-of-2">
              Logo
            </div>
            <div className="col-1-of-2">
              Skill Description
            </div>
          </div>
      </div>
    </div>
  )
}