interface Image {
  height: string;
  width: string;
  backgroundColor: string;
  z_index: string;
  top: string;
}

const ImageGallery = () => {
  const images: Image[] = [
    {
      height: "h-80",
      width: "w-60",
      backgroundColor: "bg-red-600",
      z_index: "z-0",
      top: "top-14",
    },
    {
      height: "h-80",
      width: "w-72",
      backgroundColor: "bg-blue-600",
      z_index: "z-10",
      top: "top-60",
    },
    {
      height: "h-60",
      width: "w-72",
      backgroundColor: "bg-green-600",
      z_index: "z-0",
      top: "bottom-14",
    },
  ];

  return (
    <div
      className="relative min-h-full w-full"
      style={{ height: 3 * 100 + "vh" }}
    >
      {images.map((image) => {
        return (
          <div
            className={` absolute ${image.top} ${image.height} ${image.width} ${image.backgroundColor} ${image.z_index}`}
          ></div>
        );
      })}
    </div>
  );
};

export default ImageGallery;
