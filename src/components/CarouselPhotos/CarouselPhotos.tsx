import { useState } from "react";
import styled from "styled-components";

type CarouselPhotosProps = {
  photosGallery: any[];
};

export default function CarouselPhotos({ photosGallery }: CarouselPhotosProps) {
  const [carouselImg, setCarouselImg] = useState<string>("0");

  const Slider = styled.div`
    margin: 0 auto;
    width: 1400px;
    height: 400px;
    overflow: hidden;
  `;

  const Slides = styled.div`
    width: 600%;
    height: 400px;
    display: flex;
    margin-left: ${`${carouselImg}%` || "0%"};

    input {
      display: none;
    }
  `;

  const Slide = styled.div`
    position: relative;
    img {
      height: 100%;
      object-fit: contain;
      width: 1400px;
    }
  `;

  const ManualNav = styled.div`
    position: absolute;
    width: 1400px;
    margin-top: -40px;
    display: flex;
    justify-content: center;
    gap: 1em;
  `;

  const ManualBtn = styled.label`
    border: 2px solid #fff;
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
    transition: 1s;

    :hover {
      background-color: #fff;
    }
  `;

  const Radio = styled.input`
    :checked {
      background-color: #fff;
    }
  `;

  function handleCarousel(e: any) {
    const index = e.target.id.slice(5, 7) * -100;
    setCarouselImg(index.toString());
  }

  return (
    <Slider>
      <Slides className="slides">
        {photosGallery.map((a, index) => {
          return (
            <Radio
              type="radio"
              name={`name${a}`}
              id={`radio${index}`}
              onClick={handleCarousel}
            />
          );
        })}

        {photosGallery.map((photo, index) => {
          if (index === 0) {
            return (
              <Slide className="first">
                <img src={photo} />
              </Slide>
            );
          }
          return (
            <Slide>
              <img src={photo} />
            </Slide>
          );
        })}

        <div className="navigation-auto">
          {photosGallery.map((photo, index) => {
            return (
              <div id={`photo${photo}}`} className={`auto-btn${index}`}></div>
            );
          })}
        </div>
      </Slides>
      <ManualNav className="manual-navi">
        {photosGallery.map((photo, index) => {
          return (
            <ManualBtn
              id={`photo${photo}`}
              htmlFor={`radio${index}`}
              className={`manual-btn`}
            ></ManualBtn>
          );
        })}
      </ManualNav>
    </Slider>
  );
}
