import React from "react";

const JscriptKullanim = () => {
  const isLogin = false;
  const name = "Halide";
  const surname = "Binici";

  console.log("react calisiyorum");
  

  return (
    <>
      { isLogin ? (
        <>
          <div>
            Hoşgeldiniz {name} {surname}
          </div>

          <ul>
            <li>Profil</li>
            <li>Rezerv</li>
            <li>Contact</li>
          </ul>
        </>
      ) : (
        <div>tekrar giriş yapın</div>
      )} 

    </>
  );
};

export default JscriptKullanim;
