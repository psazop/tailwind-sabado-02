
const SocialCardDetail = ({
  index,
  socialUser,
  borderTopColor,
  socialIcon,
  followersNumber,
  followerText,
  icon,
  textColor,
  totalByDay
}) => {
  return (
    <article
      key={index}
      className={`bg-[#F0F3FA] rounded-md ${borderTopColor} p-5 text-center hover:bg-slate-200 transition all ease-in-out duration-200 cursor-pointer`}
    >
      <div className='flex justify-center items-center mb-5'>
        <img src={socialIcon} alt='facebook' className='mr-2' />
        <p className='font-medium text-gray-600'>{socialUser}</p>
      </div>
      <p className='font-semibold text-6xl mb-1'>{followersNumber}</p>
      <p className='uppercase tracking-[0.30em] text-gray-400 mb-6'>{followerText}</p>
      <div className='flex justify-center items-center'>
        <img src={icon} alt='arrow' className='mr-2' />
        <p className={`${textColor} font-semibold`}>{totalByDay} Today</p>
      </div>
    </article>
  );
};

export default SocialCardDetail