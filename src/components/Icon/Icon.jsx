import sprite from '../../image/sprite.svg';

const Icon = ({ width, height, iconId}) => {
  return (
    <svg width={width} height={height}>
      <use  href={`${sprite}#${iconId}`}/>
    </svg>
  );
};

export default Icon;