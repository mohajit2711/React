import React, { useEffect, useState } from 'react';
import './webcam.css'; // Import CSS file for styling

const width = 160; // Reduced width for smaller box
let height = 0;
let streaming = false;
let video = null;

export const StillPhotoCaptureDemo = ({ onPhotoCapture }) => {
  const [photoData, setPhotoData] = useState(null);
  // const formRef = useRef(null);

  function startup() {
    video = document.getElementById('video');

    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error(`An error occurred: ${err}`);
      });

    video.addEventListener(
      'canplay',
      () => {
        if (!streaming) {
          height = video.videoHeight / (video.videoWidth / width);
          if (isNaN(height)) {
            height = width / (4 / 3);
          }
          video.setAttribute('width', width);
          video.setAttribute('height', height);
          streaming = true;
        }
      },
      false
    );
  }

  function takepicture() {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, width, height);
    const data = canvas.toDataURL('image/png');
    console.log(data)
    setPhotoData(data);
    onPhotoCapture(data); // Pass the photo data to the parent component
  }

  useEffect(() => {
    startup();
  }, []);

  return (
    <div className="camera-container">
      <div className="camera-circle">
        <video id="video" className="camera-video">
          Video stream not available.
        </video>
        <button onClick={takepicture} id="startbutton" className="camera-button">
          Take photo
        </button>
      </div>
      {/* Conditional message */}
      {photoData && <p>Photo has been captured!</p>}
    </div>
  );
};
