import React from "react";
import "./NavInshorts.css";
import HamBurgureDrawer from "./HamBurgureDrawer";
const NavBarApp = ({ setCategory }) => {
  return (
    <div className="nav">
      <div className="icon">
        <HamBurgureDrawer setCategory={setCategory} />
      </div>
      <img
        style={{ cursor: "pointer" }}
        src="data:image/jpeg;base64,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oXh2XJK6j0KH7MpPo8Psgqe9yDEeen9If0q69G6J1PR08D7Z44o2OsbjM1gBseUbl9X7R1cFREwRPDiCdj3LJTtc0m4XPOsDR/wCukhAtG7x4vNuJsOw3b2LI1UfDFN/N/p5FbuszQ92JwM2OUTxOOUuJALHe+aSOppHUedRTQbVxW0WIQ1MphyM2mbK8l3jRPaLDKOVwW6LF4Z8OcJXgPyuFjuTawPioGItfoNFUCsLQTWMzDaU07qZ0hMjn5hIGjxmtFrZT+6vz7kGI89P6Q/pT3IcR56f0h/StlVWYZUs7OWRpF7/ADW26FQayRpuArL0F08biskrG05i2bWuuXh97uta2UWVSa2aLY4tPzSZJB9ZgzesOVkartCqrDZZn1BjtJG0NyOLt4dffcBfPWfoJUYjURT0+zBbGWPzuLeDyW23G/viuJR1FHS4k7snARltr30vodyeaueHuj13uqv1dUO3xSlYRcCQPPVGC/8A9Qrm1uUO1wmYgXMZjkHY4Nce5zj2LRatdX9Th9W6oqDERsnNZkcXHM5zd+8C24HvVh41QioppoD/AOWORnVmYQD61TiuIRuxCKWMgtZbUHvJKlFGezIO5XJxXQ2puh2WFRvtYyvleftbMeqMd6roaocR54PSH9KuzR3D/BaSCnNrxxMaSOBcGjMe+62e0OIQTU7Y4Xh3xa2N9AD91GnjcHXIVd4hrOloK6opZ4RNGyV2RzTkka0+M0HcQ+wIA4HpKh+sTToYpsmMhMccZcfGIc5ziAL7twAA9almsDVpU1VXJV0743bTKTG4ljgQxrdx3h17X324qHwarsUc7KadrB+86WK3/VxPqWqg/ZQDJw5oeBrd1rG2uhI16BQk7XVutlqNCaN02I0sbfjo3H5rHB7z2BpK6gChOr/QJmGXmkeJKhwsXAWYxvEtbfeSeVx5uTlmy+fx+vjq6gdls0Wvz14d3fxWinjLW68UREXCV6IiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiL1eIiL1F4iIvUXiJdF6vERLoiIiIi9XiJdF6i8REREREXq8RERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERf//Z"
        alt="logo"
        height="80%"
      />
    </div>
  );
};

export default NavBarApp;
