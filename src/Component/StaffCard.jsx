import React from "react";

const StaffCard = (props) => {
    const Styles = {
        cardStyles: {
          width: "300px",
          height: "450px",
          border: "1px solid black",
          padding: "20px",
          
        },
        cardImg: {
          width: "200px",
          height: "200px",
          border: "5px solid blue",
          borderRadius: "50%",
          justifyContent: "center",
          alignItems: "center",
        }
      }
  return (
    <div style={Styles.cardStyles}>
      <img style={Styles.cardImg}
        src="https://img.freepik.com/free-photo/close-up-shot-pretty-woman-with-perfect-teeth-dark-clean-skin-having-rest-indoors-smiling-happily-after-received-good-positive-news_273609-1248.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1702425600&semt=sph"
        alt="owner's picture"
      />
      <h4>Alicia Parker</h4>
      <h4>Project Manager</h4>
      <h4>ID NO: <span>24167</span></h4>
      <h4>BLOOD: <span>B+</span></h4>
      <h4>D.O.B: <span>28 feb 1996</span></h4>
      <h4>PHONE: <span>+1452687633</span></h4>
      <h4>E-MAIL: v<span>aliciaparker@gmail.com</span></h4>
    </div>
  );
};

export default StaffCard;
