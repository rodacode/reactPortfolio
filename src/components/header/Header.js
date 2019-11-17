import React from 'react';
import './header.scss';

const Header = (props) => {
        return (
                <div class="content">
                <div class="name">
                  <h1 class="title">Nicolas Hardmeier</h1>
                  <h4 class="subtitle">Front-end Developer</h4>
                </div>
                <div class="social-links">
                  <ul>
                    <li>
                      <a href="https://github.com/nicohardmeier">
                        <i class="fa fa-github fa-2x"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/nicolas-h-0812baa9/">
                        <i class="fa fa-linkedin fa-2x"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div v-if="getExplanation" class="explanation-div">
                  <p class="explanation">header component</p>
                </div>
              </div>
        );
}

export default Header;