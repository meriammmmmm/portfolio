import React from "react";
import Typewriter from "typewriter-effect";
import { useLang } from "../../i18n";

function Type() {
  const { lang, t } = useLang();

  return (
    <Typewriter
      // Remounting on language change restarts the animation with the new
      // strings — Typewriter reads options once, on mount.
      key={lang}
      options={{
        strings: [t("home.role1"), t("home.role2")],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
