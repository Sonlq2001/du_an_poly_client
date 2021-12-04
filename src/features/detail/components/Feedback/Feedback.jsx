import React, { memo, useState, useEffect } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { BsThreeDots } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import OutsideClickHandler from 'react-outside-click-handler';

import {
  GroupComment,
  ItemComment,
  GroupRepComment,
  ItemRepComment,
  ItemSendComment,
  SubInputComment,
  ActionComment,
  EditorCommentMain,
  GroupActionComment,
  GroupActionCommentReply,
} from './Feedback.styles';
import AvatarEmpty from 'assets/images/user-empty.png';
import {
  postComment,
  getCommentsOfProduct,
  postCommentReply,
  deleteCommentReply,
  deleteComment,
  putComment,
  putCommentReply,
} from './../../redux/detail.slice';

const Feedback = ({ valueSendCmt, setValueSendCmt }) => {
  const dispatch = useDispatch();
  const { id: productId } = useParams();
  const [actionComment, setActionComment] = useState(false);
  const [isOpenActionComment, setIsOpenActionComment] = useState(null);
  const [isOpenActionCommentReply, setIsOpenActionCommentReply] =
    useState(null);
  const [isOpenEditComment, setIsOpenEditComment] = useState(null);
  const [isOpenEditCommentReply, setIsOpenEditCommentReply] = useState(null);
  const [openReplyCmt, setOpenReplyCmt] = useState(null);
  const [commentReply, setCommentReply] = useState({
    id: '',
    product_id: '',
    comment: '',
  });
  useEffect(() => {
    if (productId) {
      dispatch(getCommentsOfProduct(productId));
    }
  }, [dispatch, productId]);

  const { listComment, userLogin } = useSelector((state) => ({
    listComment: state.detailProduct.listComment,
    userLogin: state.auth.userLogin,
  }));

  const handleComment = async () => {
    const response = await dispatch(postComment(valueSendCmt));
    if (postComment.fulfilled.match(response)) {
      setValueSendCmt({ ...valueSendCmt, comment: '' });
      setActionComment(false)
    }
  };
console.log("listComment",listComment)
  const handleReplyCmt = async () => {
    const response = await dispatch(postCommentReply(commentReply));
    if (postCommentReply.fulfilled.match(response)) {
      setOpenReplyCmt(null);
    }
  };

  const handleDeleteCmtReply = (id) => {
    dispatch(deleteCommentReply(id));
  };

  const handleDeleteCmt = (id) => {
    dispatch(deleteComment(id));
  };

  const handleEditComment = async () => {
    const response = await dispatch(putComment(valueSendCmt));
    if (putComment.fulfilled.match(response)) {
      setIsOpenEditComment(null);
    }
  };

  const handleEditCommentReply = async () => {
    const response = await dispatch(putCommentReply(commentReply));
    if (putCommentReply.fulfilled.match(response)) {
      setIsOpenEditCommentReply(null);
    }
  };

  return (
    <>
      <GroupComment>
        {userLogin !== null && 
        <EditorCommentMain>
          <img
            src={userLogin?.avatar || AvatarEmpty}
            alt=""
            className="user-comment"
          />

          <div className="comment-main">
            <input
              type="text"
              placeholder="Đánh giá của bàn về sản phẩm !"
              className="input-main"
              name="comment"
              onClick={() => setActionComment(true) }
              onChange={(e) =>
                setValueSendCmt({ ...valueSendCmt, comment: e.target.value })
              }
              value={valueSendCmt.comment}
            />
            {actionComment && (
              <ActionComment>
                <button
                  className="btn-comment btn-cancel"
                  onClick={() => {
                    setActionComment(false);
                    setValueSendCmt({ ...valueSendCmt, comment:'' });
                  }}
                >
                  Hủy
                </button>
                <button
                disabled={valueSendCmt.comment.length<8}
                  className="btn-comment btn-send"
                  onClick={() => handleComment()}
                >
                  Bình luận
                </button>
              </ActionComment>
            )}
          </div>
        </EditorCommentMain>
        }
        {listComment &&
          listComment.length > 0 &&
          listComment.map((cmt) => {
            return (
              <ItemComment key={cmt?.id}>
                <ItemSendComment>
                  <img
                    src={cmt?.get_info_user?.avatar}
                    alt={cmt?.get_info_user?.name}
                    className="avatar-user"
                  />
                  <div className="">
                    <span className="auth-comment">
                      {cmt?.get_info_user?.name}
                    </span>
                    <div className="star-comment">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>

                    <p className="content-comment">{cmt?.comment}</p>

                    <div className="box-comment">
                      <p className="time-comment">
                        {moment(cmt?.created_at).format('YYYY-MM-DD')}
                      </p>
                      {userLogin?.email && (
                        <GroupActionComment>
                          {isOpenActionComment === cmt?.id && (
                            <OutsideClickHandler
                              onOutsideClick={() =>
                                setIsOpenActionComment(null)
                              }
                            >
                              <div className="box-action">
                                <button
                                  className="rep-comment"
                                  onClick={() =>
                                    setOpenReplyCmt(cmt?.id) +
                                    setIsOpenActionComment(null)
                                  }
                                >
                                  Trả lời
                                </button>
                                <button
                                  className="rep-comment"
                                  hidden={userLogin?.id !==cmt?.get_info_user?.id }
                                  onClick={() =>
                                    setIsOpenEditComment(cmt?.id) +
                                    setIsOpenActionComment(null) +
                                    setValueSendCmt({
                                      ...valueSendCmt,
                                      id: cmt?.id,
                                      comment: cmt?.comment,
                                    })
                                  }
                                >
                                  Sửa
                                </button>
                                <button
                                  className="rep-comment"
                                  hidden={userLogin?.id !==cmt?.get_info_user?.id }
                                  onClick={() => handleDeleteCmt(cmt?.id)}
                                >
                                  Xóa
                                </button>
                              </div>
                            </OutsideClickHandler>
                          )}

                          <span
                            className="icon-action"
                            onClick={() => setIsOpenActionComment(cmt?.id)}
                          >
                            <BsThreeDots />
                          </span>
                        </GroupActionComment>
                      )}
                    </div>
                  </div>
                </ItemSendComment>

 {/* edit comment */}
                {isOpenEditComment === cmt?.id && (
                  <div className="group-edit-comment">
                    <SubInputComment>
                      <img
                        src={cmt?.get_info_user?.avatar}
                        alt=""
                        className="avatar-user"
                      />

                      <div className="box-sub-comment">
                        <div className="editor-comment">
                          <span className="auth-comment auth-rep">
                            {cmt?.get_info_user?.name}
                          </span>
                          <input
                            autoFocus
                            className="input-comment"
                            value={valueSendCmt.comment}
                            name="edit-comment"
                            onChange={(e) =>
                              setValueSendCmt({
                                ...valueSendCmt,
                                comment: e.target.value,
                              })
                            }
                          />
                        </div>
                        <ActionComment>
                          <button
                            className="btn-comment btn-cancel"
                            onClick={() => setIsOpenEditComment(null)}
                          >
                            Hủy
                          </button>
                          <button
                            className="btn-comment btn-send"
                            onClick={() => handleEditComment()}
                          >
                            Sửa
                          </button>
                        </ActionComment>
                      </div>
                    </SubInputComment>
                  </div>
                )}

   {/* list comment reply */}
                <GroupRepComment>
                  {cmt?.get_reply?.map((cmtSub) => {
                    return (
                      <React.Fragment key={cmtSub?.id}>
                        <ItemRepComment>
                          <img
                            src={userLogin?.avatar || AvatarEmpty}
                            alt=""
                            className="avatar-user"
                          />
                          <div className="">
                            <span className="auth-comment">
                              {userLogin?.name}
                            </span>
                            <div className="star-comment">
                              <AiFillStar />
                              <AiFillStar />
                              <AiFillStar />
                              <AiFillStar />
                              <AiFillStar />
                            </div>
                            <p className="content-comment">
                              <span className="user-comment">
                                {cmtSub?.get_info_user?.name}
                              </span>
                              {cmtSub?.comment}
                            </p>
                            <div className="box-comment">
                              <p className="time-comment">
                                {moment(cmtSub?.created_at).format(
                                  'YYYY-MM-DD'
                                )}
                              </p>
                              {userLogin?.email && (
                                <GroupActionCommentReply>
                                  {cmtSub?.id === isOpenActionCommentReply && (
                                    <OutsideClickHandler
                                      onOutsideClick={() =>
                                        setIsOpenActionCommentReply(null)
                                      }
                                    >
                                      <div className="box-action">
                                        <button
                                          className="rep-comment"
                                          hidden={userLogin?.id !== cmtSub?.get_info_user?.id }
                                          onClick={() =>
                                            setIsOpenEditCommentReply(
                                              cmtSub?.id
                                            ) +
                                            setCommentReply({
                                              ...commentReply,
                                              id: cmtSub?.id,
                                              comment: cmtSub?.comment,
                                              product_id: productId,
                                              parent_id: cmt?.id,
                                            }) +
                                            setIsOpenActionCommentReply(null)
                                          }
                                        >
                                          Sửa
                                        </button>
                                        <button
                                          className="rep-comment"
                                          hidden={userLogin?.id !== cmtSub?.get_info_user?.id }
                                          onClick={() =>
                                            handleDeleteCmtReply(cmtSub?.id)
                                          }
                                        >
                                          Xóa
                                        </button>
                                      </div>
                                    </OutsideClickHandler>
                                  )}

                                  <span
                                    className="icon-action"
                                    onClick={() =>
                                      setIsOpenActionCommentReply(cmtSub?.id)
                                    }
                                  >
                                    <BsThreeDots />
                                  </span>
                                </GroupActionCommentReply>
                              )}
                            </div>
                          </div>
                        </ItemRepComment>

                        {/* edit comment sub */}
                        {isOpenEditCommentReply === cmtSub?.id && (
                          <div className="group-edit-comment">
                            <SubInputComment>
                              <img
                                src={cmt?.get_info_user?.avatar}
                                alt=""
                                className="avatar-user"
                              />

                              <div className="box-sub-comment">
                                <div className="editor-comment">
                                  <span className="auth-comment auth-rep">
                                    {cmt?.get_info_user?.name}
                                  </span>
                                  <input
                                    autoFocus
                                    className="input-comment"
                                    value={commentReply.comment}
                                    name="edit-comment"
                                    onChange={(e) =>
                                      setCommentReply({
                                        ...commentReply,
                                        comment: e.target.value,
                                      })
                                    }
                                  />
                                </div>
                                <ActionComment>
                                  <button
                                    className="btn-comment btn-cancel"
                                    onClick={() =>
                                      setIsOpenEditCommentReply(null)
                                    }
                                  >
                                    Hủy
                                  </button>
                                  <button
                                    className="btn-comment btn-send"
                                    onClick={() => handleEditCommentReply()}
                                  >
                                    Sửa
                                  </button>
                                </ActionComment>
                              </div>
                            </SubInputComment>
                          </div>
                        )}
                      </React.Fragment>
                    );
                  })}

                  {openReplyCmt === cmt?.id && (
                    <SubInputComment>
                      <img
                        src={cmt?.get_info_user?.avatar}
                        alt=""
                        className="avatar-user"
                      />

                      <div className="box-sub-comment">
                        <div className="editor-comment">
                          <span className="auth-comment auth-rep">
                            {cmt?.get_info_user?.name}
                          </span>
                          <input
                            autoFocus
                            className="input-comment"
                            placeholder="Trả lời"
                            onChange={(e) =>
                              setCommentReply({
                                ...commentReply,
                                id: cmt.id,
                                product_id: cmt.product_id,
                                comment: e.target.value,
                              })
                            }
                          />
                        </div>
                        <ActionComment>
                          <button
                            className="btn-comment btn-cancel"
                            onClick={() => setOpenReplyCmt(null)}
                          >
                            Hủy
                          </button>
                          <button
                            className="btn-comment btn-send"
                            onClick={() => handleReplyCmt()}
                          >
                            Trả lời
                          </button>
                        </ActionComment>
                      </div>
                    </SubInputComment>
                  )}
                </GroupRepComment>
              </ItemComment>
            );
          })}
      </GroupComment>
    </>
  );
};

export default memo(Feedback);
