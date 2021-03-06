/* eslint-disable */

import React, { useRef } from 'react';
import { CoreSidebar } from 'react-components';

import './AppSidebar.css';

export const AppSidebar = ({ ...rest }) => {
  const ref = useRef(null);

  const [expanded, setExpanded] = React.useState(false);

  return (
    // <CoreSidebar ref={ref} {...rest}>
    <CoreSidebar expanded={expanded} {...rest}>
      <header slot='header'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 630 630' height='48' width='48'>
          <rect width='630' height='630' fill='#f7df1e' />
          <path d='m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z' />
        </svg>

        <h1>Stencil.js sidebar</h1>
      </header>

      <ul role='list' slot='content'>
        <li>
          <a href='#'>
            <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'>
              <path d='M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 11 21 L 11 15 L 13 15 L 13 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z M 12 4.7910156 L 18 10.191406 L 18 11 L 18 19 L 15 19 L 15 13 L 9 13 L 9 19 L 6 19 L 6 10.191406 L 12 4.7910156 z'></path>
            </svg>
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href='#'>
            <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'>
              <path d='M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 11 21 L 13 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z M 12 4.7910156 L 18 10.191406 z'></path>
            </svg>
            <span>Lorem</span>
          </a>
        </li>
        <li>
          <a href='#'>
            <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'>
              <path d='M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 11 21 L 11 15 L 13 15 L 6 19 L 6 10.191406 L 12 4.7910156 z'></path>
            </svg>
            <span>Ipsum</span>
          </a>
        </li>
      </ul>

      <footer slot='footer'>
        <button
          id='toggle'
          class='icon-btn'
          aria-label='Toggle'
          // onClick={() => ref.current?.toggle()}
          onClick={() => setExpanded((p) => !p)}
        >
          <span id='toggle-icon' class={!expanded ? 'rotate-180' : ''}>
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M9.905 4.28a.75.75 0 0 0-1.06-1.06l-6.25 6.25a.75.75 0 0 0 0 1.06l6.25 6.25a.75.75 0 0 0 1.06-1.06L4.185 10l5.72-5.72zm6.25 0a.75.75 0 0 0-1.06-1.06l-6.25 6.25a.75.75 0 0 0 0 1.06l6.25 6.25a.75.75 0 1 0 1.06-1.06L10.435 10l5.72-5.72z'
                fill='currentColor'
              ></path>
            </svg>
          </span>
        </button>
      </footer>
    </CoreSidebar>
  );
};
