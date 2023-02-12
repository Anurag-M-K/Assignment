import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessageCard } from "../redux/features/privateCardStateSlice";
import { GoTriangleRight } from "react-icons/go";
import "./Css/PrivateMessage.css";

const PrivateMessage = () => {
  const dispatch = useDispatch();

  const { privateMessageState } = useSelector((state) => state.privateChat);

  const { messageCardState } = useSelector((state) => state.messageCard);

  const messageHide = () => {
    dispatch(setMessageCard(false));
  };

  return (
    <>
      {messageCardState ? (
        <div className="privateChat-card-container">
          <div className="privateChat-card">
            <div className="chat-card-heading bg-primary text-light">
              <button
                onClick={messageHide}
                className="btn btn-primary btn-message"
              >
                {" "}
                <div className="user">
                  <img src={privateMessageState?.profilepicture} alt="" />
                  <div className="user-name text-light pt-2">
                    {privateMessageState?.name}
                  </div>
                </div>
              </button>
            </div>
            <div
              className="message-card-scroll"
              style={{ height: "0", overflowY: "scroll" }}
            ></div>

            <div
              className="privateChat-card-scroll"
              style={{
                height: "180px",
                overflowY: "scroll",
                borderBottom: "1px solid #ddd",
                marginLeft: "25px"
              }}
            >
              <div className="user-message-card bg-secondary me-2">
                <small>Hit how are you?</small>
                <div className="user-name text-dark"></div>
              </div>
              <div>
                <small className="align-items-end justify-content-end bg-secondary me-2">
                  fine thanks..
                </small>
              </div>

              <div className="user bg-secondary me-2">
                <small>Hit how are you?</small>
                <div className="user-name text-dark"></div>
              </div>
              <div>
                <small className="align-items-end justify-content-end bg-secondary me-2">
                  fine thanks..
                </small>
              </div>

              <div className="user bg-secondary me-2">
                <small>Hit how are you?</small>
                <div className="user-name text-dark"></div>
              </div>
              <div>
                <small className="align-items-end justify-content-end bg-secondary me-2">
                  fine thanks..
                </small>
              </div>

              <div className="user bg-secondary me-2">
                <small>Hit how are you?</small>
                <div className="user-name text-dark"></div>
              </div>
              <div>
                <small className="align-items-end justify-content-end bg-secondary me-2">
                  fine thanks..
                </small>
              </div>

              <div className="user bg-secondary me-2">
                <small>Hit how are you?</small>
                <div className="user-name text-dark"></div>
              </div>
              <div>
                <small className="align-items-end justify-content-end bg-secondary me-2">
                  fine thanks..
                </small>
              </div>
            </div>

            <div className="col-md-12 ms-5">
              <GoTriangleRight />
            </div>
          </div>
        </div>
      ) : (
        " "
      )}
    </>
  );
};

export default PrivateMessage;
