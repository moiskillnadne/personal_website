import './style.css';

import { useNavigate } from 'react-router-dom';
import { Image, Typography } from '~/shared/ui';

import ProfilePhoto from '~/assets/img/profilePhoto.png';
import TelegramIcon from '~/assets/img/telegram.svg';
import LinkedInIcon from '~/assets/img/linkedin.svg';
import YoutubeIcon from '~/assets/img/youtube.svg';
import { EXTERNAL_LINKS } from '~/shared/constants/LINKS';
import { ROUTES } from '~/shared/constants/ROUTES';

export const ProfileWidget = () => {
  const navigator = useNavigate();

  return (
    <div className="flex flex-1 justify-center items-center">
      <div>
        <div className="flex flex-col items-center">
          <Image src={ProfilePhoto} alt="profile" width="128px" height="128px" borderRadius="50%" />

          <Typography value="Viktor Riabkov" size="4xl" weight="bold" />
          <Typography
            value="Senior Full Stack Engineer"
            size="md"
            // color={THEME.light.color.white50}
          />

          <div className="flex gap-[12px] py-[16px] px-[8px]">
            <a
              href={EXTERNAL_LINKS.Youtube}
              target="_blank"
              className="exteral-link"
              rel="noreferrer"
            >
              <Image src={YoutubeIcon} alt="youtube-logo" width="24px" height="24px" />
            </a>
            <a
              href={EXTERNAL_LINKS.Telegram}
              target="_blank"
              className="exteral-link"
              rel="noreferrer"
            >
              <Image src={TelegramIcon} alt="telegram-logo" width="24px" height="24px" />
            </a>
            <a
              href={EXTERNAL_LINKS.Linkedin}
              target="_blank"
              className="exteral-link"
              rel="noreferrer"
            >
              <Image src={LinkedInIcon} alt="linkedin-logo" width="24px" height="24px" />
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="button"
            className="button-apple-style header-right-button font-bold"
            onClick={() => navigator(ROUTES.DONATE.path)}
          >
            Support
          </button>
        </div>
      </div>
    </div>
  );
};
