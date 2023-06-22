import React from 'react';
import styles from './Feature.module.css';
import ModelViewer from '../models/modelviewer';
import StoryModelViewer from '../models/story';
import LegacyModelCanvas from '../models/legacy';

const Feature = (props) => {
  return (
    <div className={styles.features_container}>
      <div className={styles.vertical_line}></div>
      <h4>{props.verb}</h4>
      <h3>{props.phrase}</h3>
      <p>{props.paragraph}</p>
      {props.modelPath ? (
        props.modelType === 'story' ? (
          <StoryModelViewer modelPath="./story/scene.gltf" modelScale={1} />
        ) : props.modelType === 'legacy' ? (
          <LegacyModelCanvas modelPath={props.modelPath} />
        ) : (
          <ModelViewer modelPath={props.modelPath} />
        )
      ) : (
        <img src={props.img} alt={props.src} />
      )}
    </div>
  );
};

export default Feature;
