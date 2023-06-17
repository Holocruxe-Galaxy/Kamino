import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import styles from "./Faqs.module.css";
import AnimationBg from "../../components/AnimationBg/AnimationBg";

const Panel = ({ question, answer, activeTab, index, activateTab }) => {
  const [height, setHeight] = useState(0);
  const panelRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      const el = ReactDOM.findDOMNode(panelRef.current);
      const height = el.querySelector("#panel_inner").scrollHeight;
      setHeight(height);
    }, 333);
  }, []);

  const isActive = activeTab === index;
  const innerStyle = { height: `${isActive ? height : 0}px` };

  return (
    <div
      className={styles.panel}
      role="tabpanel"
      aria-expanded={isActive}
      ref={panelRef}
    >
      <button className={styles.panel_label} role="tab" onClick={activateTab}>
        {question}
      </button>
      <div
        id="panel_inner"
        className={styles.panel_inner}
        style={innerStyle}
        aria-hidden={!isActive}
      >
        <p className={styles.panel_content}>{answer}</p>
      </div>
    </div>
  );
};

const Faqs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const activateTab = (index) => {
    setActiveTab((prevActiveTab) => (prevActiveTab === index ? -1 : index));
  };

  return (
    <>
      <AnimationBg />
      <main className={styles.container}>
        <div className={styles.accordion} role="tablist">
          <h1>FAQs</h1>
          {panels.map((panel, index) => (
            <Panel
              key={index}
              activeTab={activeTab}
              index={index}
              {...panel}
              activateTab={() => activateTab(index)}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export const panels = [
  {
    question: "How does Holocruxe work?",
    answer:
      "Holocruxe is a tool that allows you to capture and store all your memories and experiences in one place. With its social media linking feature, you can import content from your favourite platforms and create a digital diary of your life. You can also share and collaborate with others, back up your memories in the cloud and access them from different devices.",
  },
  {
    question: "How does Holocruxe link to my social networks?",
    answer:
      "Holocruxe uses smart integration with your social networks to automatically import your posts, photos and videos. You just need to connect your social networks and the app will do the rest, adding that content to your personal diary.",
  },
  {
    question: "What does the artificial intelligence in Holocruxe do?",
    answer:
      "Artificial intelligence analyses your memories and experiences to generate an interactive and personalised diary. It analyses your memories and applies relevant tags. This includes facial recognition to identify people in your photos, as well as pattern analysis to tag specific events or activities. This makes it easy to search and quickly access specific moments in your diary.",
  },
  {
    question:
      "Does Holocruxe guarantee the privacy of my memories and personal data?",
    answer:
      "The privacy and security of your data is our priority. The app uses advanced security measures to protect your personal information and gives you options to control the privacy of your memories. You can choose what to share and with whom, while maintaining full control over your digital life. Protecting your data is our top priority.",
  },
  {
    question: "What happens to my Holocruxe data if I lose my phone?",
    answer:
      "Security is our top priority. Holocruxe stores and secures your memories in the cloud. If you lose your device, you will never lose your valuable memories.",
  },
  {
    question: "Is Holocruxe available on different platforms and devices?",
    answer:
      "Yes, you can access your memory journal from your mobile phone, tablet or even the web. In addition, the app automatically syncs across all your devices, making sure you never miss a single detail of your life.",
  },
  {
    question:
      "Can I share my memories and experiences with other people on the app?",
    answer:
      "Our app gives you the possibility to selectively share your memories and experiences with other people within the app. You can choose who to show certain moments and events to, creating a shared and collaborative diary. In addition, you can invite friends and family to be part of your experience, allowing you to view, comment and enjoy your shared memories. We believe that memories are even more valuable when they are shared, and our app is designed to facilitate that connection and the sharing of meaningful experiences between people.",
  },
  {
    question:
      "Does Holocruxe have advanced search functions to find specific memories?",
    answer:
      "Yes, Holocruxe has advanced search features that allow you to quickly find specific memories. You can search by dates, locations, tagged people or even use keywords to find that special moment you want to relive.",
  },
  {
    question: "Does the app offer cloud backup and sync options?",
    answer:
      "Yes, the app offers cloud backup and sync options. Your memories and journal are stored securely in the cloud, giving you peace of mind in case you lose or change your device. Plus, you can access your journal from anywhere and on any device with an internet connection.",
  },
  {
    question: "Are there any subscription plans or is the app completely free?",
    answer:
      "The app offers a combination of free features and premium options through subscription plans. You can enjoy many basic features for free, but we also offer additional benefits and advanced features for those who opt for a premium subscription.",
  },
  {
    question:
      "How long does it take for the app to update when I upload a photo or video to my social networks?",
    answer:
      "The update time may vary. Generally, the memories and experiences apps sync automatically, reflecting the content in a short time. Speed depends on sync settings, internet connection and other factors.",
  },
  {
    question: "How can I import my social media memories into the app?",
    answer:
      "You can import your social media memories by simply connecting your social media account in the app settings. Once connected, the app will automatically sync your content, such as posts, photos and videos, and add them to your digital diary.",
  },
];
export default Faqs;
