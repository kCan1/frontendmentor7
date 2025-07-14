import React from "react";

export default function Card({
  className = "",
  ImgSrc,
  ImgAlt = "",
  Avatar,
  Body = "",
  Footer = "",
  name = "",
  imgBorderClass = "border-blue-400",
  children,
  ...restProps
}) {
  return (
    <article className={`rounded-lg shadow-xl font-primary p-8 ${className}`}>
      {/* header try grid*/}
      {/* <section className={`w-full ${className}`}>
        <div className="grid grid-cols-2 gap-4">
          <img
            src={ImgSrc}
            alt={ImgAlt}
            className={`w-10 rounded-full object-cover ${className}`}
          />
          <div className="grid grid-rows-2">
            <h1>{name}</h1>
            <h2>Verified Graduate</h2>
          </div>
        </div>
      </section> */}

      {/* flex */}
      <section className={`w-full mb-4 ${className}`}>
        <div className="flex gap-x-4">
          <img
            src={ImgSrc}
            alt={ImgAlt}
            className={`w-10 h-10 rounded-full object-cover border-blue-400 border-3 ${imgBorderClass}`}
          />
          <div className="grid grid-rows-2">
            <h1>{name}</h1>
            <h2 className="text-xs">Verified Graduate</h2>
          </div>
        </div>
      </section>

      {/* quote icon (children) */}
      {/* {children && <div className="relative bg-cover">{children}</div>} */}

      {/* body */}
      <section className="w-full text-xl font-medium ${className} mb-4">
        {Body}
      </section>

      {/* footer */}
      <section className="w-full text-sm ${className}">" {Footer} "</section>
    </article>
  );
}
