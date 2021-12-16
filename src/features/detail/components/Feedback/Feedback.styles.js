import styled from 'styled-components';

export const GroupRating = styled.div`
  display: flex;
  margin-top: 3rem;
  @media (max-width: 575.98px) {
    flex-direction: column;
  }
`;
export const RatingTotal = styled.div`
  margin-right: 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  .rating-percent {
    font-size: 3rem;
    font-weight: 600;
    margin-right: 2rem;
    color: var(--txt-color);
  }
  .group-star {
    text-align: center;
    margin-top: 2rem;
  }
  .list-star {
    color: var(--yellow-color);
    font-size: 1.5rem;
  }
  .view-project {
    color: 1.3rem;
    color: var(--aaa-color);
  }
`;
export const FilterRating = styled.div`
  display: flex;
  .item-rating {
    font-size: 1.4rem;
    display: flex;
    align-items: flex-start;
    cursor: pointer;
  }
  .item-rating:hover {
    color: var(--yellow-color);
  }
  .item-rating + .item-rating {
    margin-left: 1.5rem;
  }
  .item-rating__icon {
    display: flex;
    align-items: center;
  }
  @media (max-width: 575.98px) {
    margin-top: 2rem;
  }
`;

// comment

export const GroupComment = styled.div`
  margin-top: 3rem;
`;
export const ItemComment = styled.div`
  border-bottom: 1px solid var(--eee-color);
  & + & {
    margin-top: 2rem;
  }
  .group-edit-comment {
    margin-left: 6rem;
  }
  .avatar-user {
    width: 5rem;
    height: 5rem;
    border-radius: 100%;
    margin-right: 1.5rem;
  }
  .auth-comment {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
  .star-comment {
    color: var(--yellow-color);
    font-size: 1.1rem;
  }
  .content-comment {
    font-size: 1.4rem;
    margin: 1.5rem 0 1rem 0;
  }
  .box-comment {
    display: flex;
  }
  .time-comment {
    color: var(--aaa-color);
    font-size: 1.2rem;
  }
  .rep-comment {
    font-size: 1.2rem;
    color: var(--first-color);
    background-color: transparent;
    border: none;
    white-space: nowrap;
    padding: 8px;
    width: 100%;
    &:hover {
      background-color: var(--eee-color);
    }
  }
  .rep-comment:hover {
    text-decoration: none;
  }
  @media (max-width: 767.98px) {
    .group-edit-comment {
      margin-left: 3rem;
    }
  }
  @media (max-width: 575.98px) {
    .group-edit-comment {
      margin-left: 1rem;
    }
  }
`;
export const GroupRepComment = styled.div`
  margin: 2rem 0 0 6rem;
  @media (max-width: 767.98px) {
    margin: 2rem 0 0 3rem;
  }
  @media (max-width: 575.98px) {
    margin: 2rem 0 0 1rem;
  }
`;
export const ItemRepComment = styled.div`
  display: flex;
  & + & {
    margin-top: 1.5rem;
  }
  &:last-child {
    margin-bottom: 1.5rem;
  }
  .avatar-user {
    width: 4rem;
    height: 4rem;
  }
  .user-comment {
    font-weight: 500;
    color: var(--green-color);
    margin-right: 1rem;
    display: inline-block;
  }
`;
export const SubInputComment = styled.div`
  display: flex;
  margin: 2rem 0;
  .avatar-user {
    width: 4rem;
    height: 4rem;
  }
  .box-sub-comment {
    flex-grow: 1;
  }
  .editor-comment {
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--eee-color);
  }
  .input-comment {
    padding: 1rem 1rem 1rem 0;
    outline: none;
    width: 100%;
    font-size: 1.4rem;
    border: none;
  }
  .auth-rep {
    background-color: var(--green2-color);
    padding: 3px;
    border-radius: 5px;
    white-space: nowrap;
    margin: 0 1rem 0 0;
  }
`;
export const ActionComment = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
  .btn-comment {
    padding: 8px 1.5rem;
    font-size: 1.5rem;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: transparent;
  }
  .btn-cancel:hover {
    background-color: var(--ddd-color);
  }
  .btn-comment:disabled {
    cursor: default;
    background-color: var(--eee-color);
    color: var(--txt-color);
  }
  .btn-send {
    background-color: var(--first-color);
    color: var(--white-color);
    margin-left: 1rem;
  }
  .btn-send:hover {
    opacity: 0.9;
  }
`;
export const EditorCommentMain = styled.div`
  display: flex;
  margin-bottom: 2rem;
  .user-comment {
    width: 5rem;
    height: 5rem;
    border-radius: 100%;
    margin-right: 1.5rem;
  }
  .comment-main {
    flex-grow: 1;
  }
  .input-main {
    padding: 1rem 1rem 1rem 0;
    border: none;
    border-bottom: 1px solid var(--eee-color);
    font-size: 1.4rem;
    width: 100%;
  }
  .control-comment {
    margin-top: 1rem;
  }
  .btn-cmt {
    font-size: 1.5rem;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: hsl(0deg 0% 0% / 0%);
  }
`;
export const ItemSendComment = styled.div`
  display: flex;
`;
export const GroupActionComment = styled.div`
  position: relative;
  .box-action {
    position: absolute;
    top: -2rem;
    text-align: center;
    border-radius: 3px;
    background-color: rgba(247, 247, 247, 1);
    overflow: hidden;
  }
  .icon-action {
    font-size: 1.5rem;
    cursor: pointer;
    margin-left: 4rem;
  }
`;
export const GroupActionCommentReply = styled(GroupActionComment)`
  .box-action {
    top: -6rem;
  }
`;
