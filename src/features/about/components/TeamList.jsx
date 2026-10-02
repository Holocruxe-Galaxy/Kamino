import { useTranslation } from "react-i18next";
import styles from "./TeamList.module.css";
import MemberCard from "./MemberCard";
import { TEAM_MEMBERS } from "../data/teamMembers";

export const TeamList = ({ members = TEAM_MEMBERS }) => {
  const { t } = useTranslation();

  return (
    <section className={styles.teamSection} aria-label="Equipo de trabajo">
      <div className={styles.wrap}>
        <h2 className={styles.sectionTitle}>
          {t("aboutPage.team.title", "El equipo que lo hace posible.")}
        </h2>

        <div className={styles.teamGrid}>
          {members.map((member, i) => (
            <MemberCard key={member.id || i} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamList;