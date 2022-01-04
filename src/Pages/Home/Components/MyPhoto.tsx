import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PhotoCard from "../../../Components/Common/PhotoCard";
import { db, storage } from "../../../FBconfig";

interface ImgDataType {}

const MyPhoto: React.FC = () => {
  const [imgFile, setImgFile] = useState<any>("");
  const [imgArray, setImgArray] = useState<ImgDataType[]>([]);
  console.log(imgArray, "이미지 어레이 스테이트");

  useEffect(() => {
    db.collection("image").onSnapshot((snapshot: any) => {
      snapshot?.docs?.forEach((doc: any) => {
        const data = doc.data;
      });
    });
  }, []);

  const onImgChange = (files: any) => {
    const selectedImg = files[0];
    // setImgFile(selectedImg);
    const reader = new FileReader();
    reader.onloadend = (finishEvent: any) => {
      const {
        currentTarget: { result },
      } = finishEvent;
      setImgFile(result);
    };
    reader.readAsDataURL(selectedImg);
  };

  // const getStorageData = async () => {
  //   storage
  //     .refFromURL(`gs://lazymoon-e41b4.appspot.com/image/`)
  //     .listAll()
  //     .then((res) => {
  //       res.items.forEach((img) => {
  //         img.getDownloadURL().then((res) => {
  //           setImgArray((prev) => [...prev, res]);
  //         });
  //       });
  //     });
  // };

  const goToStorage = async () => {
    const storageRef = storage.ref();
    const savePath = await storageRef.child(`image/${Date.now()}`);
    const upLoadImg = await savePath.putString(imgFile, "data_url");
    const imgFileURL = await upLoadImg.ref.getDownloadURL();

    await db.collection("image").add({ imgURL: imgFileURL });
    setImgFile("");

    // .then((res) => {
    //   console.log(res.ref.getDownloadURL.name);
    //   db.collection("image").add({
    //     imgURL: `${res.ref.getDownloadURL}`,
    //   });
    // });

    // await storage
    //   .refFromURL(`gs://lazymoon-e41b4.appspot.com/image/`)
    //   .list()
    //   .then((res) => {
    //     console.log(res);
    //     res.items((img) => {
    //       img.getDownloadURL().then((res) => {
    //         db.collection("imgae").add({
    //           imgURL: res,
    //         });
    //       });
    //     });
    //   });
  };

  return (
    <MyPhotoBack>
      <MyPhotoTemplate>
        {imgArray?.map((data, idx) => {
          return data && <PhotoCard key={idx} data={data} />;
        })}
      </MyPhotoTemplate>
      <HiddenInput
        type="file"
        accept="image/*"
        id="input-file"
        onChange={(e) => onImgChange(e.target.files)}
      />
      <UploadBtn htmlFor="input-file">Upload</UploadBtn>
      <SaveBtun onClick={goToStorage}>Save</SaveBtun>
    </MyPhotoBack>
  );
};

const MyPhotoBack = styled.section`
  width: 600px;
  height: 700px;
  padding: 10px 30px;
`;

const MyPhotoTemplate = styled.article`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(8, 1fr);
  row-gap: 2.5px;
  width: 540px;
  height: 690px;
  border: 1.5px solid #babdbe;
  background-color: #f5f5f5;
  border-radius: 5px;
  padding: 20px;
  overflow: scroll;
`;

const HiddenInput = styled.input`
  display: none;
`;
const UploadBtn = styled.label`
  display: inline-block;
  text-align: center;
  line-height: 25px;
  font-size: 12px;
  width: 60px;
  height: 25px;
  background-color: #f5f5f5;
  border: 2px solid gray;
  border-radius: 10px;
  position: relative;
  left: 410px;
  top: 12px;
  cursor: pointer;
  &:hover {
    background-color: grey;
    border-color: black;
    color: #fafafa;
  }
`;

const SaveBtun = styled.button`
  width: 60px;
  height: 25px;
  background-color: #f5f5f5;
  border: 2px solid gray;
  border-radius: 10px;
  position: relative;
  left: 420px;
  top: 11px;
  cursor: pointer;
  &:hover {
    background-color: grey;
    border-color: black;
    color: #fafafa;
  }
`;
export default MyPhoto;
