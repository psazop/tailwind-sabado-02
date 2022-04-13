import React from 'react';
import { getSocialIcon, getTodayIcon, getTextColor} from '../helpers/cardHelper';
import SocialCardDetail from './SocialCardDetail';

const SocialCard = ( { jsonData }) => {
  return (
    <section className="grid grid-cols-4 gap-7">
        {
          jsonData.map((item, index) => {
            return (
              <SocialCardDetail
                key={index}
                socialUser={item.socialUser}
                socialIcon={getSocialIcon(item.socialApp)}
                followersNumber={item.followersNumber}
                borderTopColor={item.borderTopColor}
                icon={getTodayIcon( item.followersTodayNumber) }
                totalByDay={ item.followersTodayNumber }
                followerText={ item.followerText }
                textColor={ getTextColor( item.followersTodayNumber ) }
              />
            )
          })
        }
      </section>
  )
}

export default SocialCard