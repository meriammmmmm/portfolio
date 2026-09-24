import React from "react";
import me from "../../Assets/meriam.png";
import Tilt3D from "../Tilt3D";
import { useT } from "../../i18n";

/**
 * Hero visual: photo in a circular disc, orbited by dashed rings, with
 * floating code chips, an availability pill and a meriam.js snippet card.
 * Everything except the photo is CSS — no extra assets, and it themes itself.
 */
function Portrait() {
  const t = useT();

  return (
    <Tilt3D className="rd-portrait-tilt" max={10} scale={1}>
      <div className="rd-portrait" aria-hidden="false">
      <span className="rd-portrait__ring rd-portrait__ring--outer" aria-hidden="true" />
      <span className="rd-portrait__ring rd-portrait__ring--inner" aria-hidden="true" />

      <div className="rd-portrait__disc">
        <img src={me} alt={t("home.photoAlt")} />
      </div>

      <span className="rd-chip rd-chip--tl" aria-hidden="true">
        &lt;/&gt;
      </span>
      <span className="rd-chip rd-chip--br" aria-hidden="true">
        {"{ }"}
      </span>

      <span className="rd-status">
        <i aria-hidden="true" />
        {t("home.available")}
      </span>

      <div className="rd-codecard" aria-hidden="true">
        <div className="rd-codecard__bar">
          <em />
          <em />
          <em />
          <span>{t("brand.codeFile")}</span>
        </div>
        <pre className="rd-codecard__body">
          <code>
            <span className="tok-kw">const</span> dev = &#123;{"\n"}
            {"  "}name: <span className="tok-str">"Meriam Mhadhbi"</span>,{"\n"}
            {"  "}stack: <span className="tok-str">"React / Next.js"</span>,{"\n"}
            {"  "}status: <span className="tok-str">"Open to work"</span>
            {"\n"}&#125;
          </code>
        </pre>
      </div>
      </div>
    </Tilt3D>
  );
}

export default Portrait;
