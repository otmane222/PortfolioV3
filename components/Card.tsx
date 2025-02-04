// components/ImageSection.js

import React from 'react';
import styles from '../styles/card.module.css';

function Card () {
  return (
    <section className={styles.wrapper} >
      <div className={styles.container}>
        <div
          className={styles.image}
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1532793647389-1d8cf566cae6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e2bd210796f1313a943261973b470ae8&auto=format&fit=crop&w=700&q=80)',
          }}
        ></div>
        <div className={styles.overlay}></div>
        <div className={styles.content}>
        <h2 className="py-5 px-5 font-extrabold text-3xl transition-all duration-500 ease-out">

            Lorem ipsum dolor sit</h2>
          <p>Umlam capor dolores sit amet etc.</p>
          <a href="#" className={styles.button}>
            <svg className={styles.stroke} viewBox="0 0 20 20">
              <path d="M 8 5 L 14 10 L 8 15"></path>
            </svg>
          </a>
        </div>
      </div>

      <div className={styles.container}>
        <div
          className={styles.image}
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1532800961151-7a455e21b8ab?ixlib=rb-0.3.5&s=551fa1c8728c7d0affeab5aedde43373&auto=format&fit=crop&w=1575&q=80)',
          }}
        ></div>
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <h2>Lorem ipsum dolor sit</h2>
          <p>Umlam capor dolores sit amet etc.</p>
          <a href="#" className={styles.button}>
            <svg className={styles.stroke} viewBox="0 0 20 20">
              <path d="M 8 5 L 14 10 L 8 15"></path>
            </svg>
          </a>
        </div>
      </div>

      <div className={styles.container}>
        <div
          className={styles.image}
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1532898590703-1abc45eb860c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fc4ad3cf1cedd8997add60356eb63160&auto=format&fit=crop&w=1350&q=80)',
          }}
        ></div>
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <h2>Lorem ipsum dolor sit</h2>
          <p>Umlam capor dolores sit amet etc.</p>
          <a href="#" className={styles.button}>
            <svg className={styles.stroke} viewBox="0 0 20 20">
              <path d="M 8 5 L 14 10 L 8 15"></path>
            </svg>
          </a>
        </div>
      </div>

      <div className={styles.container}>
        <div
          className={styles.image}
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1532885009583-90db14e3efae?ixlib=rb-0.3.5&s=c5c7a069b95f858c1fa5a3257c1e0785&auto=format&fit=crop&w=1950&q=80)',
          }}
        ></div>
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <h2>Lorem ipsum dolor sit</h2>
          <p>Umlam capor dolores sit amet etc.</p>
          <a href="#" className={styles.button}>
            <svg className={styles.stroke} viewBox="0 0 20 20">
              <path d="M 8 5 L 14 10 L 8 15"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export  { Card };
