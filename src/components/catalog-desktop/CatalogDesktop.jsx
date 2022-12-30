import React, { useState } from 'react'
import c from "./CatalogDesktop.module.css"
import data from "../../dummy-files/catalog.dummy.json"
import { FiChevronRight } from "react-icons/fi"

const Catalog = () => {
  const [catalogRightData, setCatalogRightData] = useState(null || data[0])
  console.log(catalogRightData);

  return (
    <div className={c.catalog__section}>
      <div className="container">
        <div className={c.catalog__inner}>
          <div className={c.catalog__left}>
            <div className={c.catalog__nav}>
              <ul className={c.catalog__list}>
                {data.map((item, index) =>
                  <li key={index} className={c.catalog__item} onMouseOver={() => setCatalogRightData(item)}>
                    <div className={c.catalog__active}>
                      <img src={item.icon} alt="loading..." />
                      <span className={c.item__type}>{item.type}</span>
                    </div>
                    <FiChevronRight />
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className={c.catalog__right}>
            <div className={c.right__title}>{catalogRightData.type}</div>
            <div className={c.right__wrapper}>
              {catalogRightData?.inner?.map(({ product, list }, index) =>
                <div key={index} className={c.right__item}>
                  <div className={c.right__product__type}>{product}</div>
                  <ul className={c.right__list}>
                    {list.map((text, index) =>
                      <li key={index} className={c.right__inner__text}>{text}</li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Catalog