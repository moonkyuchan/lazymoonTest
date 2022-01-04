import React, { useState } from "react";
import styled from "styled-components";
import { CollectionType } from "../../Pages/Home/Components/Visitor";
import { db } from "../../FBconfig";

interface CommentCardProps {
  data: CollectionType;
  isOwner: boolean;
}

const CommentCard: React.FC<CommentCardProps> = ({ data, isOwner }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [newComment, setNewComment] = useState<string>("");

  const deleteComment = async () => {
    const ok = window.confirm("정말 삭제하시겠습니까?");
    if (ok) {
      await db.doc(`comment/${data.id}`).delete();
    }
  };

  const toggleEdit = (comment: string) => {
    setNewComment(comment);
    setIsEdit((prev) => !prev);
  };

  const onChangeEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setNewComment(value);
  };

  const onSubmitEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    await db.doc(`comment/${data.id}`).update({
      comment: newComment,
    });
    setIsEdit(false);
  };

  return (
    <>
      <CommentCardBack>
        {isEdit ? (
          <>
            <FormBack>
              <Edit
                type="text"
                placeholder="EDIT..."
                onChange={onChangeEdit}
                value={newComment}
              />
              <BtnWrap>
                <Submit onClick={onSubmitEdit}>Update</Submit>
                <Cancel onClick={() => toggleEdit(data.comment)}>Cancel</Cancel>
              </BtnWrap>
            </FormBack>
          </>
        ) : (
          <>
            <CommentContents>{data.comment}</CommentContents>
            {isOwner && (
              <BtnWrap>
                <DeleteBtn onClick={deleteComment}>Delete</DeleteBtn>
                <EditBtn onClick={() => toggleEdit(data.comment)}>Edit</EditBtn>
              </BtnWrap>
            )}
          </>
        )}
      </CommentCardBack>
    </>
  );
};

const CommentCardBack = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 490px;
  height: 120px;
  background-color: #fafafa;
  margin-top: 20px;
  border: 1px solid #babdbe;
  border-radius: 5px;
  padding: 5px 15px;
`;

const FormBack = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 490px;
  height: 90px;
`;

const Edit = styled.input`
  width: 400px;
  height: 90px;
  border: 1px solid #c7c7c7;
  border-radius: 5px;
  padding: 10px;
`;
const Submit = styled.button`
  font-size: 5px;
  width: 50px;
  height: 20px;
  border-radius: 5px;
  background-color: #f5f5f5;
  border: 1px solid gray;
  &:hover {
    background-color: grey;
    border-color: black;
    color: #fafafa;
  }
  margin-top: 5px;
`;

const Cancel = styled(Submit)`
  margin-top: 10px;
`;

const CommentContents = styled.div`
  font-size: 15px;
  width: 400px;
  height: 90px;
  border: 1px solid #c7c7c7;
  border-radius: 5px;
  padding: 10px;
`;
const BtnWrap = styled.div`
  width: 50px;
  height: 90px;
`;
const DeleteBtn = styled.button`
  font-size: 5px;
  width: 50px;
  height: 20px;
  border-radius: 5px;
  background-color: #f5f5f5;
  border: 1px solid gray;
  &:hover {
    background-color: grey;
    border-color: black;
    color: #fafafa;
  }
  margin-top: 5px;
`;
const EditBtn = styled(DeleteBtn)`
  margin-top: 10px;
`;

export default CommentCard;
