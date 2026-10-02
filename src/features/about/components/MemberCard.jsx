import styles from "./MemberCard.module.css";

export const MemberCard = ({ member }) => {
  return (
    <div
      className={styles.memberCard}
      aria-label={`${member.name}, equipo de Holocruxe`}
    >
      <div className={styles.avatarFrame}>
        <img
          src={member.image}
          alt={member.name}
          className={styles.avatarImg}
          loading="lazy"
        />
      </div>
      <strong className={styles.memberName}>{member.name}</strong>
      {member.role && (
        <span className={styles.memberRole}>{member.role}</span>
      )}
    </div>
  );
};

export default MemberCard;
