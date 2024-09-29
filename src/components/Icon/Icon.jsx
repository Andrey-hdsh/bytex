const Icon = (name, className) => {
  return (
    <svg className={className}>
      <use xlinkHref={`/assets/icons/sprite.svg#${name}`} />
    </svg>
  );
};

export default Icon;