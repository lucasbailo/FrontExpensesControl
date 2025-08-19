const InfoSection = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800">O QUE É A INTEGRAMENTE</h2>
        <p className="text-sm text-gray-600 mt-2">
          Ut enim ad minim mollit anim id est laborum. veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip dolore ex ea commodo consequat.
        </p>
        <p className="text-sm text-gray-600 mt-2">
          Duis aute irure dolor in reprehenderit in voluptate velit esse anim cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="flex justify-center mt-6">
        <img
          src="path_to_your_image.jpg" 
          alt="Imagem"
          className="w-32 h-32 object-cover"
        />
      </div>
    </div>
  );
};

export default InfoSection;