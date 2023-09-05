import React from "react";

const CardGenerator = ({data = [], cardType=''}) => {
  return(
    <div className="CardContainer">

      {data?.map((item, id) => {
        return (
          
          <div key={id}>
            {cardType ==='planets' &&

            <div key={id} className="infoContainer">
            <p> Name:{item.name} </p>
            <p>Orbital Period:{item.orbital_period}</p>
            <p>Diameter:{item.diameter}</p>
            <p>Climate:{item.climate}</p>
            <p>Gravity:{item.gravity} </p>
            </div>
            }

            {cardType ==='starships' &&
            <div key={id} className="infoContainer">
            <p> Name:{item.name} </p>
            <p>Model:{item.model}</p>
            <p>Manufacturer:{item.manufacturer}</p>
            <p>Cost in credits:{item.cost_in_credits}</p>
            <p>Consumables:{item.consumables} </p>
            </div>
            }

            {cardType==='vehicles' &&
            <div key={id} className="infoContainer">
            <p> Name:{item.name} </p>
            <p>model:{item.model}</p>
            <p>crew:{item.crew}</p>
            <p>Cargo capacity:{item.cargo_capacity}</p>
            <p>Vehicle class: {item.vehicle_class}</p>
            </div>
            }

            {cardType ==='people' && 
              <div key={id} className="infoContainer">
              <p> Name:{item.name} </p>
              <p>Height:{item.height}</p>
              <p>Mass:{item.mass}</p>
              <p>Hair Color:{item.hair_color}</p>
              <p>Gender:{item.gender} </p>
            </div>
            }

            {cardType==='species' &&
            <div key={id} className="infoContainer">
            <p> Name:{item.name} </p>
            <p>Classification:{item.classification}</p>
            <p>Designation:{item.designation}</p>
            <p>Average height:{item.average_height}</p>
            <p>Language: {item.language}</p>
            </div>
            }
          </div>
        )
      })}
    </div>
  );
};

export default CardGenerator;