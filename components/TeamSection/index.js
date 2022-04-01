import React from 'react';
import dataMembers from '../../constant/data-members';
import SectionHeader from '../SectionHeader';
import TeamCard from '../TeamCard';

const TeamSection = () => {
  return (
    <section className="section text-center">
      <div className="container">
        <SectionHeader
          slogan="Our Team"
          title="The most qualified and talented individuals"
        />
        <div className="grid mt-0 md:mt-[-30px] lg:mt-[-20px] gap-y-[35px] md:gap-y-0 xl:gap-x-[35px] xl:gap-y-[30px] grid-cols-2 lg:grid-cols-3">
          {dataMembers.map(
            ({ id, imgSrc, altText, title, designation, socialProfile }) => (
              <TeamCard
                key={id}
                id={id}
                src={imgSrc}
                altText={altText}
                title={title}
                designation={designation}
                socials={socialProfile}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
