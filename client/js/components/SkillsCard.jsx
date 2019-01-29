import React from 'react';

const SkillsCard = ({ skills, selectedSkill, ...props }) => {
  
  return (
    <div className="card-one-img">
      <div className="row">
        <div className="col-1-of-4">
          <ul className="list-of-things">
            {
              skills.map((skill) => {
                return (
                  <li key={skill.name} className="list-of-things__thing" alt={skill.name}>
                    {skill.name}
                  </li>
                )
              })
            }
          </ul>
        </div>

        <div className="col-3-of-4">
          <div className="row">
            <div className="col-1-of-2">
              <img className="card-one-img__photo" src={selectedSkill.logoURL} alt={`${selectedSkill.name} logo`} />
            </div>
            <div className="col-1-of-2">
              <div className="card-one-img__text">
                {selectedSkill.description}
              </div>
              <br />
              {selectedSkill.exposure}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SkillsCard;