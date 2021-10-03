import React, { memo, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

import {
  GroupComment,
  ItemComment,
  GroupRepComment,
  ItemRepComment,
  ItemSendComment,
  SubInputComment,
  ActionComment,
  EditorCommentMain,
} from './Feedback.styles';

import AvatarEmpty from './../../../../assets/images/user-empty.png';

const Feedback = ({ valueSendCmt, setValueSendCmt }) => {
  const [actionComment, setActionComment] = useState(false);

  const handleComment = () => {};

  return (
    <>
      <GroupComment>
        <EditorCommentMain>
          <img src={AvatarEmpty} alt="" className="user-comment" />

          <div className="comment-main">
            <input
              type="text"
              placeholder="Đánh giá của bàn về sản phẩm !"
              className="input-main"
              value={valueSendCmt.value}
              onClick={() => setActionComment(true)}
              onChange={(e) =>
                setValueSendCmt({ ...valueSendCmt, value: e.target.value })
              }
            />
            {actionComment && (
              <ActionComment>
                <button
                  className="btn-comment btn-cancel"
                  onClick={() => {
                    setActionComment(false);
                    setValueSendCmt({ ...valueSendCmt, value: '' });
                  }}
                >
                  Hủy
                </button>
                <button
                  className="btn-comment btn-send"
                  onClick={() => handleComment()}
                >
                  Bình luận
                </button>
              </ActionComment>
            )}
          </div>
        </EditorCommentMain>

        <ItemComment>
          <ItemSendComment>
            <img src={AvatarEmpty} alt="" className="avatar-user" />
            <div className="">
              <span className="auth-comment">le quang son</span>
              <div className="star-comment">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>

              <p className="content-comment">Sản phẩm đẹp quá !</p>

              <div className="box-comment">
                <p className="time-comment">2021-09-14 17:25</p>
                <button className="rep-comment">Trả lời</button>
              </div>
            </div>
          </ItemSendComment>

          <GroupRepComment>
            <ItemRepComment>
              <img src={AvatarEmpty} alt="" className="avatar-user" />
              <div className="">
                <span className="auth-comment">le quang son</span>
                <div className="star-comment">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <p className="content-comment">
                  <span className="user-comment">Lê Quang Sơn</span>
                  Sản phẩm đẹp quá !
                </p>
                <div className="box-comment">
                  <p className="time-comment">2021-09-14 17:25</p>
                  <button className="rep-comment">Trả lời</button>
                </div>
              </div>
            </ItemRepComment>

            <SubInputComment>
              <img src={AvatarEmpty} alt="" className="avatar-user" />

              <div className="box-sub-comment">
                <div className="editor-comment">
                  <span className="auth-comment auth-rep">le quang son</span>
                  <div className="input-comment" contentEditable="true"></div>
                </div>
                <ActionComment>
                  <button className="btn-comment btn-cancel">Hủy</button>
                  <button className="btn-comment btn-send">Trả lời</button>
                </ActionComment>
              </div>
            </SubInputComment>
          </GroupRepComment>
        </ItemComment>
      </GroupComment>
    </>
  );
};

export default memo(Feedback);
