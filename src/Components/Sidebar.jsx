import React, { useState } from "react";
import styled from "styled-components";

import { Link, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const [currentLink, setCurrentLink] = useState(1);
  const [navbarState, setNavbarState] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", () => setNavbarState(false));

  return (
    <>
      <Section>
        <div className="top">
          
          <div className="links">
            <ul>
              <li>
                <a
                  onClick={() => {
                    navigate("/profile");
                  }}
                >
                  <span className="profile"> Profile</span>
                </a>
              </li>
              <li>
                <a   onClick={() => {
                    navigate("/posts");
                  }}>
                  <span className="posts"> Posts</span>
                </a>
                </li>
                <li>
                <a   onClick={() => {
                    navigate("/gallary");
                  }}>
                  <span className="gallary"> Gallary</span>
                </a>
              </li>

              <li>
                <a   onClick={() => {
                    navigate("/todo");
                  }}>
                  <span className="todo"> ToDo</span>
                </a>

              </li>
            </ul>
          </div>
        </div>
       
      </Section>
      <div className="responsive__links">
        <ul>
          <li>
            <a href="#">
              <span> Dashboard</span>
            </a>
          </li>
          <li>
            <a>
              <span className="buttonsDashboard"> Users</span>
            </a>
          </li>
          <li>
            <a>
              <span className="buttonsDashboard"> Questions</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span> Learning Center</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span> FAQs</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span> Settings</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
const Section = styled.section`
  position: fixed;
  left: 0;
  background-color: #212121;
  height: 100vh;
  width: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  gap: 2rem;
  .top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;

    .toggle {
      display: none;
    }
    .buttonsDashboard{
      cursor:pointer;
    } 
    .brand {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      svg {
        color: #ffc107;
        font-size: 2rem;
      }
      span {
        font-size: 2rem;
        color: #ffc107;
        font-family: "Permanent Marker", cursive;
      }
    }
    .links {
      display: flex;
      justify-content: center;
      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          padding: 0.6rem 1rem;
          border-radius: 0.6rem;
          &:hover {
            background-color: #ffc107;
            a {
              color: black;
            }
          }
          a {
            text-decoration: none;
            display: flex;
            gap: 1rem;
            color: white;
          }
        }
        .active {
          background-color: #ffc107;
          a {
            color: black;
          }
        }
      }
    }
  }

 
    
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: initial;
    width: 100%;
    height: max-content;
    padding: 1rem;
    .top {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;
      .toggle {
        display: block;
        color: white;
        z-index: 99;
        svg {
          font-size: 1.4rem;
        }
      }
      .brand {
        gap: 1rem;
        justify-content: flex-start;
      }
    }
    .top > .links,
    .logout {
      display: none;
    }
  }
`;

// const ResponsiveNav = styled.div`
//   position: fixed;
//   right: -10vw;
//   top: 0;
//   z-index: 10;
//   background-color: black;
//   height: 100vh;
//   transition: 0.4s ease-in-out;
//   display: flex;
//   opacity: 0;
//   visibility: hidden;
//   padding: 1rem;
//   .responsive__links {
//     ul {
//       list-style-type: none;
//       display: flex;
//       flex-direction: column;
//       gap: 1rem;
//       margin-top: 3rem;
//       li {
//         padding: 0.6rem 1rem;
//         border-radius: 0.6rem;
//         &:hover {
//           background-color: #ffc107;
//           a {
//             color: black;
//           }
//         }
//         a {
//           text-decoration: none;
//           display: flex;
//           gap: 1rem;
//           color: white;
//         }
//       }
//       .active {
//         background-color: #ffc107;
//         a {
//           color: black;
//         }
//       }
//     }
//   }
// `;
