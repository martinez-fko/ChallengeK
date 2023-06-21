import { useEffect, useState } from "react";

const usePhotos = () => {
  const [photos, setPhotos] = useState([]);


  useEffect(() => {
    fetch( 'https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => setPhotos(json) )

    
  }, []);


  return { photos}

}

export default usePhotos;