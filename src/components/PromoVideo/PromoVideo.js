import { useState } from 'react';
import './PromoVideo.scss';

const PromoVideo = ({ videoId }) => {
  const [isVideoShowed, setVideoShowing] = useState(false);

  const handleVideoCoverClick = () => {
    setVideoShowing(true);
  };

  return (
    <div className="promo-video">
      <div className="promo-video__wrapper" onClick={handleVideoCoverClick}>
        {!isVideoShowed && (
          <>
            <picture className="promo-video__picture">
              <source
                srcSet={`https://i.ytimg.com/vi_webp/${videoId}/mqdefault.webp`}
                type="image/webp"
              />
              <img
                className="promo-video__img"
                src={`https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`}
                alt="Youtube promo"
              />
            </picture>
            <button
              className="promo-video__button"
              type="button"
              aria-label="Запустить видео"
            ></button>
          </>
        )}
        {isVideoShowed && (
          <iframe
            className="promo-video__video"
            src={`https://www.youtube.com/embed/${videoId}?rel=0&showinfo=0&autoplay=1&controls=2`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen="1"
            title="YouTube video"
            frameBorder="0"
          />
        )}
      </div>
    </div>
  );
};

export default PromoVideo;
