const Icon = (props) => {
  // obj도 추출 가능!
  const { IconComponent, hasWidth } = props;

  return (
    <div
      className="flex justify-center items-center"
      style={{ width: hasWidth ? "75px" : null, height: "50px" }}
    >
      <IconComponent className="w-6 h-6" />
    </div>
  );
};

export default Icon;
