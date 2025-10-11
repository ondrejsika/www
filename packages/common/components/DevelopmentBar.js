const DevelopmentBar = () => {
  if (process.env.NODE_ENV == "development") {
    return (
      <div
        style={{
          backgroundColor: "red",
          height: "0.2em",
        }}
      ></div>
    );
  } else {
    return <></>;
  }
};

DevelopmentBar.displayName = "DevelopmentBar";

export default DevelopmentBar;
