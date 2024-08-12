import './style.css'

import { Image, Text, Box } from '~/shared/ui'
import { THEME } from '~/shared/constants/THEME'

import ProfilePhoto from '~/assets/img/profilePhoto.png'
import TelegramIcon from '~/assets/img/telegram.svg'
import LinkedInIcon from '~/assets/img/linkedin.svg'
import YoutubeIcon from '~/assets/img/youtube.svg'
import { EXTERNAL_LINKS } from '~/shared/constants/LINKS'

export const ProfileWidget = () => {

  return (
    <Box id="profile-widget" display='flex' justifyContent='center' alignItems='center' flex={1}>
      <Box>
        <Box display='flex' flexDirection='column' alignItems='center'>
          <Image src={ProfilePhoto} alt='profile' width='128px' height='128px' borderRadius='50%'/>

          <Text value='Viktor Riabkov' variant='h1' />
          <Text value='Senior Full Stack Engineer' variant='body-regular' color={THEME.light.color.white50} />

          <Box display='flex' gap="12px" padding='16px 8px'>
            <a href={EXTERNAL_LINKS.Youtube} target='_blank' className='exteral-link'>
              <Image src={YoutubeIcon} alt='youtube-logo' width='24px' height='24px'/>
            </a>
            <a href={EXTERNAL_LINKS.Telegram} target='_blank' className='exteral-link'>
              <Image src={TelegramIcon} alt='telegram-logo' width='24px' height='24px'/>
            </a>
            <a href={EXTERNAL_LINKS.Linkedin} target='_blank' className='exteral-link'>
              <Image src={LinkedInIcon} alt='linkedin-logo' width='24px' height='24px'/>
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}