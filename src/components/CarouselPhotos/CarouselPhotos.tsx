import { useState } from "react";
import styled from "styled-components";

type CarouselPhotosProps = {
  photosGallery?: any[];
  mainImg: string;
};

export default function CarouselPhotos({
  photosGallery,
  mainImg,
}: CarouselPhotosProps) {
  const [img, setImg] = useState<number>(0);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const Carousel = styled.div`
    height: 30em;
    position: relative;
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

  const Label = styled.label`
    width: 1em;
    height: 1em;
    border-radius: 4em;
    border: 1px solid white;
    transition: 0.5s;
    :hover {
      background-color: white;
    }
  `;

  const ImgContainer = styled.div`
    img {
      height: 30em;
      transition: 0.5s;
    }
  `;

  const Layer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #222;
    opacity: 0.4;
    z-index: 20;
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
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 1em;
    z-index: 40;
    button {
      cursor: pointer;
      z-index: 80;
      height: 5em;
      width: 5em;
      border-radius: 2em;
      border: none;
    }
  `;

  const ImgModal = styled.div`
    object-fit: contain;
    width: 80%;
    height: 80%;
    img {
      width: 100%;
      height: 100%;
    }
  `;

  const CloseModalButton = styled.button`
    position: fixed;
    border: 1px solid red;
    height: 10%;
    left: 96%;
    top: 2%;
    border-radius: 1.5em;
    width: 6em;
    z-index: 60;
    height: 4em;
    border: none;
    cursor: pointer;
  `;

  function handleImg(e: any) {
    const imgIndex = e.target.id.slice(5, 7);
    setImg(imgIndex);
  }
  return (
    <Carousel>
      {photosGallery ? (
        <>
          <InputsContainer>
            {modalIsOpen ? (
              <div>
                <Layer
                  onClick={() => {
                    setModalIsOpen(false);
                  }}
                />
                <CloseModalButton
                  onClick={() => {
                    setModalIsOpen(false);
                  }}
                >
                  Fechar
                </CloseModalButton>
                <NavButtons>
                  <button
                    onClick={() => {
                      if (img === 0) {
                        return;
                      }
                      setImg(img - 1);
                    }}
                  >
                    Anterior
                  </button>
                  <button
                    onClick={() => {
                      if (img >= photosGallery.length - 1) {
                        return;
                      }
                      setImg(img + 1);
                    }}
                  >
                    Proxima
                  </button>
                </NavButtons>
                <Modal>
                  <ImgModal>
                    <img src={photosGallery[img]} />
                  </ImgModal>
                </Modal>
              </div>
            ) : null}

            {photosGallery?.map((photo, index) => {
              return (
                <>
                  <input
                    type="radio"
                    name="carousel-item"
                    className={photo.slice(0, 1)}
                    id={`radoo${index}`}
                    onClick={handleImg}
                  />
                  <Label htmlFor={`radoo${index}`}></Label>
                </>
              );
            })}
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
        <img src={mainImg} />
      )}
    </Carousel>
  );
}
