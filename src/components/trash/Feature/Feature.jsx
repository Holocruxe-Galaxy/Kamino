import React from 'react';
import styles from './Feature.module.css';
import StoryModelViewer from '../../models/trash/story';
import LegacyModelCanvas from '../../models/trash/legacy';
import RocketModelViewer from '../../models/trash/rocket';

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
        ) : props.modelType === 'rocket' ? (
          <RocketModelViewer />
        ) : (
          <img src={props.img} alt={props.src} />
        )
      ) : (
        <img src={props.img} alt={props.src} />
      )}
    </div>
  );
};

export default Feature;
