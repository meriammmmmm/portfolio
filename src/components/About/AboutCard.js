import React from "react";
import { useT } from "../../i18n";

function AboutCard() {
  const t = useT();

  return (
    <div
      className="rd-card"
      style={{ padding: "36px", borderRadius: 20, height: "auto" }}
    >
      <h2 className="rd-title">
        {t("about.cardTitleA")}
        <span className="purple">{t("about.cardTitleB")}</span>
        {t("about.cardTitleC")}
      </h2>

      <p className="rd-sub">
        {t("about.cardP1a")}
        <span className="purple">{t("about.cardP1b")}</span>
        {t("about.cardP1c")}
      </p>

      <p className="rd-sub">
        {t("about.cardP2a")}
        <span className="purple">{t("about.cardP2b")}</span>
        {t("about.cardP2c")}
        <span className="purple">{t("about.cardP2d")}</span>
        {t("about.cardP2e")}
      </p>
    </div>
  );
}

export default AboutCard;
