import React from "react";

import SocialIconLink from "./SocialIconLink";
import { SOCIALTYPE } from "@/types";

const Socials = (props: any) => {
  const { socialLinks } = props;
  return (
    <div className="flex space-x-6">
      {socialLinks.map(
        (item: { name: React.Key | null | undefined; url: string }) => (
          <SocialIconLink
            key={item.name}
            name={item.name as SOCIALTYPE}
            url={item.url}
          />
        )
      )}
    </div>
  );
};

export default Socials;
