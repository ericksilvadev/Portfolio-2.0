import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';

export default function Project({ project: { name, description, color, backgroundColor, img, href }, id }) {
  let projectInfos = useRef(null);
    console.log(projectInfos);

  let underBar = window.matchMedia("(max-width: 1024px) and (max-height: 1366px)").matches ? 400 : 500;
  underBar = window.matchMedia("(max-width: 768px)").matches ? 0 : 500;
  

  useEffect(() => {
    gsap.fromTo(`.project-img${id}`,
      { opacity: 0 },
      { 
        duration: 0.3,
        opacity: 1,
        ease: 'none',
        y: 0,
        scrollTrigger: {
          id: `.project-img${id}`,
          trigger: `.project-img${id}`,
          start: 'top center',
          toggleActions: 'play none none',
        }
      }
    );
    gsap.fromTo(projectInfos,
      { opacity: 0 },
      { 
        duration: 0.6,
        delay: .5,
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
          id: `.project-info${id}`,
          trigger: `.project-img${id}`,
          start: 'top center',
          toggleActions: 'play none none',
        }
      }
    );
      gsap.fromTo(
        `.under-bar${id}`,
        { opacity: 0, width: 0 },
        {
        duration: 0.6,
        delay: .5,
        opacity: 1,
        width: underBar,
        ease: 'none',
        scrollTrigger: {
          id: `.under-bar${id}`,
          trigger: `.project-img${id}`,
          start: 'top center',
          toggleActions: 'play none none',
        }
      }
    );
    gsap.fromTo(`.project-p${id}`,
      { opacity: 0 },
      { 
        duration: 0.3,
        opacity: 1,
        delay: .7,
        y: id % 2 ? -20 : 20,
        ease: 'none',
        scrollTrigger: {
          id: `.project-p${id}`,
          trigger: `.project-img${id}`,
          start: 'top center',
          toggleActions: 'play none none',
        }
      }
    );
    gsap.fromTo(`.project-title${id}`,
      { opacity: 0 },
      { 
        duration: 0.3,
        opacity: 1,
        delay: .4,
        y: id % 2 ? -20 : 20,
        ease: 'none',
        scrollTrigger: {
          id: `.project-title${id}`,
          trigger: `.project-img${id}`,
          start: 'top center - 100px',
          toggleActions: 'play none none',
        }
      }
    );
  })

  if (!name) { return <div>LOADING...</div>; }

  return (
    <article className="project">
      <div className="img-container">
        <img src={ img } className={`project-img${id}`} alt={ `${name} thumbnail` } />
        <div className={`under-bar under-bar${id}`} style={ { backgroundColor } } />
      </div>
      <section
        ref={ (el) => projectInfos = el }
        style={ { color, backgroundColor } }
        className={ `project-info project-info${id}` }
      >
        <h2 className={`project-title${id}`}>{name}</h2>
        <p className={`project-p${id}`}>{description}</p>
        <div className="links">
          <a
            style={ { color } }
            href={`https://ericksilvadev.github.io/${href}`}
            target="_blank" rel="noreferrer"
          >
             Demo
             <i className="fas fa-arrow-right" />
          </a>
          <a
            style={ { color } }
            href={`https://github.com/ericksilvadev/${href}`}
            target="_blank"
            rel="noreferrer"
          >
            Repository
            <i className="fas fa-arrow-right" />
          </a>
        </div>
      </section>
    </article>
  );
}

Project.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    img: PropTypes.string,
    href: PropTypes.string,
  }).isRequired,
  id: PropTypes.string.isRequired,
};
