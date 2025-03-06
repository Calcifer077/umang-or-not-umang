import React from "react";
import { useState } from "react";
import {
  InferenceContext,
  InferenceResult,
  PhotoCollector,
} from "landingai-react";

const apiInfo = {
  endpoint:
    "https://predict.app.landing.ai/inference/v1/predict?endpoint_id=b88de619-53f1-43d9-a289-cb0c67227c8d",
  key: "land_sk_7CsjUEXLV8PlipAH7Ow0KMjd17aNMwgcdBkoV0nLK8wg435v1P",
};

export default function App() {
  const [image, setImage] = useState();

  return (
    <InferenceContext.Provider value={apiInfo}>
      <PhotoCollector setImage={setImage} />
      <InferenceResult image={image} />
    </InferenceContext.Provider>
  );
}
