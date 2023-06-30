import React, { useState, useEffect } from "react";
import styled from "styled-components";

type CarouselPhotosProps = {
  photosGallery?: any[];
  mainImg: string;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalIsOpen: boolean;
};

export default function CarouselPhotos({
  photosGallery,
  mainImg,
  setModalIsOpen,
  modalIsOpen,
}: CarouselPhotosProps) {
  const [img, setImg] = useState<number>(0);

  useEffect(() => {}, [modalIsOpen]);

  const Carousel = styled.div`
    position: relative;
    width: 100%;
  `;

  const InputsContainer = styled.div`
    position: absolute;
    display: flex;
    gap: 1em;
    top: 96%;
    left: 48%;

    input {
      display: none;
    }
  `;

  const ImgContainer = styled.div`
    width: 100%;
    height: 100%;
    max-height: 30vh;
    img {
      transition: transform 0.5s;
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
  `;

  const Layer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #222;
    opacity: 0.8;
    z-index: 30;
  `;

  const Modal = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 30;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  `;

  const NavButtons = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    z-index: 40;
    button {
      cursor: pointer;
      z-index: 100;
      height: 5em;
      width: 10em;
      border-radius: 2em;
      border: none;
    }

    @media (max-width: 1990px) {
      top: 45%;
      justify-content: space-evenly;
    }
  `;

  const ImgModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 90;
    img {
      object-fit: contain;
      width: 70%;
    }
  `;

  const CloseModalButton = styled.button`
    position: fixed;
    border: 1px solid red;
    height: 10%;
    left: 76%;
    top: 2%;
    border-radius: 1.5em;
    width: 6em;
    z-index: 60;
    height: 4em;
    border: none;
    cursor: pointer;
  `;

  function handlePreviousImg() {
    if (img === 0) {
      return;
    }
    setImg(img - 1);
  }

  function handleNextImg() {
    if (photosGallery) {
      if (img >= photosGallery.length - 1) {
        return;
      }
      setImg(img + 1);
    }
  }

  return (
    <Carousel>
      {photosGallery ? (
        <>
          <InputsContainer>
            {modalIsOpen ? (
              <Modal>
                <CloseModalButton
                  onClick={() => {
                    setModalIsOpen(false);
                  }}
                >
                  Fechar
                </CloseModalButton>
                <NavButtons>
                  <Layer
                    onClick={() => {
                      setModalIsOpen(false);
                    }}
                  />
                  <button onClick={handlePreviousImg}>Anterior</button>
                  <button onClick={handleNextImg}>Próxima</button>
                </NavButtons>
                <ImgModal>
                  <img src={photosGallery[img]} alt="" />
                </ImgModal>
              </Modal>
            ) : null}
          </InputsContainer>
          <ImgContainer>
            <img
              src={photosGallery[img]}
              alt=""
              onClick={() => setModalIsOpen(true)}
            />
          </ImgContainer>
        </>
      ) : (
        <img src={mainImg} alt="" />
      )}
    </Carousel>
  );
}
