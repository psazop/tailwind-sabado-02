import facebookIcon from '../assets/images/icon-facebook.svg';
import instagramIcon from '../assets/images/icon-instagram.svg';
import twitterIcon from '../assets/images/icon-twitter.svg';
import youtubeIcon from '../assets/images/icon-youtube.svg';
import upIcon from '../assets/images/icon-up.svg';
import downIcon from '../assets/images/icon-down.svg';

export const getTextColor = ( todayNumber ) => todayNumber > 0 ? 'text-green-500' : 'text-red-500';

export const getSocialIcon = ( socialIcon ) => {
    switch ( socialIcon ) {
      case 'facebook':
        return facebookIcon;
      case 'instagram':
        return instagramIcon;
      case 'twitter':
        return twitterIcon;
      case 'youtube':
        return youtubeIcon;
      default:
        return null;
    }
  };

export const getTodayIcon = ( todayNumber ) => todayNumber > 0 ? upIcon : downIcon;
