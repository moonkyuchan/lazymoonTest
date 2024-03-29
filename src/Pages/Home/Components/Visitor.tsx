import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CommentCard from "../../../Components/Common/CommentCard";
import { db } from "../../../FBconfig";
import { useSelector, RootStateOrAny } from "react-redux";

export interface CollectionType {
  comment: string;
  createAt: number;
  id: string;
  userUid: string;
}

const Visitor: React.FC = () => {
  const userUid = useSelector((state: RootStateOrAny) => state.CurrentUserRd);
  const [comment, setComment] = useState<string>("");
  const [commentData, setCommentData] = useState<CollectionType[]>([]);

  useEffect(() => {
    db.collection("comment").onSnapshot((snapshot: any) => {
      const commentArray = snapshot?.docs?.map((doc: any) => {
        return { id: doc.id, ...doc.data() };
      });
      const sortedComment = commentArray.sort(
        (a: CollectionType, b: CollectionType) => {
          return a.createAt < b.createAt ? 1 : -1;
        }
      );
      setCommentData(sortedComment);
    });
  }, []);

  const commentValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { value },
    } = e;
    setComment(value);
  };

  const Submit = async () => {
    comment &&
      (await db.collection("comment").add({
        comment,
        createAt: Date.now(),
        userUid: userUid,
      }));
    setComment("");
  };

  return (
    <VisitorBack>
      <VisitorTemplate>
        {commentData?.map((data) => {
          return (
            <CommentCard
              key={data.id}
              data={data}
              isOwner={data.userUid === userUid}
            />
          );
        })}
      </VisitorTemplate>
      <CommentInputBack
        placeholder="방명록을 남겨 주세요."
        maxLength={100}
        value={comment}
        onChange={commentValue}
      ></CommentInputBack>
      <SubmitButton onClick={Submit}>Submit</SubmitButton>
    </VisitorBack>
  );
};

const VisitorBack = styled.section`
  width: 600px;
  height: 700px;
  padding: 10px 30px;
`;

const VisitorTemplate = styled.article`
  display: grid;
  grid-template-rows: repeat(1fr, 120px);
  place-items: center;
  width: 540px;
  height: 680px;
  border: 1.5px solid #babdbe;
  background-color: #f5f5f5;
  border-radius: 5px;
  overflow: scroll;
`;

const CommentInputBack = styled.textarea`
  width: 540px;
  height: 85px;
  padding: 15px 30px;
  position: relative;
  /* left: 15px; */
  bottom: 15px;
  border: 2px solid gray;
  border-radius: 15px;
  background-color: #fafafa;
  ::placeholder {
    color: #c7c7c7;
  }
  resize: none;
`;

const SubmitButton = styled.button`
  width: 60px;
  height: 25px;
  background-color: #f5f5f5;
  border: 2px solid gray;
  border-radius: 10px;
  position: relative;
  left: 445px;
  bottom: 50px;
  &:hover {
    background-color: grey;
    border-color: black;
    color: #fafafa;
  }
`;

export default Visitor;
